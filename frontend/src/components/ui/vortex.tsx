import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: any;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const tick = useRef(0);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "transparent";
  const noise3D = createNoise3D();
  const particleProps = useRef<Float32Array>(new Float32Array(particlePropsLength));
  const center = useRef<[number, number]>([0, 0]);

  const TAU = 2 * Math.PI;
  const rand = (n: number) => n * Math.random();
  const randRange = (n: number) => n - rand(2 * n);
  const fadeInOut = (t: number, m: number) => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number) =>
    (1 - speed) * n1 + speed * n2;

  const setup = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    resize(canvas);
    initParticles();
    draw(canvas, ctx);
  };

  const initParticles = () => {
    tick.current = 0;
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const x = rand(canvas.width);
    const y = center.current[1] + randRange(rangeY);
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);
    particleProps.current.set([x, y, 0, 0, 0, ttl, speed, radius, hue], i);
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick.current++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (backgroundColor !== "transparent") {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    drawParticles(ctx);
    renderGlow(canvas, ctx);

    animationFrameId.current = requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const [
      x, y, vx, vy, life, ttl, speed, radius, hue
    ] = particleProps.current.slice(i, i + particlePropCount);

    const n = noise3D(x * xOff, y * yOff, tick.current * zOff) * noiseSteps * TAU;
    const newVx = lerp(vx, Math.cos(n), 0.5);
    const newVy = lerp(vy, Math.sin(n), 0.5);
    const x2 = x + newVx * speed;
    const y2 = y + newVy * speed;

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    const isOut = x2 > canvas.width || x2 < 0 || y2 > canvas.height || y2 < 0;
    if (isOut || life + 1 > ttl) {
      initParticle(i);
    } else {
      particleProps.current.set([x2, y2, newVx, newVy, life + 1, ttl, speed, radius, hue], i);
    }
  };

  const drawParticle = (
    x: number, y: number, x2: number, y2: number,
    life: number, ttl: number, radius: number, hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };

  const resize = (canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center.current = [0.5 * innerWidth, 0.5 * innerHeight];
    initParticles();
  };

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.filter = "blur(10px) brightness(140%)";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) resize(canvas);
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Full-screen animated background (fixed) */}
      <div
        className={cn("fixed inset-0 z-0 w-screen h-screen", props.containerClassName)}
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={containerRef}
          className="absolute inset-0 z-0 flex items-center justify-center bg-transparent will-change-transform"
        >
          <canvas ref={canvasRef} className="w-full h-full block" />
        </motion.div>
      </div>

      {/* Foreground content (scrollable) */}
      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </>
  );
};

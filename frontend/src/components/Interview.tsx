import { Vortex } from "./ui/vortex";

export function Interview() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center px-4 md:px-10 py-12 w-full h-full"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
          🚧 Interview Section Coming Soon
        </h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-300 text-center max-w-xl">
          Interview questions, tips, and mock sessions powered by DSAverseWithAI are under construction!
          Stay tuned for an AI-driven experience to help you ace your interviews with confidence.
        </p>
      </Vortex>
    </div>
  );
}

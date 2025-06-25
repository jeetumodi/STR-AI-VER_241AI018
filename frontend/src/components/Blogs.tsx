"use client";

import { Vortex } from "./ui/vortex";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function Blogs() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center px-4 md:px-10 py-12 w-full h-full"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center text-white">
          Blogs:
        </h1>

        <CardContainer className="inter-var">
          <CardBody className="relative group/card bg-neutral-900/70 backdrop-blur-md border border-white/20 w-full sm:w-[30rem] rounded-xl p-6 dark:shadow-2xl">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-zinc-100"
            >
              Portfolio for SMP
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/images/portfolio.png"
                alt="Portfolio Preview"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>

            <div className="flex justify-end items-center mt-10">
              <CardItem
                translateZ={20}
                as="a"
                href="https://jeetumodi.github.io/STR-AI-VER_241AI018/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition"
              >
                Visit →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </Vortex>
    </div>
  );
}

import { Vortex } from "./ui/vortex";
import { HoverEffect } from "./ui/card-hover-effect";
import { AnimatedBrand } from "./ui/Animated-brand";

export function Home() {
  const projects = [
    {
      title: "DSAverseWithAI",
      description:
        "DSAverseWithAI is your smart companion for mastering Data Structures and Algorithms. Learn faster with AI-powered guidance, interactive visuals, real-time code feedback, and tailored problem sets — all in one intelligent platform.",
      link: "https://stripe.com",
    },
    {
      title: "Course",
      description:
        "Master DSA with AI-powered guidance. Learn key concepts, solve problems, and get real-time feedback — all tailored to help you code smarter and faster.",
      link: "/course",
    },
    {
      title: "Problems/Practice",
      description:
        "Sharpen your skills with curated DSA problems. Practice by topic, get instant AI feedback, and track your progress as you master each concept.",
      link: "/problems",
    },
    {
      title: "Blogs",
      description:
        "Explore DSA concepts, tips, and insights. Our blogs break down complex topics, share coding strategies, and keep you updated with the latest in tech and algorithms.",
      link: "/blogs",
    },
    {
      title: "Interview",
      description:
        "Ace your interviews with AI-driven mock sessions. Practice coding questions, get instant feedback, and build the confidence to crack top tech interviews.",
      link: "/interview",
    },
    {
      title: "Contacts",
      description:
        "Have questions or feedback? Reach out to us — we’re here to help you on your DSA journey.",
      link: "/contacts",
    },
  ];

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="max-w-5xl mx-auto px-8">
          <AnimatedBrand />
          <HoverEffect items={projects} />
        </div>
      </Vortex>
    </div>
  );
}

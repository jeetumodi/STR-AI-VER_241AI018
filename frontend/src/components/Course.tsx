"use client";
import { Vortex } from "./ui/vortex";
import { BackgroundGradient } from "./ui/background-gradient";
import { CheckCircle } from "lucide-react";

export function Course() {
  return (
    <div className="w-full min-h-1 overflow-hidden">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md text-white h-full">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full min-h-screen space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Choose Your Plan
          </h1>
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center items-center">
            {/* Free Plan */}
            <BackgroundGradient className="rounded-[22px] w-[300px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold text-black dark:text-white">Free</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">Perfect to get started with DSA.</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">₹0/month</p>
                <ul className="text-left text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li><CheckCircle size={16} className="inline mr-1 text-green-500" /> 100+ DSA problems</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-green-500" /> AI-powered hints</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-green-500" /> Access to blogs</li>
                </ul>
              </div>
            </BackgroundGradient>

            {/* Basic Plan */}
            <BackgroundGradient className="rounded-[22px] w-[300px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold text-black dark:text-white">Basic</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">Level up your DSA journey.</p>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">₹499/month</p>
                <ul className="text-left text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li><CheckCircle size={16} className="inline mr-1 text-blue-500" /> All Free features</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-blue-500" /> 500+ topic-wise problems</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-blue-500" /> Intermediate AI explanations</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-blue-500" /> Practice streaks & stats</li>
                </ul>
              </div>
            </BackgroundGradient>

            {/* Premium Plan */}
            <BackgroundGradient className="rounded-[22px] w-[300px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold text-black dark:text-white">Premium</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">Ace interviews with AI by your side.</p>
                <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">₹999/month</p>
                <ul className="text-left text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li><CheckCircle size={16} className="inline mr-1 text-yellow-500" /> All Basic features</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-yellow-500" /> 2000+ curated problems</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-yellow-500" /> Personalized AI tutor</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-yellow-500" /> Interview prep kits</li>
                  <li><CheckCircle size={16} className="inline mr-1 text-yellow-500" /> Real-time performance analytics</li>
                </ul>
              </div>
            </BackgroundGradient>
          </div>
        </Vortex>
      </div>
    </div>
  );
}

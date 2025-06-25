"use client";
import { motion } from "framer-motion";

export function AnimatedBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center pt-20 mb-8" // ⬅️ Add top padding here
    >
      <motion.img
        src="/images/Logo.png"
        alt="Logo"
        className="h-[70px] w-auto mb-3"
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      />

      <motion.span
        className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        DSAverseWithAI
      </motion.span>
    </motion.div>
  );
}

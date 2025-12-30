"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl lg:max-w-3xl"
    >
      <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 leading-tight">
        As Aventuras de Dindim —{" "}
        <span className="text-gray-600 block sm:inline mt-2">
          Finanças pessoais sem enrolação.
        </span>
      </h1>
      <p className="font-body text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
        Explicações simples, decisões mais seguras. Aprenda a cuidar do seu
        dinheiro sem dor de cabeça.
      </p>
    </motion.div>
  );
}

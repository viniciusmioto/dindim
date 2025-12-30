"use client";

import { motion } from "framer-motion";

export default function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-accent text-white px-8 py-3 rounded-full font-bold text-lg shadow-sm hover:opacity-90 transition-colors border-2 border-accent"
      >
        Inscrever-se
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#f4f1ec" }}
        whileTap={{ scale: 0.95 }}
        className="bg-transparent text-foreground px-8 py-3 rounded-full font-bold text-lg shadow-sm transition-colors border-2 border-stroke"
      >
        Ler Artigos
      </motion.button>
    </motion.div>
  );
}

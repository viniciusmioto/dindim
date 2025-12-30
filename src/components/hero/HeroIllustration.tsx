"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants for floating elements
const floatVariant = (delay: number) => ({
  animate: {
    y: [0, -8, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: delay,
    },
  },
});

const rainVariant = (delay: number) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [0, 10, 0],
    opacity: [0.1, 0.3, 0.1],
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: delay,
    },
  },
});

export default function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative w-full h-[400px] flex justify-center items-center"
    >
      {/* Background Rain of Coins/Money - Absolute positioned */}

      {/* Coin Top Left */}
      <motion.div
        variants={floatVariant(0)}
        animate="animate"
        className="absolute top-10 left-10 w-12 h-12 z-0 opacity-20"
      >
        <Image src="/assets/coin.svg" alt="Coin" width={48} height={48} />
      </motion.div>

      {/* Wad Top Right */}
      <motion.div
        variants={floatVariant(1.5)}
        animate="animate"
        className="absolute top-20 right-10 w-16 h-16 z-0 opacity-20"
      >
        <Image
          src="/assets/wad_of_cash.svg"
          alt="Cash"
          width={64}
          height={64}
        />
      </motion.div>

      {/* Coin Bottom Left */}
      <motion.div
        variants={floatVariant(0.5)}
        animate="animate"
        className="absolute bottom-20 left-20 w-10 h-10 z-0 opacity-20"
      >
        <Image src="/assets/coin.svg" alt="Coin" width={40} height={40} />
      </motion.div>

      {/* Coin Bottom Right */}
      <motion.div
        variants={floatVariant(2)}
        animate="animate"
        className="absolute bottom-10 right-20 w-14 h-14 z-0 opacity-20"
      >
        <Image src="/assets/coin.svg" alt="Coin" width={56} height={56} />
      </motion.div>

      {/* Floating Note Middle Left */}
      <motion.div
        variants={rainVariant(1)}
        initial="initial"
        animate="animate"
        className="absolute top-1/3 left-0 w-20 h-12 z-0 opacity-20"
      >
        <Image
          src="/assets/banknote_money.svg"
          alt="Banknote"
          width={80}
          height={48}
          className="rotate-12"
        />
      </motion.div>

      {/* Main Character */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-10">
        <Image
          src="/assets/dindim.svg"
          alt="Dindim Character"
          fill
          className="object-contain drop-shadow-xl"
          priority
        />
      </div>
    </motion.div>
  );
}

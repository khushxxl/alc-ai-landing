import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Icon from "../../app/assets/icon.png";
import IphoneMockup from "../../app/assets/iphone-mockup.png";

function Hero() {
  return (
    <div className="w-full relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="top-0 sticky z-50 flex justify-between items-center p-5 px-10"
      >
        <Link className="flex items-center space-x-3" href={"/"}>
          <Image
            src={Icon}
            alt="logo"
            width={50}
            height={50}
            className="border-white rounded-xl"
          />
          <h1 className="text-white text-xl font-bold">Alc AI</h1>
        </Link>
      </motion.div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white text-5xl md:text-6xl font-bold tracking-tight"
          >
            Alc AI
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="block text-3xl md:text-4xl mt-2 text-gray-200 font-normal"
            >
              Your Smart Alcohol AI Assistant
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Capture & Identify alcohol brands, ingredients, and more with
            <br />
            Alc AI
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Image
              src={
                "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              }
              alt="logo"
              height={200}
              width={150}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Image
            src={IphoneMockup}
            alt="Alc AI App Interface"
            height={600}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

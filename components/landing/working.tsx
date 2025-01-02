import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Working() {
  const steps = [
    {
      title: "Take a Photo",
      description: "Simply snap a picture of any alcohol bottle or beverage",
      icon: "📸",
    },
    {
      title: "AI Analysis",
      description: "Our AI instantly analyzes and identifies the drink",
      icon: "🤖",
    },
    {
      title: "Get Details",
      description:
        "Receive comprehensive information about ingredients, alcohol content, and more",
      icon: "📝",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center mb-10 md:mb-0">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Alc AI makes it simple to identify and learn about any alcoholic
            beverage in just seconds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 mx-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-white text-xl font-semibold mb-8">
            Ready to get started?
          </p>
          <Link href={"https://apps.apple.com/gb/app/alc-ai/id6739513699"}>
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
              width={150}
              height={50}
              className="mx-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Working;

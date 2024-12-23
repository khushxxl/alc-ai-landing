import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col md:flex-row justify-center items-center py-8 gap-4 bg-gray-800/50 backdrop-blur-lg"
    >
      <h3 className="text-white text-md">2024 © Alc AI</h3>
      <h3 className="text-white text-md">
        Made by{" "}
        <a
          href="https://x.com/khushaal_04"
          target="_blank"
          className="underline hover:text-gray-300 transition-colors"
        >
          Khushaal
        </a>
      </h3>
      <h3 className="text-white text-md">
        <Link
          className="underline hover:text-gray-300 transition-colors"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </h3>
    </motion.div>
  );
}

export default Footer;

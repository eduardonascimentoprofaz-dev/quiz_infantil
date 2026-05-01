import { motion } from "framer-motion";

interface MascotProps {
  state: "thinking" | "happy" | "celebrating";
}

export default function Mascot({ state }: MascotProps) {
  const getImageUrl = () => {
    if (state === "thinking") {
      return "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/mascot-thinking-VyrmGvzxQsnta9KiHVcofK.webp";
    }
    return "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/mascot-happy-assdUjDfH9nyY6HVQTBbLi.webp";
  };

  const getAnimation = () => {
    if (state === "celebrating") {
      return {
        y: [0, -20, 0, -20, 0],
        rotate: [0, 5, -5, 5, 0],
      };
    }
    if (state === "thinking") {
      return {
        y: [0, -5, 0],
        rotate: [0, 2, -2, 0],
      };
    }
    return {
      y: [0, -10, 0],
    };
  };

  return (
    <motion.div
      className="flex justify-center mb-4"
      animate={getAnimation()}
      transition={{
        duration: state === "celebrating" ? 0.6 : 2,
        repeat: state === "celebrating" ? 1 : Infinity,
        repeatType: "reverse",
      }}
    >
      <img
        src={getImageUrl()}
        alt="Mascote do Quiz"
        className="h-32 w-32 object-contain drop-shadow-lg"
      />
    </motion.div>
  );
}

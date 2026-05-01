import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AnswerFeedbackProps {
  isCorrect: boolean;
  onNext: () => void;
}

export default function AnswerFeedback({
  isCorrect,
  onNext,
}: AnswerFeedbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
    >
      {/* Confetti Animation for Correct Answer */}
      {isCorrect && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 400,
                y: -300,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="fixed w-3 h-3 pointer-events-none"
              style={{
                left: "50%",
                top: "50%",
                background: [
                  "#3B82F6",
                  "#EC4899",
                  "#10B981",
                  "#FBBF24",
                  "#A855F7",
                ][i % 5],
              }}
            />
          ))}
        </>
      )}

      {/* Feedback Message */}
      <motion.div
        className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-sm mx-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-6xl mb-4">
          {isCorrect ? "✅" : "❌"}
        </div>
        <h3 className="text-3xl font-bold mb-2">
          {isCorrect ? "Correto!" : "Errado!"}
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          {isCorrect
            ? "Parabéns! Você acertou! 🎉"
            : "Tente novamente na próxima! 💪"}
        </p>
        <Button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 text-lg rounded-xl pointer-events-auto"
        >
          Próxima Pergunta →
        </Button>
      </motion.div>
    </motion.div>
  );
}

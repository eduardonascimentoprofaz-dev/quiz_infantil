import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Mascot from "./Mascot";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  answered: boolean;
  correctAnswer: number;
  onSelectAnswer: (index: number) => void;
  onShowHint: () => void;
  showHint: boolean;
  hint: string;
  animeImage?: number;
}

// Mapeamento de imagens de anime
const animeImages: { [key: number]: string } = {
  1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-character-1-cs4RzmB9hxP9cuZDzJsK2F.webp",
  2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-character-2-SXRw8oxxnbG2qe3mXEPPgb.webp",
  3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-character-3-FKARYnxpADYmSKbkDxRx9o.webp",
  4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-character-4-i3LYTnvpxwvq9fvqV9uTCf.webp",
  5: "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-character-5-PtsyUsjhZskTS7PHTotAxy.webp",
};

export default function QuestionCard({
  question,
  options,
  selectedAnswer,
  answered,
  correctAnswer,
  onSelectAnswer,
  onShowHint,
  showHint,
  hint,
  animeImage,
}: QuestionCardProps) {
  const imageUrl = animeImage ? animeImages[animeImage] : null;

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 px-3 sm:px-4 w-full">
      {/* Anime Character Image or Mascot */}
      {imageUrl ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-32 w-32 sm:h-40 sm:w-40 flex items-center justify-center"
        >
          <img
            src={imageUrl}
            alt="Personagem de anime"
            className="h-full w-full object-contain drop-shadow-lg"
          />
        </motion.div>
      ) : (
        <Mascot state={answered ? "happy" : "thinking"} />
      )}

      {/* Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-blue-200">
          <p className="text-xl sm:text-2xl font-bold text-center text-gray-800 leading-snug">
            {question}
          </p>
        </div>
      </motion.div>

      {/* Hint Button and Display */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-md"
      >
        <Button
          onClick={onShowHint}
          disabled={answered}
          variant="outline"
          className="w-full mb-3 bg-yellow-100 hover:bg-yellow-200 border-yellow-300 text-yellow-800 font-semibold text-sm sm:text-base py-2 sm:py-3"
        >
          💡 Pista
        </Button>

        {showHint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-3 sm:p-4 mb-4"
          >
            <p className="text-xs sm:text-sm text-yellow-900 font-medium">
              {hint}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-md grid grid-cols-2 gap-2 sm:gap-3"
      >
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === correctAnswer;
          const showCorrect = answered && isCorrect;
          const showIncorrect = answered && isSelected && !isCorrect;

          return (
            <motion.button
              key={index}
              onClick={() => onSelectAnswer(index)}
              disabled={answered}
              whileHover={!answered ? { scale: 1.05 } : {}}
              whileTap={!answered ? { scale: 0.95 } : {}}
              className={`
                p-3 sm:p-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 min-h-16 sm:min-h-20 flex items-center justify-center
                ${
                  showCorrect
                    ? "bg-green-500 text-white shadow-lg scale-105"
                    : showIncorrect
                      ? "bg-red-500 text-white shadow-lg"
                      : isSelected && !answered
                        ? "bg-purple-500 text-white shadow-lg"
                        : answered
                          ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                          : "bg-gradient-to-br from-blue-400 to-blue-500 text-white hover:shadow-lg"
                }
              `}
            >
              <span className="text-center text-xs sm:text-base leading-tight">
                {option}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}

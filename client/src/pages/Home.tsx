import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import RankingBoard from "@/components/RankingBoard";

export default function Home() {
  const [, navigate] = useLocation();
  const [showRanking, setShowRanking] = useState(false);

  if (showRanking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-8">
        <RankingBoard onClose={() => setShowRanking(false)} />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-8"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/background-pattern-3RQhhNMbwqCosu8ApdLzrm.webp')",
        backgroundSize: "400px 400px",
      }}
    >
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl mb-6 sm:mb-8"
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/hero-quiz-a9fspigcT3mfN9EdTZkawm.webp"
          alt="Quiz Adventure"
          className="w-full h-auto rounded-3xl shadow-2xl"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-8 shadow-2xl text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3 sm:mb-4">
          Quiz Infantil
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-6 leading-relaxed">
          Bem-vindo à aventura do conhecimento! 🎉
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-left">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
            Como Jogar:
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">❓</span>
              <span>Responda 250 perguntas divertidas</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">💡</span>
              <span>Use pistas quando precisar</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">⭐</span>
              <span>Ganhe pontos por acertos</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">🏆</span>
              <span>Entre no ranking dos melhores</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Button
            onClick={() => navigate("/quiz")}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            🚀 Começar Jogo
          </Button>

          <Button
            onClick={() => setShowRanking(true)}
            variant="outline"
            className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 font-bold py-4 sm:py-6 text-base sm:text-lg rounded-xl"
          >
            🏆 Ver Ranking
          </Button>
        </div>

        <p className="text-xs sm:text-sm text-gray-500">
          250 perguntas • 12 categorias • Sistema de ranking • Divertido e educativo!
        </p>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="fixed bottom-6 sm:bottom-8 left-4 sm:left-8 text-4xl sm:text-5xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 text-4xl sm:text-5xl"
      >
        🎈
      </motion.div>
    </div>
  );
}

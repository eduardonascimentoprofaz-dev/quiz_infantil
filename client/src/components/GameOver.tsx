import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { addRanking, isTopScore } from "@/lib/rankingService";
import RankingBoard from "./RankingBoard";

interface GameOverProps {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function GameOver({
  score,
  correctAnswers,
  totalQuestions,
  onRestart,
}: GameOverProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const [playerName, setPlayerName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const [showRanking, setShowRanking] = useState(false);
  const [isTopScoreFlag, setIsTopScoreFlag] = useState(false);

  const getPerformanceMessage = () => {
    if (percentage === 100) return "Perfeito! Você é um gênio! 🧠";
    if (percentage >= 80) return "Excelente! Muito bom! 🌟";
    if (percentage >= 60) return "Muito bem! Continue praticando! 💪";
    if (percentage >= 40) return "Bom esforço! Tente novamente! 🚀";
    return "Não desista! Você vai melhorar! 💫";
  };

  const getEmoji = () => {
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🎉";
    if (percentage >= 60) return "👏";
    if (percentage >= 40) return "😊";
    return "💪";
  };

  const handleSaveScore = () => {
    const name = playerName.trim() || "Jogador Anônimo";
    addRanking(name, score, correctAnswers, totalQuestions);
    setIsTopScoreFlag(isTopScore(score));
    setShowNameInput(false);
  };

  if (showRanking) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-3 sm:px-4 py-6 sm:py-8 w-full max-w-lg"
      >
        <RankingBoard
          onClose={() => setShowRanking(false)}
          highlightScore={score}
        />
      </motion.div>
    );
  }

  if (showNameInput) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-3 sm:px-4 py-6 sm:py-8 w-full max-w-lg"
      >
        {/* Celebration Animation */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="text-6xl sm:text-8xl"
        >
          {getEmoji()}
        </motion.div>

        {/* Score Display */}
        <div className="w-full bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-purple-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-800 mb-4 sm:mb-6">
            Parabéns!
          </h2>

          <div className="text-center mb-6 sm:mb-8">
            <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              {score}
            </div>
            <p className="text-base sm:text-lg text-gray-700 font-semibold">
              Pontos
            </p>
          </div>

          {/* Performance Stats */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <span className="text-sm sm:text-base text-gray-700 font-semibold">
                Acertos:
              </span>
              <span className="text-xl sm:text-2xl font-bold text-green-600">
                {correctAnswers}/{totalQuestions}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-green-600"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="text-center mt-2 text-xs sm:text-sm font-semibold text-gray-600">
              {percentage}% de acurácia
            </p>
          </div>

          {/* Performance Message */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8 text-center">
            <p className="text-base sm:text-lg font-bold text-yellow-900">
              {getPerformanceMessage()}
            </p>
          </div>

          {/* Name Input */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2 sm:mb-3">
              📝 Qual é seu nome?
            </label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSaveScore()}
              placeholder="Digite seu nome..."
              maxLength={20}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base sm:text-lg font-semibold"
              autoFocus
            />
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSaveScore}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 sm:py-6 text-base sm:text-lg rounded-xl mb-3 sm:mb-4"
          >
            💾 Salvar Pontuação
          </Button>

          <Button
            onClick={onRestart}
            variant="outline"
            className="w-full border-gray-300 text-gray-700 font-bold py-3 sm:py-4 text-base sm:text-lg rounded-xl"
          >
            🔄 Jogar Novamente
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-3 sm:px-4 py-6 sm:py-8 w-full max-w-lg"
    >
      {/* Celebration Animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="text-6xl sm:text-8xl"
      >
        {getEmoji()}
      </motion.div>

      {/* Results Card */}
      <div className="w-full bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-purple-300">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-800 mb-4 sm:mb-6">
          Parabéns!
        </h2>

        {/* Top Score Badge */}
        {isTopScoreFlag && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mb-4 sm:mb-6 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base">
              ⭐ Você entrou no Top 10!
            </div>
          </motion.div>
        )}

        {/* Score Display */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            {score}
          </div>
          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            Pontos
          </p>
        </div>

        {/* Performance Stats */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="text-sm sm:text-base text-gray-700 font-semibold">
              Acertos:
            </span>
            <span className="text-xl sm:text-2xl font-bold text-green-600">
              {correctAnswers}/{totalQuestions}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-green-600"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <p className="text-center mt-2 text-xs sm:text-sm font-semibold text-gray-600">
            {percentage}% de acurácia
          </p>
        </div>

        {/* Performance Message */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8 text-center">
          <p className="text-base sm:text-lg font-bold text-yellow-900">
            {getPerformanceMessage()}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <Button
            onClick={() => setShowRanking(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 sm:py-6 text-base sm:text-lg rounded-xl"
          >
            🏆 Ver Ranking
          </Button>

          <Button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 sm:py-6 text-base sm:text-lg rounded-xl"
          >
            🔄 Jogar Novamente
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

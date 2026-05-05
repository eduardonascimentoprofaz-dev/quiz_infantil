import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getTopRankings, clearAllRankings } from "@/lib/rankingService";
import type { RankingEntry } from "@/lib/rankingService";

interface RankingBoardProps {
  onClose?: () => void;
  highlightScore?: number;
}

export default function RankingBoard({
  onClose,
  highlightScore,
}: RankingBoardProps) {
  const [rankings, setRankings] = useState<RankingEntry[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    setRankings(getTopRankings());
  }, []);

  const handleClearRankings = () => {
    clearAllRankings();
    setRankings([]);
    setShowClearConfirm(false);
  };

  const getMedalEmoji = (position: number) => {
    switch (position) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `${position}️⃣`;
    }
  };

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return "from-yellow-300 to-yellow-500";
      case 2:
        return "from-gray-300 to-gray-500";
      case 3:
        return "from-orange-300 to-orange-500";
      default:
        return "from-blue-200 to-blue-400";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full max-w-2xl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-3xl p-4 sm:p-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          🏆 Ranking
        </h2>
        <p className="text-purple-100 text-sm sm:text-base">
          {rankings.length === 0
            ? "Nenhuma pontuação ainda. Comece a jogar!"
            : `Top ${rankings.length} Melhores Pontuações`}
        </p>
      </div>

      {/* Rankings List */}
      <div className="bg-white rounded-b-3xl p-4 sm:p-6 shadow-2xl max-h-96 sm:max-h-[500px] overflow-y-auto">
        {rankings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="text-5xl sm:text-6xl mb-4">🎮</div>
            <p className="text-gray-600 text-base sm:text-lg font-semibold">
              Comece a jogar para aparecer no ranking!
            </p>
          </motion.div>
        ) : (
          <div className="space-y-2 sm:space-y-3">
            {rankings.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  p-3 sm:p-4 rounded-2xl transition-all
                  ${
                    highlightScore === entry.score
                      ? "ring-2 ring-purple-500 scale-105 shadow-lg"
                      : ""
                  }
                  ${
                    index < 3
                      ? `bg-gradient-to-r ${getPositionColor(index + 1)} text-white`
                      : "bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200"
                  }
                `}
              >
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  {/* Position and Medal */}
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <span className="text-2xl sm:text-3xl">
                      {getMedalEmoji(index + 1)}
                    </span>
                    <span
                      className={`
                      text-lg sm:text-xl font-bold
                      ${index < 3 ? "text-white" : "text-gray-700"}
                    `}
                    >
                      #{index + 1}
                    </span>
                  </div>

                  {/* Player Info */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`
                      font-bold text-sm sm:text-base truncate
                      ${index < 3 ? "text-white" : "text-gray-800"}
                    `}
                    >
                      {entry.playerName}
                    </p>
                    <p
                      className={`
                      text-xs sm:text-sm
                      ${index < 3 ? "text-blue-100" : "text-gray-600"}
                    `}
                    >
                      {entry.correctAnswers}/{entry.totalQuestions} • {entry.accuracy}%
                    </p>
                  </div>

                  {/* Score */}
                  <div className="flex-shrink-0 text-right">
                    <p
                      className={`
                      text-xl sm:text-2xl font-bold
                      ${index < 3 ? "text-white" : "text-purple-600"}
                    `}
                    >
                      {entry.score}
                    </p>
                    <p
                      className={`
                      text-xs sm:text-sm
                      ${index < 3 ? "text-blue-100" : "text-gray-500"}
                    `}
                    >
                      {entry.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6 flex-wrap">
        {onClose && (
          <Button
            onClick={onClose}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 sm:py-4 rounded-xl text-sm sm:text-base"
          >
            ← Voltar
          </Button>
        )}

        {rankings.length > 0 && (
          <Button
            onClick={() => setShowClearConfirm(true)}
            variant="outline"
            className="flex-1 border-red-300 text-red-600 hover:bg-red-50 font-bold py-3 sm:py-4 rounded-xl text-sm sm:text-base"
          >
            🗑️ Limpar
          </Button>
        )}
      </div>

      {/* Clear Confirmation */}
      {showClearConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              ⚠️ Tem certeza?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Isso vai apagar todos os rankings salvos. Esta ação não pode ser
              desfeita.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <Button
                onClick={() => setShowClearConfirm(false)}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 font-bold py-3 rounded-xl"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleClearRankings}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl"
              >
                Sim, Limpar
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

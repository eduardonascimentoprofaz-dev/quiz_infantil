import { motion } from 'framer-motion';
import { Player } from '@/contexts/MultiplayerContext';

interface MultiplayerScoreboardProps {
  players: Player[];
  currentPlayerIndex: number;
  questionsPerPlayer: number;
}

export default function MultiplayerScoreboard({
  players,
  currentPlayerIndex,
  questionsPerPlayer,
}: MultiplayerScoreboardProps) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="w-full space-y-3">
      {/* Current Player Indicator */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">Vez de:</p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          {players[currentPlayerIndex]?.name || 'Carregando...'}
        </p>
        <p className="text-xs text-gray-500">
          Pergunta {players[currentPlayerIndex]?.currentRound + 1 || 1} de {questionsPerPlayer}
        </p>
      </div>

      {/* Scoreboard */}
      <div className="space-y-2">
        {sortedPlayers.map((player, index) => {
          const isCurrentPlayer = player.id === players[currentPlayerIndex]?.id;
          const medalEmoji = ['🥇', '🥈', '🥉'][index] || '•';

          return (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 rounded-xl transition-all ${
                isCurrentPlayer
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{medalEmoji}</span>
                  <div>
                    <p className="font-bold text-sm">{player.name}</p>
                    <p className="text-xs opacity-75">
                      {player.correctAnswers}/{player.currentRound} acertos
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{player.score}</p>
                  <p className="text-xs opacity-75">pontos</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

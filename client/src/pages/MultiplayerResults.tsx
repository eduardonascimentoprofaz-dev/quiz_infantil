import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useMultiplayer } from '@/contexts/MultiplayerContext';
import { useLocation } from 'wouter';

export default function MultiplayerResults() {
  const { state, resetGame } = useMultiplayer();
  const [, setLocation] = useLocation();

  const sortedPlayers = [...state.players].sort((a, b) => b.score - a.score);
  const medals = ['🥇', '🥈', '🥉'];

  const handlePlayAgain = () => {
    resetGame();
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 sm:p-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2"
          >
            🎉 Fim do Jogo!
          </motion.h1>
          <p className="text-lg text-gray-700">Veja os resultados</p>
        </div>

        {/* Results Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
          {/* Podium */}
          <div className="space-y-4">
            {sortedPlayers.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${
                  index === 0
                    ? 'bg-gradient-to-r from-yellow-300 to-yellow-400 shadow-lg scale-105'
                    : index === 1
                    ? 'bg-gradient-to-r from-gray-300 to-gray-400'
                    : index === 2
                    ? 'bg-gradient-to-r from-orange-300 to-orange-400'
                    : 'bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{medals[index] || '•'}</span>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">{player.name}</p>
                      <p className="text-sm text-gray-700">
                        {player.correctAnswers} acertos de {player.currentRound} perguntas
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-gray-800">{player.score}</p>
                    <p className="text-sm text-gray-700">pontos</p>
                  </div>
                </div>

                {/* Accuracy */}
                <div className="mt-4 bg-white bg-opacity-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">Acurácia</span>
                    <span className="text-lg font-bold text-purple-600">
                      {player.currentRound > 0
                        ? Math.round((player.correctAnswers / player.currentRound) * 100)
                        : 0}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                      style={{
                        width: `${
                          player.currentRound > 0
                            ? (player.correctAnswers / player.currentRound) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <Button
              onClick={handlePlayAgain}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 rounded-xl"
            >
              🎮 Jogar Novamente
            </Button>
            <Button
              onClick={() => setLocation('/')}
              variant="outline"
              className="flex-1 py-3 rounded-xl"
            >
              🏠 Voltar ao Menu
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

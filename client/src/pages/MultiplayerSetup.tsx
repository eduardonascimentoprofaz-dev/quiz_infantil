import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useMultiplayer } from '@/contexts/MultiplayerContext';
import { useLocation } from 'wouter';

export default function MultiplayerSetup() {
  const [playerName, setPlayerName] = useState('');
  const [numPlayers, setNumPlayers] = useState(2);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [questionsPerPlayer, setQuestionsPerPlayer] = useState(5);
  const { state, addPlayer, removePlayer, startGame } = useMultiplayer();
  const [, setLocation] = useLocation();

  const handleAddPlayer = () => {
    if (playerName.trim() && state.players.length < 4) {
      addPlayer(playerName.trim());
      setPlayerName('');
    }
  };

  const handleStartGame = () => {
    if (state.players.length >= 2) {
      startGame(selectedDifficulty, questionsPerPlayer);
      setLocation('/multiplayer-game');
    }
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
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            Modo Multiplayer
          </h1>
          <p className="text-lg text-gray-700">Desafie seus amigos!</p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
          {/* Add Players Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Adicionar Jogadores</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddPlayer()}
                placeholder="Nome do jogador"
                className="flex-1 px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
              <Button
                onClick={handleAddPlayer}
                disabled={state.players.length >= 4 || !playerName.trim()}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-xl"
              >
                Adicionar
              </Button>
            </div>

            {/* Players List */}
            <div className="space-y-2">
              {state.players.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-gray-800">{player.name}</span>
                  </div>
                  <Button
                    onClick={() => removePlayer(player.id)}
                    variant="outline"
                    className="text-red-500 hover:bg-red-50"
                  >
                    ✕
                  </Button>
                </motion.div>
              ))}
            </div>

            {state.players.length === 0 && (
              <p className="text-center text-gray-500 py-4">Adicione pelo menos 2 jogadores para começar</p>
            )}
          </div>

          {/* Difficulty Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Nível de Dificuldade</h2>
            <div className="grid grid-cols-3 gap-3">
              {(['easy', 'medium', 'hard'] as const).map((difficulty) => (
                <motion.button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl font-bold transition-all ${
                    selectedDifficulty === difficulty
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {difficulty === 'easy' && '🌱 Fácil'}
                  {difficulty === 'medium' && '⚡ Médio'}
                  {difficulty === 'hard' && '🔥 Difícil'}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Questions Per Player */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Perguntas por Jogador</h2>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="3"
                max="20"
                value={questionsPerPlayer}
                onChange={(e) => setQuestionsPerPlayer(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-2xl font-bold text-purple-600 min-w-12">{questionsPerPlayer}</span>
            </div>
          </div>

          {/* Start Button */}
          <motion.button
            onClick={handleStartGame}
            disabled={state.players.length < 2}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              state.players.length < 2
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg'
            }`}
          >
            🎮 Começar Jogo
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

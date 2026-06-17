import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMultiplayer } from '@/contexts/MultiplayerContext';
import { useLocation } from 'wouter';
import MultiplayerScoreboard from '@/components/MultiplayerScoreboard';
import Mascot from '@/components/Mascot';
import { QUIZ_QUESTIONS } from '@/lib/quizDataExpanded800';

export default function MultiplayerGame() {
  const { state, nextPlayer, updatePlayerScore, endGame } = useMultiplayer();
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [mascotState, setMascotState] = useState<'thinking' | 'happy' | 'celebrating'>('thinking');
  const [showHint, setShowHint] = useState(false);

  const currentPlayer = state.players[state.currentPlayerIndex];
  const questions = QUIZ_QUESTIONS.filter((q: any) => {
    if (state.difficulty === 'easy') return q.difficulty === 'easy';
    if (state.difficulty === 'medium') return q.difficulty === 'medium';
    return q.difficulty === 'hard';
  });

  useEffect(() => {
    if (state.gameOver) {
      setLocation('/multiplayer-results');
    }
  }, [state.gameOver, setLocation]);

  const handleAnswerSelect = (index: number) => {
    if (answered) return;

    setSelectedAnswer(index);
    setAnswered(true);

    const question = questions[currentQuestion];
    const isCorrect = index === question.correctAnswer;

    if (isCorrect) {
      setMascotState('celebrating');
      updatePlayerScore(currentPlayer!.id, 10, true);
    } else {
      setMascotState('happy');
      updatePlayerScore(currentPlayer!.id, 0, false);
    }

    setTimeout(() => {
      if (currentPlayer!.currentRound + 1 >= state.questionsPerPlayer) {
        const allFinished = state.players.every(
          p => p.currentRound + 1 >= state.questionsPerPlayer
        );
        if (allFinished) {
          endGame();
        } else {
          nextPlayer();
          setCurrentQuestion(0);
          setAnswered(false);
          setSelectedAnswer(null);
          setShowHint(false);
          setMascotState('thinking');
        }
      } else {
        setCurrentQuestion(prev => prev + 1);
        setAnswered(false);
        setSelectedAnswer(null);
        setShowHint(false);
        setMascotState('thinking');
      }
    }, 2000);
  };

  if (!currentPlayer || questions.length === 0) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Scoreboard */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 shadow-lg"
        >
          <MultiplayerScoreboard
            players={state.players}
            currentPlayerIndex={state.currentPlayerIndex}
            questionsPerPlayer={state.questionsPerPlayer}
          />
        </motion.div>

        {/* Game Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          {/* Mascot */}
          <Mascot state={mascotState} />

          {/* Question */}
          {question && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{question.question}</h2>
                {showHint && (
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mb-4 rounded">
                    <p className="text-sm text-gray-700">💡 {question.hint}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {question.options.map((option: string, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answered}
                    whileHover={{ scale: answered ? 1 : 1.05 }}
                    whileTap={{ scale: answered ? 1 : 0.95 }}
                    className={`p-4 rounded-xl font-bold transition-all ${
                      selectedAnswer === index
                        ? index === question.correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : answered && index === question.correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {!answered && (
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-xl transition-all"
                >
                  💡 Pista
                </button>
              )}
            </div>
          )}
        </motion.div>

        {/* Progress */}
        <div className="text-center text-sm text-gray-600">
          Pergunta {currentQuestion + 1} de {state.questionsPerPlayer}
        </div>
      </div>
    </div>
  );
}

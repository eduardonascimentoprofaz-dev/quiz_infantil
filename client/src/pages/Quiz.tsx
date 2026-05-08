import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { useQuizGame } from "@/hooks/useQuizGame";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import GameOver from "@/components/GameOver";
import AnswerFeedback from "@/components/AnswerFeedback";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  const [, params] = useRoute("/quiz/:difficulty");
  const [, setLocation] = useLocation();
  
  const difficulty = (params?.difficulty as "easy" | "medium" | "hard") || "easy";
  
  const {
    gameState,
    currentQuestion,
    totalQuestions,
    progress,
    selectAnswer,
    nextQuestion,
    toggleHint,
    resetGame,
  } = useQuizGame(difficulty);

  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);



  useEffect(() => {
    if (gameState.answered) {
      const isAnswerCorrect =
        gameState.selectedAnswer === currentQuestion.correctAnswer;
      setIsCorrect(isAnswerCorrect);
      setShowFeedback(true);

      // Auto-hide feedback after 2 seconds
      const timer = setTimeout(() => {
        setShowFeedback(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [gameState.answered, gameState.selectedAnswer, currentQuestion.correctAnswer]);

  const handleNextQuestion = () => {
    setShowFeedback(false);
    nextQuestion();
  };

  const handleQuit = () => {
    if (confirm("Tem certeza que quer sair? Seu progresso será perdido.")) {
      setLocation("/");
    }
  };

  if (gameState.gameOver) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-3 sm:px-4 py-6 sm:py-8"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/background-pattern-3RQhhNMbwqCosu8ApdLzrm.webp')",
          backgroundSize: "400px 400px",
        }}
      >
        <GameOver
          score={gameState.score}
          correctAnswers={gameState.correctAnswers}
          totalQuestions={totalQuestions}
          onRestart={resetGame}
        />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/background-pattern-3RQhhNMbwqCosu8ApdLzrm.webp')",
        backgroundSize: "400px 400px",
      }}
    >
      {/* Header with Difficulty and Quit Button */}
      <div className="flex justify-between items-center px-4 py-4 bg-white/80 backdrop-blur border-b-2 border-purple-200">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">🎮 Hora da Ventura</h1>
          <p className="text-sm text-gray-600">
            Dificuldade: <span className="font-bold">
              {difficulty === "easy" ? "🌱 Fácil" : difficulty === "medium" ? "⚡ Médio" : "🔥 Difícil"}
            </span>
          </p>
        </div>
        <Button
          onClick={handleQuit}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Sair
        </Button>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        progress={progress}
        current={gameState.currentQuestionIndex + 1}
        total={totalQuestions}
        score={gameState.score}
      />

      {/* Main Content */}
      <motion.div
        key={gameState.currentQuestionIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex items-center justify-center py-6 sm:py-8"
      >
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={gameState.selectedAnswer}
          answered={gameState.answered}
          correctAnswer={currentQuestion.correctAnswer}
          onSelectAnswer={selectAnswer}
          onShowHint={toggleHint}
          showHint={gameState.showHint}
          hint={currentQuestion.hint}
        />
      </motion.div>

      {/* Next Button */}
      {gameState.answered && !showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-6 sm:pb-8 px-3 sm:px-4 flex justify-center"
        >
          <button
            onClick={handleNextQuestion}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            {gameState.currentQuestionIndex + 1 === totalQuestions
              ? "Ver Resultado 🏁"
              : "Próxima Pergunta →"}
          </button>
        </motion.div>
      )}

      {/* Feedback Modal */}
      {showFeedback && (
        <AnswerFeedback isCorrect={isCorrect} onNext={handleNextQuestion} />
      )}
    </div>
  );
}

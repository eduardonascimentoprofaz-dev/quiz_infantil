import { useState, useCallback } from "react";
import { quizQuestionsExpanded } from "@/lib/quizDataExpanded";

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  showHint: boolean;
  selectedAnswer: number | null;
  answered: boolean;
  gameOver: boolean;
  correctAnswers: number;
}

export const useQuizGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    showHint: false,
    selectedAnswer: null,
    answered: false,
    gameOver: false,
    correctAnswers: 0,
  });

  const currentQuestion = quizQuestionsExpanded[gameState.currentQuestionIndex];
  const totalQuestions = quizQuestionsExpanded.length;
  const progress = ((gameState.currentQuestionIndex + 1) / totalQuestions) * 100;

  const selectAnswer = useCallback((answerIndex: number) => {
    if (gameState.answered) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const points = isCorrect ? 10 : 0;

    setGameState((prev) => ({
      ...prev,
      selectedAnswer: answerIndex,
      answered: true,
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
    }));
  }, [gameState.answered, currentQuestion.correctAnswer]);

  const nextQuestion = useCallback(() => {
    if (gameState.currentQuestionIndex + 1 >= totalQuestions) {
      setGameState((prev) => ({
        ...prev,
        gameOver: true,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        answered: false,
        showHint: false,
      }));
    }
  }, [gameState.currentQuestionIndex, totalQuestions]);

  const toggleHint = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      showHint: !prev.showHint,
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      showHint: false,
      selectedAnswer: null,
      answered: false,
      gameOver: false,
      correctAnswers: 0,
    });
  }, []);

  return {
    gameState,
    currentQuestion,
    totalQuestions,
    progress,
    selectAnswer,
    nextQuestion,
    toggleHint,
    resetGame,
  };
};

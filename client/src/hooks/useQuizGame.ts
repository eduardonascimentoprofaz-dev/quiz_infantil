import { useState, useCallback, useEffect } from "react";
import { QUIZ_QUESTIONS, getQuestionsByDifficulty, shuffleQuestions, type QuizQuestion } from "@/lib/quizDataExpanded800";

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  showHint: boolean;
  selectedAnswer: number | null;
  answered: boolean;
  gameOver: boolean;
  correctAnswers: number;
}

export const useQuizGame = (difficulty: 'easy' | 'medium' | 'hard' = 'easy') => {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    showHint: false,
    selectedAnswer: null,
    answered: false,
    gameOver: false,
    correctAnswers: 0,
  });

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  // Carregar perguntas baseado na dificuldade
  useEffect(() => {
    const allQuestions = getQuestionsByDifficulty(difficulty);
    const shuffled = shuffleQuestions(allQuestions);
    
    // Limitar perguntas baseado na dificuldade
    const questionLimit = difficulty === 'easy' ? 100 : difficulty === 'medium' ? 150 : 200;
    const limitedQuestions = shuffled.slice(0, questionLimit);
    
    setQuestions(limitedQuestions);
    
    // Resetar estado do jogo
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      showHint: false,
      selectedAnswer: null,
      answered: false,
      gameOver: false,
      correctAnswers: 0,
    });
  }, [difficulty]);

  const currentQuestion = questions[gameState.currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = totalQuestions > 0 ? ((gameState.currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  const selectAnswer = useCallback((answerIndex: number) => {
    if (gameState.answered || !currentQuestion) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const points = isCorrect ? 10 : 0;

    setGameState((prev) => ({
      ...prev,
      selectedAnswer: answerIndex,
      answered: true,
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
    }));
  }, [gameState.answered, currentQuestion]);

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
    currentQuestion: currentQuestion || { question: 'Carregando...', options: [], correctAnswer: 0, hint: '', category: '', difficulty: 'easy', id: 0 },
    totalQuestions,
    progress,
    selectAnswer,
    nextQuestion,
    toggleHint,
    resetGame,
  };
};

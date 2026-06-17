import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Player {
  id: number;
  name: string;
  score: number;
  correctAnswers: number;
  currentRound: number;
}

export interface MultiplayerState {
  players: Player[];
  currentPlayerIndex: number;
  gameStarted: boolean;
  gameOver: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  questionsPerPlayer: number;
}

interface MultiplayerContextType {
  state: MultiplayerState;
  addPlayer: (name: string) => void;
  removePlayer: (id: number) => void;
  startGame: (difficulty: 'easy' | 'medium' | 'hard', questionsPerPlayer: number) => void;
  nextPlayer: () => void;
  updatePlayerScore: (playerId: number, points: number, correct: boolean) => void;
  endGame: () => void;
  resetGame: () => void;
  getCurrentPlayer: () => Player | null;
}

const MultiplayerContext = createContext<MultiplayerContextType | undefined>(undefined);

export const MultiplayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<MultiplayerState>({
    players: [],
    currentPlayerIndex: 0,
    gameStarted: false,
    gameOver: false,
    difficulty: 'easy',
    questionsPerPlayer: 10,
  });

  const addPlayer = useCallback((name: string) => {
    setState(prev => ({
      ...prev,
      players: [
        ...prev.players,
        {
          id: prev.players.length + 1,
          name,
          score: 0,
          correctAnswers: 0,
          currentRound: 0,
        },
      ],
    }));
  }, []);

  const removePlayer = useCallback((id: number) => {
    setState(prev => ({
      ...prev,
      players: prev.players.filter(p => p.id !== id),
    }));
  }, []);

  const startGame = useCallback((difficulty: 'easy' | 'medium' | 'hard', questionsPerPlayer: number) => {
    setState(prev => ({
      ...prev,
      gameStarted: true,
      difficulty,
      questionsPerPlayer,
      currentPlayerIndex: 0,
    }));
  }, []);

  const nextPlayer = useCallback(() => {
    setState(prev => {
      const nextIndex = (prev.currentPlayerIndex + 1) % prev.players.length;
      const isGameOver = prev.currentPlayerIndex === prev.players.length - 1 &&
        prev.players[prev.currentPlayerIndex].currentRound >= prev.questionsPerPlayer - 1;

      return {
        ...prev,
        currentPlayerIndex: nextIndex,
        gameOver: isGameOver,
      };
    });
  }, []);

  const updatePlayerScore = useCallback((playerId: number, points: number, correct: boolean) => {
    setState(prev => ({
      ...prev,
      players: prev.players.map(p =>
        p.id === playerId
          ? {
              ...p,
              score: p.score + points,
              correctAnswers: p.correctAnswers + (correct ? 1 : 0),
              currentRound: p.currentRound + 1,
            }
          : p
      ),
    }));
  }, []);

  const endGame = useCallback(() => {
    setState(prev => ({
      ...prev,
      gameOver: true,
    }));
  }, []);

  const resetGame = useCallback(() => {
    setState({
      players: [],
      currentPlayerIndex: 0,
      gameStarted: false,
      gameOver: false,
      difficulty: 'easy',
      questionsPerPlayer: 10,
    });
  }, []);

  const getCurrentPlayer = useCallback((): Player | null => {
    return state.players[state.currentPlayerIndex] || null;
  }, [state.players, state.currentPlayerIndex]);

  return (
    <MultiplayerContext.Provider
      value={{
        state,
        addPlayer,
        removePlayer,
        startGame,
        nextPlayer,
        updatePlayerScore,
        endGame,
        resetGame,
        getCurrentPlayer,
      }}
    >
      {children}
    </MultiplayerContext.Provider>
  );
};

export const useMultiplayer = () => {
  const context = useContext(MultiplayerContext);
  if (!context) {
    throw new Error('useMultiplayer must be used within MultiplayerProvider');
  }
  return context;
};

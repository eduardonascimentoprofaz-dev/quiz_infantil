export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
  emoji?: string;
  animeImage?: number;
}

// Importar dados expandidos com 250 perguntas
export { quizQuestionsExpanded as quizQuestions } from './quizDataExpanded';

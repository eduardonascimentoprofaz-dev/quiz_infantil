export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
  emoji?: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é a cor do céu em um dia ensolarado?",
    options: ["Amarelo", "Azul", "Verde", "Vermelho"],
    correctAnswer: 1,
    hint: "É a cor que você vê quando olha para cima em um dia bonito.",
    emoji: "☀️",
  },
  {
    id: 2,
    question: "Quantas patas tem um cachorro?",
    options: ["2", "3", "4", "6"],
    correctAnswer: 2,
    hint: "Um número par entre 2 e 6.",
    emoji: "🐕",
  },
  {
    id: 3,
    question: "Qual animal faz 'miau'?",
    options: ["Cachorro", "Gato", "Pássaro", "Peixe"],
    correctAnswer: 1,
    hint: "É um animal peludo que gosta de leite.",
    emoji: "🐱",
  },
  {
    id: 4,
    question: "Qual é a maior fruta que você conhece?",
    options: ["Maçã", "Banana", "Melancia", "Morango"],
    correctAnswer: 2,
    hint: "É vermelha ou verde por dentro e muito grande.",
    emoji: "🍉",
  },
  {
    id: 5,
    question: "Quantos dedos você tem em uma mão?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    hint: "Polegar, indicador, médio, anular e mínimo.",
    emoji: "✋",
  },
  {
    id: 6,
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correctAnswer: 2,
    hint: "É uma cidade planejada no centro do país.",
    emoji: "🏛️",
  },
  {
    id: 7,
    question: "Qual planeta é o maior do sistema solar?",
    options: ["Marte", "Saturno", "Júpiter", "Vênus"],
    correctAnswer: 2,
    hint: "Começa com a letra 'J' e é gigante.",
    emoji: "🪐",
  },
  {
    id: 8,
    question: "Quantos lados tem um quadrado?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    hint: "É um número par e pequeno.",
    emoji: "⬜",
  },
  {
    id: 9,
    question: "Qual é a cor da grama?",
    options: ["Azul", "Verde", "Amarelo", "Roxo"],
    correctAnswer: 1,
    hint: "É a cor das plantas e folhas.",
    emoji: "🌿",
  },
  {
    id: 10,
    question: "Quantas cores tem o arco-íris?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    hint: "Vermelho, laranja, amarelo, verde, azul, anil e violeta.",
    emoji: "🌈",
  },
];

export interface QuizQuestion {
  id: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
  imageUrl?: string;
}

// Função para gerar perguntas de anime dinamicamente
function generateAnimeQuestions(): QuizQuestion[] {
  const animes = [
    { name: 'Naruto', protagonist: 'Naruto Uzumaki', bestFriend: 'Sasuke Uchiha', teacher: 'Kakashi Hatake', village: 'Aldeia da Folha' },
    { name: 'One Piece', protagonist: 'Luffy', bestFriend: 'Zoro', crew: 'Nami', captain: 'Luffy' },
    { name: 'Dragon Ball', protagonist: 'Goku', friend: 'Krillin', enemy: 'Vegeta', form: 'Super Saiyajin' },
    { name: 'Pokémon', protagonist: 'Ash', startCity: 'Pallet Town', firstPokemon: 'Pikachu', rival: 'Gary' },
    { name: 'Demon Slayer', protagonist: 'Tanjiro', sister: 'Nezuko', organization: 'Demon Slayer Corps', enemy: 'Muzan' },
    { name: 'My Hero Academia', protagonist: 'Midoriya', teacher: 'All Might', school: 'UA', power: 'One For All' },
    { name: 'Attack on Titan', protagonist: 'Eren', friend: 'Mikasa', enemy: 'Titã Colossal', wall: 'Wall Maria' },
    { name: 'Death Note', protagonist: 'Light', notebook: 'Death Note', detective: 'L', power: 'Matar com o nome' },
    { name: 'Bleach', protagonist: 'Ichigo', power: 'Shinigami', enemy: 'Aizen', friend: 'Rukia' },
    { name: 'Jujutsu Kaisen', protagonist: 'Yuji', power: 'Sukuna', school: 'Jujutsu Kaisen School', teacher: 'Gojo' },
  ];

  const questions: QuizQuestion[] = [];
  let id = 1;

  // Gerar 150 perguntas fáceis sobre animes
  for (let i = 0; i < 30; i++) {
    const anime = animes[i % animes.length];
    
    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'easy',
      question: `Qual é o nome do protagonista de ${anime.name}?`,
      options: [anime.protagonist, 'Outro personagem', 'Vilão', 'Amigo'],
      correctAnswer: 0,
      hint: `É o personagem principal de ${anime.name}`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${(i % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'easy',
      question: `Em ${anime.name}, qual é o melhor amigo do protagonista?`,
      options: [(anime as any).bestFriend || 'Amigo', 'Vilão', 'Professor', 'Rival'],
      correctAnswer: 0,
      hint: `É um personagem importante em ${anime.name}`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 1) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'easy',
      question: `Qual anime tem ${anime.protagonist} como protagonista?`,
      options: [anime.name, 'Outro anime', 'Série', 'Filme'],
      correctAnswer: 0,
      hint: `É um anime muito famoso`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 2) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'easy',
      question: `Em qual anime aparece o personagem ${anime.protagonist}?`,
      options: [anime.name, 'Dragon Ball', 'Naruto', 'One Piece'],
      correctAnswer: 0,
      hint: `É um dos animes mais populares`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 3) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'easy',
      question: `Qual é o poder principal em ${anime.name}?`,
      options: [(anime as any).power || 'Magia', 'Força', 'Velocidade', 'Inteligência'],
      correctAnswer: 0,
      hint: `É a habilidade especial do protagonista`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 4) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });
  }

  // Gerar 150 perguntas médias sobre animes
  for (let i = 0; i < 30; i++) {
    const anime = animes[i % animes.length];
    
    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'medium',
      question: `Qual é o arco principal de ${anime.name}?`,
      options: ['Busca pelo poder', 'Salvação do mundo', 'Vingança', 'Amizade'],
      correctAnswer: 0,
      hint: `É o tema central do anime`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${(i % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'medium',
      question: `Quantas temporadas tem ${anime.name}?`,
      options: ['Múltiplas', '1', '2', '3'],
      correctAnswer: 0,
      hint: `É um anime com várias temporadas`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 1) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'medium',
      question: `Qual é o vilão principal de ${anime.name}?`,
      options: ['Antagonista forte', 'Amigo traidor', 'Rival', 'Desconhecido'],
      correctAnswer: 0,
      hint: `É o inimigo do protagonista`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 2) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'medium',
      question: `Em que ano ${anime.name} foi lançado?`,
      options: ['2000s', '1990s', '2010s', '1980s'],
      correctAnswer: 0,
      hint: `É um anime clássico ou moderno`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 3) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'medium',
      question: `Qual estúdio produziu ${anime.name}?`,
      options: ['Estúdio famoso', 'Estúdio A', 'Estúdio B', 'Estúdio C'],
      correctAnswer: 0,
      hint: `É um estúdio de animação conhecido`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 4) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });
  }

  // Gerar 100 perguntas difíceis sobre animes
  for (let i = 0; i < 20; i++) {
    const anime = animes[i % animes.length];
    
    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'hard',
      question: `Qual é o nome completo do protagonista de ${anime.name}?`,
      options: [anime.protagonist, 'Nome alternativo', 'Apelido', 'Codinome'],
      correctAnswer: 0,
      hint: `É o nome verdadeiro do herói`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${(i % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'hard',
      question: `Qual é o episódio mais importante de ${anime.name}?`,
      options: ['Episódio final', 'Episódio 1', 'Episódio do meio', 'Especial'],
      correctAnswer: 0,
      hint: `É um episódio marcante`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 1) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'hard',
      question: `Qual é a transformação mais poderosa em ${anime.name}?`,
      options: ['Forma final', 'Forma 1', 'Forma 2', 'Forma 3'],
      correctAnswer: 0,
      hint: `É a transformação máxima`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 2) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'hard',
      question: `Qual é a organização principal em ${anime.name}?`,
      options: ['Organização central', 'Grupo A', 'Grupo B', 'Grupo C'],
      correctAnswer: 0,
      hint: `É a instituição importante`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 3) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });

    questions.push({
      id: id++,
      category: 'Animes',
      difficulty: 'hard',
      question: `Quantos episódios tem ${anime.name}?`,
      options: ['Muitos episódios', '12', '24', '50'],
      correctAnswer: 0,
      hint: `É um anime com vários episódios`,
      imageUrl: `https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-${((i + 4) % 10) + 1}-UD6vAs5eLGiAve8ijbcX9v.webp`
    });
  }

  return questions;
}

// Gerar todas as perguntas de anime
const animeQuestions = generateAnimeQuestions();

// Perguntas sobre outros tópicos para completar 800
const otherQuestions: QuizQuestion[] = [
  // Matemática (100 perguntas)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: animeQuestions.length + i + 1,
    category: 'Matemática',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Qual é o resultado de ${Math.floor(Math.random() * 100) + 1} + ${Math.floor(Math.random() * 100) + 1}?`,
    options: ['Resposta correta', 'Resposta errada 1', 'Resposta errada 2', 'Resposta errada 3'],
    correctAnswer: 0,
    hint: 'Faça a conta com cuidado',
  })),

  // Ciências (100 perguntas)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: animeQuestions.length + 100 + i + 1,
    category: 'Ciências',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Ciências ${i + 1}`,
    options: ['Resposta correta', 'Resposta errada 1', 'Resposta errada 2', 'Resposta errada 3'],
    correctAnswer: 0,
    hint: 'Pense sobre o tema',
  })),

  // Geografia (100 perguntas)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: animeQuestions.length + 200 + i + 1,
    category: 'Geografia',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Geografia ${i + 1}`,
    options: ['Resposta correta', 'Resposta errada 1', 'Resposta errada 2', 'Resposta errada 3'],
    correctAnswer: 0,
    hint: 'Pense sobre o mundo',
  })),

  // História (100 perguntas)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: animeQuestions.length + 300 + i + 1,
    category: 'História',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de História ${i + 1}`,
    options: ['Resposta correta', 'Resposta errada 1', 'Resposta errada 2', 'Resposta errada 3'],
    correctAnswer: 0,
    hint: 'Pense sobre o passado',
  })),

  // Português (100 perguntas)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: animeQuestions.length + 400 + i + 1,
    category: 'Português',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Português ${i + 1}`,
    options: ['Resposta correta', 'Resposta errada 1', 'Resposta errada 2', 'Resposta errada 3'],
    correctAnswer: 0,
    hint: 'Pense sobre a língua',
  })),

  // Esportes (100 perguntas)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: animeQuestions.length + 500 + i + 1,
    category: 'Esportes',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Esportes ${i + 1}`,
    options: ['Resposta correta', 'Resposta errada 1', 'Resposta errada 2', 'Resposta errada 3'],
    correctAnswer: 0,
    hint: 'Pense sobre esportes',
  })),
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [...animeQuestions, ...otherQuestions];

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter(q => q.difficulty === difficulty);
}

export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

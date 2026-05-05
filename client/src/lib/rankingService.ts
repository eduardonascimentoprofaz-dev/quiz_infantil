export interface RankingEntry {
  id: string;
  playerName: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  accuracy: number;
  date: string;
  timestamp: number;
}

const RANKING_STORAGE_KEY = "quiz_ranking";
const MAX_RANKINGS = 10;

/**
 * Obter todas as pontuações salvas
 */
export const getAllRankings = (): RankingEntry[] => {
  try {
    const data = localStorage.getItem(RANKING_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao obter rankings:", error);
    return [];
  }
};

/**
 * Obter top 10 pontuações ordenadas
 */
export const getTopRankings = (): RankingEntry[] => {
  const rankings = getAllRankings();
  return rankings
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RANKINGS);
};

/**
 * Adicionar nova pontuação ao ranking
 */
export const addRanking = (
  playerName: string,
  score: number,
  correctAnswers: number,
  totalQuestions: number
): RankingEntry => {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const now = new Date();

  const newEntry: RankingEntry = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    playerName: playerName || "Jogador Anônimo",
    score,
    correctAnswers,
    totalQuestions,
    accuracy,
    date: now.toLocaleDateString("pt-BR"),
    timestamp: now.getTime(),
  };

  try {
    const rankings = getAllRankings();
    rankings.push(newEntry);

    // Ordenar e manter apenas top 10
    const sorted = rankings
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RANKINGS);

    localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(sorted));
    return newEntry;
  } catch (error) {
    console.error("Erro ao adicionar ranking:", error);
    return newEntry;
  }
};

/**
 * Limpar todos os rankings
 */
export const clearAllRankings = (): void => {
  try {
    localStorage.removeItem(RANKING_STORAGE_KEY);
  } catch (error) {
    console.error("Erro ao limpar rankings:", error);
  }
};

/**
 * Verificar se uma pontuação entra no top 10
 */
export const isTopScore = (score: number): boolean => {
  const topRankings = getTopRankings();

  if (topRankings.length < MAX_RANKINGS) {
    return true;
  }

  return score > topRankings[topRankings.length - 1].score;
};

/**
 * Obter posição de uma pontuação no ranking
 */
export const getScorePosition = (score: number): number | null => {
  const topRankings = getTopRankings();
  const position = topRankings.findIndex((entry) => entry.score === score);
  return position !== -1 ? position + 1 : null;
};

/**
 * Exportar rankings como CSV
 */
export const exportRankingsAsCSV = (): string => {
  const rankings = getTopRankings();
  const headers = [
    "Posição",
    "Jogador",
    "Pontuação",
    "Acertos",
    "Total",
    "Acurácia",
    "Data",
  ];

  const rows = rankings.map((entry, index) => [
    index + 1,
    entry.playerName,
    entry.score,
    entry.correctAnswers,
    entry.totalQuestions,
    `${entry.accuracy}%`,
    entry.date,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  return csvContent;
};

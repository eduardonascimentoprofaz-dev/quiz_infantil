import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trophy, Zap, Brain } from 'lucide-react';
import RankingBoard from '@/components/RankingBoard';
import { QUIZ_QUESTIONS } from '@/lib/quizDataExpanded800';

// Calcular quantidade de perguntas por categoria
const getCategoryStats = () => {
  const categories: { [key: string]: number } = {};
  
  QUIZ_QUESTIONS.forEach(q => {
    if (!categories[q.category]) {
      categories[q.category] = 0;
    }
    categories[q.category]++;
  });
  
  return Object.entries(categories).map(([name, count]) => ({
    name,
    count,
    emoji: getCategoryEmoji(name)
  })).sort((a, b) => b.count - a.count);
};

const getCategoryEmoji = (category: string): string => {
  const emojiMap: { [key: string]: string } = {
    'Animes': '🎌',
    'Matemática': '🔢',
    'Ciências': '🔬',
    'Geografia': '🌍',
    'História': '📜',
    'Português': '📚',
    'Esportes': '⚽',
  };
  return emojiMap[category] || '❓';
};

export default function Home() {
  const [, setLocation] = useLocation();
  const [showRanking, setShowRanking] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);

  const handleStartGame = (difficulty: 'easy' | 'medium' | 'hard') => {
    setSelectedDifficulty(difficulty);
    setLocation(`/quiz/${difficulty}`);
  };

  const categoryStats = getCategoryStats();

  if (showRanking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => setShowRanking(false)}
            className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            ← Voltar
          </Button>
          <RankingBoard />
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen overflow-hidden relative"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/hero-background-main-dsaA9pq8qzCkmcAepqt98j.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay escuro semi-transparente para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header com título */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
            🎮 Hora da Ventura
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md font-semibold">
            Escolha seu nível de dificuldade e comece a jogar!
          </p>
        </div>

        {/* Difficulty Selection Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Easy */}
          <Card className="p-6 bg-white/90 backdrop-blur border-3 border-green-400 hover:border-green-600 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Fácil</h3>
              <p className="text-gray-700 mb-4 font-semibold">Perfeito para iniciantes!</p>
              <ul className="text-sm text-gray-700 mb-6 space-y-2 bg-green-50 p-3 rounded-lg">
                <li>✓ 100 perguntas</li>
                <li>✓ Tópicos básicos</li>
                <li>✓ Mais tempo</li>
              </ul>
              <Button
                onClick={() => handleStartGame('easy')}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 rounded-lg text-lg"
              >
                Começar 🚀
              </Button>
            </div>
          </Card>

          {/* Medium */}
          <Card className="p-6 bg-white/90 backdrop-blur border-3 border-yellow-400 hover:border-yellow-600 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 duration-300 md:scale-105">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">Médio</h3>
              <p className="text-gray-700 mb-4 font-semibold">Desafio moderado!</p>
              <ul className="text-sm text-gray-700 mb-6 space-y-2 bg-yellow-50 p-3 rounded-lg">
                <li>✓ 150 perguntas</li>
                <li>✓ Tópicos variados</li>
                <li>✓ Tempo normal</li>
              </ul>
              <Button
                onClick={() => handleStartGame('medium')}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-3 rounded-lg text-lg"
              >
                Começar 🎯
              </Button>
            </div>
          </Card>

          {/* Hard */}
          <Card className="p-6 bg-white/90 backdrop-blur border-3 border-red-400 hover:border-red-600 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Difícil</h3>
              <p className="text-gray-700 mb-4 font-semibold">Para os campeões!</p>
              <ul className="text-sm text-gray-700 mb-6 space-y-2 bg-red-50 p-3 rounded-lg">
                <li>✓ 200 perguntas</li>
                <li>✓ Tópicos avançados</li>
                <li>✓ Menos tempo</li>
              </ul>
              <Button
                onClick={() => handleStartGame('hard')}
                className="w-full bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-3 rounded-lg text-lg"
              >
                Começar 💪
              </Button>
            </div>
          </Card>
        </div>

        {/* Categories with Question Count */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-6 text-center">
            📚 Categorias Disponíveis
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {categoryStats.map((category) => (
              <Card 
                key={category.name}
                className="p-4 bg-white/90 backdrop-blur border-2 border-purple-300 hover:border-purple-600 hover:shadow-lg transition-all transform hover:scale-105 duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{category.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-2xl font-bold text-purple-600">{category.count}</p>
                  <p className="text-xs text-gray-600">perguntas</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats and Ranking */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Stats */}
          <Card className="p-6 bg-white/90 backdrop-blur border-2 border-blue-400 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              Sobre o Jogo
            </h3>
            <ul className="space-y-2 text-gray-800 font-semibold">
              <li>📚 <strong>{QUIZ_QUESTIONS.length} perguntas</strong> em {categoryStats.length} categorias</li>
              <li>🎨 <strong>Personagens de anime</strong> incríveis</li>
              <li>🏆 <strong>Sistema de ranking</strong> para competir</li>
              <li>💡 <strong>Pistas úteis</strong> em cada pergunta</li>
              <li>⭐ <strong>Pontuação progressiva</strong> por acerto</li>
            </ul>
          </Card>

          {/* Ranking Button */}
          <Card className="p-6 bg-white/90 backdrop-blur border-2 border-pink-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Ranking
              </h3>
              <p className="text-gray-800 mb-4 font-semibold">
                Veja as 10 melhores pontuações de todos os jogadores!
              </p>
            </div>
            <Button
              onClick={() => setShowRanking(true)}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 rounded-lg text-lg"
            >
              Ver Ranking 🏅
            </Button>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-white text-sm drop-shadow-lg font-semibold">
          <p>Divirta-se aprendendo! 🎓✨</p>
        </div>
      </div>
    </div>
  );
}

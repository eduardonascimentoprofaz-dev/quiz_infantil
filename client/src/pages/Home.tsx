import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trophy, Zap, Brain } from 'lucide-react';
import RankingBoard from '@/components/RankingBoard';

export default function Home() {
  const [, setLocation] = useLocation();
  const [showRanking, setShowRanking] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);

  const handleStartGame = (difficulty: 'easy' | 'medium' | 'hard') => {
    setSelectedDifficulty(difficulty);
    setLocation(`/quiz/${difficulty}`);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-bounce">
            🎮 Hora da Ventura
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
            Bem-vindo à Hora da Ventura!
          </p>
          <p className="text-lg text-gray-600">
            Escolha seu nível de dificuldade e comece a jogar
          </p>
        </div>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-1-hR4VAfithocEX8PspcuKLA.webp"
              alt="Anime Character 1"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-2-o3PK455sDJcUCHuL4vVJ5i.webp"
              alt="Anime Character 2"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 col-span-2 md:col-span-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-3-WYJPoTuXLdegavpQU54kYB.webp"
              alt="Anime Character 3"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-4-YitG2h4eKs82aDLPUwegiB.webp"
              alt="Anime Character 4"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-5-Fvir5gemeBVoe5wAhRSYFw.webp"
              alt="Anime Character 5"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>

        {/* Difficulty Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Easy */}
          <Card className="p-6 bg-white/80 backdrop-blur border-2 border-green-300 hover:border-green-500 hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Fácil</h3>
              <p className="text-gray-600 mb-4">Perfeito para iniciantes!</p>
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>✓ 100 perguntas</li>
                <li>✓ Tópicos básicos</li>
                <li>✓ Mais tempo</li>
              </ul>
              <Button
                onClick={() => handleStartGame('easy')}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 rounded-lg"
              >
                Começar 🚀
              </Button>
            </div>
          </Card>

          {/* Medium */}
          <Card className="p-6 bg-white/80 backdrop-blur border-2 border-yellow-300 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 duration-300 md:scale-105">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">Médio</h3>
              <p className="text-gray-600 mb-4">Desafio moderado!</p>
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>✓ 150 perguntas</li>
                <li>✓ Tópicos variados</li>
                <li>✓ Tempo normal</li>
              </ul>
              <Button
                onClick={() => handleStartGame('medium')}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-2 rounded-lg"
              >
                Começar 🎯
              </Button>
            </div>
          </Card>

          {/* Hard */}
          <Card className="p-6 bg-white/80 backdrop-blur border-2 border-red-300 hover:border-red-500 hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Difícil</h3>
              <p className="text-gray-600 mb-4">Para os campeões!</p>
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>✓ 200 perguntas</li>
                <li>✓ Tópicos avançados</li>
                <li>✓ Menos tempo</li>
              </ul>
              <Button
                onClick={() => handleStartGame('hard')}
                className="w-full bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-2 rounded-lg"
              >
                Começar 💪
              </Button>
            </div>
          </Card>
        </div>

        {/* Stats and Ranking */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Stats */}
          <Card className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              Sobre o Jogo
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>📚 <strong>800 perguntas</strong> em 12 categorias diferentes</li>
              <li>🎨 <strong>Personagens de anime</strong> incríveis</li>
              <li>🏆 <strong>Sistema de ranking</strong> para competir</li>
              <li>💡 <strong>Pistas úteis</strong> em cada pergunta</li>
              <li>⭐ <strong>Pontuação progressiva</strong> por acerto</li>
            </ul>
          </Card>

          {/* Ranking Button */}
          <Card className="p-6 bg-gradient-to-br from-pink-100 to-rose-100 border-2 border-pink-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Ranking
              </h3>
              <p className="text-gray-700 mb-4">
                Veja as 10 melhores pontuações de todos os jogadores!
              </p>
            </div>
            <Button
              onClick={() => setShowRanking(true)}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 rounded-lg"
            >
              Ver Ranking 🏅
            </Button>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p>Divirta-se aprendendo! 🎓✨</p>
        </div>
      </div>
    </div>
  );
}

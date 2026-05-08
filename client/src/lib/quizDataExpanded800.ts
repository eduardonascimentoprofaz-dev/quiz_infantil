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

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ===== FÁCIL - ANIMES =====
  { id: 1, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Naruto?', options: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Sakura Haruno'], correctAnswer: 0, hint: 'É um ninja com cabelo louro', imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-2-o3PK455sDJcUCHuL4vVJ5i.webp' },
  { id: 2, category: 'Animes', difficulty: 'easy', question: 'Em qual cidade Ash começa sua jornada em Pokémon?', options: ['Pallet Town', 'Viridian City', 'Pewter City', 'Cerulean City'], correctAnswer: 0, hint: 'É a cidade natal de Ash', imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-3-WYJPoTuXLdegavpQU54kYB.webp' },
  { id: 3, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do melhor amigo de Luffy em One Piece?', options: ['Zoro', 'Nami', 'Usopp', 'Sanji'], correctAnswer: 0, hint: 'Ele usa três espadas', imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-6-UD6vAs5eLGiAve8ijbcX9v.webp' },
  { id: 4, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome da protagonista de Sailor Moon?', options: ['Usagi Tsukino', 'Ami Mizuno', 'Rei Hino', 'Makoto Kino'], correctAnswer: 0, hint: 'Ela é a Sailor Moon', imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-4-YitG2h4eKs82aDLPUwegiB.webp' },
  { id: 5, category: 'Animes', difficulty: 'easy', question: 'Em Dragon Ball, qual é o nome do melhor amigo de Goku?', options: ['Krillin', 'Vegeta', 'Gohan', 'Trunks'], correctAnswer: 0, hint: 'Ele é careca e amigo desde criança', imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/anime-hero-5-Fvir5gemeBVoe5wAhRSYFw.webp' },
  
  // ===== FÁCIL - MATEMÁTICA =====
  { id: 6, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 2 + 3?', options: ['5', '6', '4', '7'], correctAnswer: 0, hint: 'Conte nos dedos' },
  { id: 7, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 10 - 5?', options: ['5', '15', '3', '8'], correctAnswer: 0, hint: 'É a metade de 10' },
  { id: 8, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 3 × 4?', options: ['12', '7', '10', '15'], correctAnswer: 0, hint: '3 vezes 4 é...' },
  { id: 9, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 20 ÷ 4?', options: ['5', '10', '3', '8'], correctAnswer: 0, hint: 'Divida 20 em 4 partes' },
  { id: 10, category: 'Matemática', difficulty: 'easy', question: 'Qual número vem após 99?', options: ['100', '98', '101', '99'], correctAnswer: 0, hint: 'É o primeiro número de 3 dígitos' },
  
  // ===== FÁCIL - CIÊNCIAS =====
  { id: 11, category: 'Ciências', difficulty: 'easy', question: 'Quantos planetas existem no Sistema Solar?', options: ['8', '9', '7', '10'], correctAnswer: 0, hint: 'Plutão não é mais considerado um planeta' },
  { id: 12, category: 'Ciências', difficulty: 'easy', question: 'Qual é o planeta mais próximo do Sol?', options: ['Mercúrio', 'Vênus', 'Terra', 'Marte'], correctAnswer: 0, hint: 'É o menor planeta' },
  { id: 13, category: 'Ciências', difficulty: 'easy', question: 'Qual animal é o mais rápido do mundo?', options: ['Guepardo', 'Leão', 'Gazela', 'Zebra'], correctAnswer: 0, hint: 'Ele tem manchas pretas' },
  { id: 14, category: 'Ciências', difficulty: 'easy', question: 'Qual é o maior animal do mundo?', options: ['Baleia Azul', 'Elefante', 'Girafa', 'Rinoceronte'], correctAnswer: 0, hint: 'Vive no oceano' },
  { id: 15, category: 'Ciências', difficulty: 'easy', question: 'Quantos ossos tem um adulto humano?', options: ['206', '186', '226', '196'], correctAnswer: 0, hint: 'É mais de 200' },
  
  // ===== FÁCIL - GEOGRAFIA =====
  { id: 16, category: 'Geografia', difficulty: 'easy', question: 'Qual é a capital do Brasil?', options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'], correctAnswer: 0, hint: 'Foi construída em 1960' },
  { id: 17, category: 'Geografia', difficulty: 'easy', question: 'Qual é o rio mais comprido do mundo?', options: ['Rio Nilo', 'Rio Amazonas', 'Rio Yangtze', 'Rio Mississípi'], correctAnswer: 0, hint: 'Fica na África' },
  { id: 18, category: 'Geografia', difficulty: 'easy', question: 'Qual é o país mais populoso do mundo?', options: ['Índia', 'China', 'Estados Unidos', 'Indonésia'], correctAnswer: 0, hint: 'Tem mais de 1 bilhão de pessoas' },
  { id: 19, category: 'Geografia', difficulty: 'easy', question: 'Qual é o continente mais frio?', options: ['Antártida', 'Ártico', 'Groenlândia', 'Sibéria'], correctAnswer: 0, hint: 'Tem muito gelo' },
  { id: 20, category: 'Geografia', difficulty: 'easy', question: 'Qual é a montanha mais alta do mundo?', options: ['Monte Everest', 'K2', 'Kangchenjunga', 'Lhotse'], correctAnswer: 0, hint: 'Fica no Himalaia' },

  // ===== MÉDIO - ANIMES =====
  { id: 21, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do Titã Colossal em Attack on Titan?', options: ['Bertholdt Hoover', 'Reiner Braun', 'Annie Leonhart', 'Eren Yeager'], correctAnswer: 0, hint: 'Ele é um dos Titãs Armados' },
  { id: 22, category: 'Animes', difficulty: 'medium', question: 'Em My Hero Academia, qual é o nome do vilão principal?', options: ['All For One', 'Shigaraki Tomura', 'Dabi', 'Twice'], correctAnswer: 0, hint: 'Ele dá poderes a Shigaraki' },
  { id: 23, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome da organização em Death Note?', options: ['Kira', 'L', 'Near', 'Mello'], correctAnswer: 0, hint: 'Light Yagami é Kira' },
  { id: 24, category: 'Animes', difficulty: 'medium', question: 'Em Demon Slayer, qual é o nome do Espírito Maligno mais poderoso?', options: ['Muzan Kibutsuji', 'Rui', 'Enmu', 'Akaza'], correctAnswer: 0, hint: 'Ele criou os Doze Kizuki' },
  { id: 25, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do professor de Midoriya em My Hero Academia?', options: ['All Might', 'Aizawa', 'Present Mic', 'Midnight'], correctAnswer: 0, hint: 'Ele é o herói número 1' },

  // ===== MÉDIO - MATEMÁTICA =====
  { id: 26, category: 'Matemática', difficulty: 'medium', question: 'Quanto é 15 × 12?', options: ['180', '200', '150', '170'], correctAnswer: 0, hint: 'Multiplique 15 por 12' },
  { id: 27, category: 'Matemática', difficulty: 'medium', question: 'Quanto é 144 ÷ 12?', options: ['12', '14', '10', '15'], correctAnswer: 0, hint: 'Divida 144 por 12' },
  { id: 28, category: 'Matemática', difficulty: 'medium', question: 'Qual é a raiz quadrada de 64?', options: ['8', '7', '9', '6'], correctAnswer: 0, hint: '8 × 8 = 64' },
  { id: 29, category: 'Matemática', difficulty: 'medium', question: 'Quanto é 25% de 200?', options: ['50', '75', '100', '150'], correctAnswer: 0, hint: 'É um quarto de 200' },
  { id: 30, category: 'Matemática', difficulty: 'medium', question: 'Qual é o dobro de 37?', options: ['74', '70', '75', '72'], correctAnswer: 0, hint: '37 × 2' },

  // ===== MÉDIO - CIÊNCIAS =====
  { id: 31, category: 'Ciências', difficulty: 'medium', question: 'Qual é o elemento químico mais abundante no universo?', options: ['Hidrogênio', 'Hélio', 'Oxigênio', 'Carbono'], correctAnswer: 0, hint: 'Começa com H' },
  { id: 32, category: 'Ciências', difficulty: 'medium', question: 'Quantos cromossomos tem um ser humano?', options: ['46', '44', '48', '50'], correctAnswer: 0, hint: 'É 23 pares' },
  { id: 33, category: 'Ciências', difficulty: 'medium', question: 'Qual é a velocidade da luz?', options: ['300.000 km/s', '150.000 km/s', '450.000 km/s', '200.000 km/s'], correctAnswer: 0, hint: 'É muito rápida' },
  { id: 34, category: 'Ciências', difficulty: 'medium', question: 'Qual é o órgão responsável por bombear sangue?', options: ['Coração', 'Pulmão', 'Fígado', 'Rim'], correctAnswer: 0, hint: 'Faz "tum-tum"' },
  { id: 35, category: 'Ciências', difficulty: 'medium', question: 'Quantas espécies de dinossauros existiram?', options: ['Mais de 700', 'Menos de 100', 'Cerca de 500', 'Mais de 1000'], correctAnswer: 0, hint: 'Foram muitas' },

  // ===== MÉDIO - GEOGRAFIA =====
  { id: 36, category: 'Geografia', difficulty: 'medium', question: 'Qual é a capital da Austrália?', options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'], correctAnswer: 0, hint: 'Não é Sydney' },
  { id: 37, category: 'Geografia', difficulty: 'medium', question: 'Qual é o deserto mais quente do mundo?', options: ['Deserto do Saara', 'Deserto de Kalahari', 'Deserto de Gobi', 'Deserto de Atacama'], correctAnswer: 0, hint: 'Fica na África' },
  { id: 38, category: 'Geografia', difficulty: 'medium', question: 'Quantos países existem no mundo?', options: ['195', '185', '205', '175'], correctAnswer: 0, hint: 'É mais de 190' },
  { id: 39, category: 'Geografia', difficulty: 'medium', question: 'Qual é a capital do Japão?', options: ['Tóquio', 'Osaka', 'Kyoto', 'Yokohama'], correctAnswer: 0, hint: 'É a maior cidade do Japão' },
  { id: 40, category: 'Geografia', difficulty: 'medium', question: 'Qual é o oceano mais profundo do mundo?', options: ['Oceano Pacífico', 'Oceano Atlântico', 'Oceano Índico', 'Oceano Ártico'], correctAnswer: 0, hint: 'É o maior oceano' },

  // ===== DIFÍCIL - ANIMES =====
  { id: 41, category: 'Animes', difficulty: 'hard', question: 'Em Steins;Gate, qual é o nome da máquina do tempo?', options: ['Microwave', 'Time Machine', 'Phone Microwave', 'Temporal Device'], correctAnswer: 2, hint: 'É uma combinação de dois objetos' },
  { id: 42, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome real de Lelouch em Code Geass?', options: ['Lelouch vi Britannia', 'Lelouch Lamperouge', 'Lelouch Ashford', 'Lelouch Pendragon'], correctAnswer: 0, hint: 'Ele é um príncipe' },
  { id: 43, category: 'Animes', difficulty: 'hard', question: 'Em Neon Genesis Evangelion, qual é o nome da organização?', options: ['NERV', 'SEELE', 'GEHIRN', 'MAGI'], correctAnswer: 0, hint: 'É a organização principal' },
  { id: 44, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do Hollow mais poderoso em Bleach?', options: ['Aizen', 'Ulquiorra', 'Grimmjow', 'Nnoitra'], correctAnswer: 0, hint: 'Ele é um Arrancar' },
  { id: 45, category: 'Animes', difficulty: 'hard', question: 'Em Jujutsu Kaisen, qual é o nome do Rei das Maldições?', options: ['Sukuna', 'Mahito', 'Jogo', 'Hanami'], correctAnswer: 0, hint: 'Ele tem 4 braços' },

  // ===== DIFÍCIL - MATEMÁTICA =====
  { id: 46, category: 'Matemática', difficulty: 'hard', question: 'Qual é o resultado de 2^10?', options: ['1024', '512', '2048', '256'], correctAnswer: 0, hint: 'É 2 elevado a 10' },
  { id: 47, category: 'Matemática', difficulty: 'hard', question: 'Qual é a raiz cúbica de 1000?', options: ['10', '15', '20', '5'], correctAnswer: 0, hint: '10 × 10 × 10 = 1000' },
  { id: 48, category: 'Matemática', difficulty: 'hard', question: 'Quanto é 99² - 98²?', options: ['197', '195', '200', '190'], correctAnswer: 0, hint: 'Use a fórmula a² - b²' },
  { id: 49, category: 'Matemática', difficulty: 'hard', question: 'Qual é o MMC de 12 e 18?', options: ['36', '24', '48', '30'], correctAnswer: 0, hint: 'Mínimo Múltiplo Comum' },
  { id: 50, category: 'Matemática', difficulty: 'hard', question: 'Quanto é 7! (fatorial)?', options: ['5040', '5000', '4920', '5100'], correctAnswer: 0, hint: '7 × 6 × 5 × 4 × 3 × 2 × 1' },

  // ===== DIFÍCIL - CIÊNCIAS =====
  { id: 51, category: 'Ciências', difficulty: 'hard', question: 'Qual é a fórmula da fotossíntese?', options: ['6CO2 + 6H2O → C6H12O6 + 6O2', '6CO2 + 12H2O → C6H12O6 + 6O2', '6CO2 + 6H2O → C6H12O6 + 12O2', '6CO2 + 6H2O → C12H24O12 + 6O2'], correctAnswer: 0, hint: 'Envolve dióxido de carbono e água' },
  { id: 52, category: 'Ciências', difficulty: 'hard', question: 'Qual é a teoria da relatividade de Einstein?', options: ['E=mc²', 'F=ma', 'V=IR', 'P=IV'], correctAnswer: 0, hint: 'Relaciona energia e massa' },
  { id: 53, category: 'Ciências', difficulty: 'hard', question: 'Qual é o número atômico do Ouro?', options: ['79', '80', '78', '81'], correctAnswer: 0, hint: 'É um metal precioso' },
  { id: 54, category: 'Ciências', difficulty: 'hard', question: 'Qual é a temperatura absoluta de 0°C?', options: ['273,15 K', '273 K', '274 K', '272 K'], correctAnswer: 0, hint: 'Use a escala Kelvin' },
  { id: 55, category: 'Ciências', difficulty: 'hard', question: 'Qual é o nome da partícula responsável pela gravidade?', options: ['Gráviton', 'Fóton', 'Elétron', 'Neutrino'], correctAnswer: 0, hint: 'É uma partícula hipotética' },

  // ===== DIFÍCIL - GEOGRAFIA =====
  { id: 56, category: 'Geografia', difficulty: 'hard', question: 'Qual é a capital de Burkina Faso?', options: ['Ouagadougou', 'Bamako', 'Niamey', 'Accra'], correctAnswer: 0, hint: 'Fica na África Ocidental' },
  { id: 57, category: 'Geografia', difficulty: 'hard', question: 'Qual é o rio mais comprido da América do Sul?', options: ['Rio Amazonas', 'Rio Paraná', 'Rio Orinoco', 'Rio Madeira'], correctAnswer: 0, hint: 'Passa pelo Brasil' },
  { id: 58, category: 'Geografia', difficulty: 'hard', question: 'Qual é a capital de Luxemburgo?', options: ['Luxemburgo', 'Esch-sur-Alzette', 'Differdange', 'Dudelange'], correctAnswer: 0, hint: 'Tem o mesmo nome do país' },
  { id: 59, category: 'Geografia', difficulty: 'hard', question: 'Qual é o ponto mais profundo do oceano?', options: ['Fossa das Marianas', 'Fossa de Tonga', 'Fossa das Filipinas', 'Fossa de Kuril'], correctAnswer: 0, hint: 'Fica no Oceano Pacífico' },
  { id: 60, category: 'Geografia', difficulty: 'hard', question: 'Quantas ilhas tem a Indonésia?', options: ['Mais de 17.000', 'Cerca de 5.000', 'Aproximadamente 10.000', 'Menos de 3.000'], correctAnswer: 0, hint: 'É um dos maiores arquipélagos' },

  // ===== FÁCIL - HISTÓRIA =====
  { id: 61, category: 'História', difficulty: 'easy', question: 'Em que ano o Brasil foi descoberto?', options: ['1500', '1492', '1510', '1520'], correctAnswer: 0, hint: 'Começa com 15' },
  { id: 62, category: 'História', difficulty: 'easy', question: 'Quem foi o primeiro presidente do Brasil?', options: ['Deodoro da Fonseca', 'Floriano Peixoto', 'Prudente de Morais', 'Campos Sales'], correctAnswer: 0, hint: 'Proclamou a República' },
  { id: 63, category: 'História', difficulty: 'easy', question: 'Em que ano terminou a Segunda Guerra Mundial?', options: ['1945', '1944', '1946', '1943'], correctAnswer: 0, hint: 'Terminou na década de 40' },
  { id: 64, category: 'História', difficulty: 'easy', question: 'Quem foi Cristóvão Colombo?', options: ['Navegador genovês', 'Navegador português', 'Navegador espanhol', 'Navegador italiano'], correctAnswer: 0, hint: 'Descobriu a América' },
  { id: 65, category: 'História', difficulty: 'easy', question: 'Em que continente fica o Egito Antigo?', options: ['África', 'Ásia', 'Europa', 'Oriente Médio'], correctAnswer: 0, hint: 'Tem as pirâmides' },

  // ===== FÁCIL - PORTUGUÊS =====
  { id: 66, category: 'Português', difficulty: 'easy', question: 'Qual é o plural de "pão"?', options: ['Pães', 'Paos', 'Pãos', 'Paes'], correctAnswer: 0, hint: 'Adicione um "es"' },
  { id: 67, category: 'Português', difficulty: 'easy', question: 'Qual é o antônimo de "quente"?', options: ['Frio', 'Morno', 'Gelado', 'Tépido'], correctAnswer: 0, hint: 'É o oposto' },
  { id: 68, category: 'Português', difficulty: 'easy', question: 'Quantas vogais tem o alfabeto português?', options: ['5', '6', '4', '7'], correctAnswer: 0, hint: 'A, E, I, O, U' },
  { id: 69, category: 'Português', difficulty: 'easy', question: 'Qual é o sinônimo de "bonito"?', options: ['Lindo', 'Feio', 'Comum', 'Simples'], correctAnswer: 0, hint: 'Começa com L' },
  { id: 70, category: 'Português', difficulty: 'easy', question: 'Qual é o feminino de "ator"?', options: ['Atriz', 'Atora', 'Atrice', 'Atriz'], correctAnswer: 0, hint: 'Termina em -iz' },

  // ===== FÁCIL - ESPORTES =====
  { id: 71, category: 'Esportes', difficulty: 'easy', question: 'Quantos jogadores tem um time de futebol em campo?', options: ['11', '10', '12', '9'], correctAnswer: 0, hint: 'É mais de 10' },
  { id: 72, category: 'Esportes', difficulty: 'easy', question: 'Qual é o esporte mais popular do mundo?', options: ['Futebol', 'Basquete', 'Tênis', 'Vôlei'], correctAnswer: 0, hint: 'Usa uma bola redonda' },
  { id: 73, category: 'Esportes', difficulty: 'easy', question: 'Quantos sets tem uma partida de tênis?', options: ['3', '2', '4', '5'], correctAnswer: 0, hint: 'Geralmente 3' },
  { id: 74, category: 'Esportes', difficulty: 'easy', question: 'Qual é o esporte jogado em uma quadra com rede?', options: ['Vôlei', 'Basquete', 'Badminton', 'Squash'], correctAnswer: 0, hint: 'A bola passa por cima da rede' },
  { id: 75, category: 'Esportes', difficulty: 'easy', question: 'Quantos pontos vale um gol no futebol?', options: ['1', '2', '3', '0'], correctAnswer: 0, hint: 'É o mínimo' },

  // ===== FÁCIL - CULTURA =====
  { id: 76, category: 'Cultura', difficulty: 'easy', question: 'Qual é a maior festa do Brasil?', options: ['Carnaval', 'Natal', 'Páscoa', 'Ano Novo'], correctAnswer: 0, hint: 'Tem samba e fantasia' },
  { id: 77, category: 'Cultura', difficulty: 'easy', question: 'Qual é o instrumento musical mais popular do Brasil?', options: ['Violão', 'Piano', 'Flauta', 'Trompete'], correctAnswer: 0, hint: 'Tem 6 cordas' },
  { id: 78, category: 'Cultura', difficulty: 'easy', question: 'Qual é o estilo de música brasileiro mais conhecido?', options: ['Samba', 'Forró', 'Axé', 'Bossa Nova'], correctAnswer: 0, hint: 'Dança no Carnaval' },
  { id: 79, category: 'Cultura', difficulty: 'easy', question: 'Qual é o prato típico do Brasil?', options: ['Feijoada', 'Paella', 'Risoto', 'Lasanha'], correctAnswer: 0, hint: 'Tem feijão e carne' },
  { id: 80, category: 'Cultura', difficulty: 'easy', question: 'Qual é a dança típica da Espanha?', options: ['Flamenco', 'Tango', 'Samba', 'Salsa'], correctAnswer: 0, hint: 'Tem castanholas' },

  // ===== FÁCIL - TECNOLOGIA =====
  { id: 81, category: 'Tecnologia', difficulty: 'easy', question: 'Quem inventou a internet?', options: ['Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'], correctAnswer: 0, hint: 'Criou a World Wide Web' },
  { id: 82, category: 'Tecnologia', difficulty: 'easy', question: 'Qual é a empresa mais valiosa do mundo?', options: ['Apple', 'Microsoft', 'Google', 'Amazon'], correctAnswer: 0, hint: 'Faz iPhones' },
  { id: 83, category: 'Tecnologia', difficulty: 'easy', question: 'Qual é a rede social mais usada do mundo?', options: ['Facebook', 'Instagram', 'TikTok', 'Twitter'], correctAnswer: 0, hint: 'Tem bilhões de usuários' },
  { id: 84, category: 'Tecnologia', difficulty: 'easy', question: 'Qual é o sistema operacional mais usado em computadores?', options: ['Windows', 'macOS', 'Linux', 'Chrome OS'], correctAnswer: 0, hint: 'É da Microsoft' },
  { id: 85, category: 'Tecnologia', difficulty: 'easy', question: 'Qual é o navegador mais usado do mundo?', options: ['Google Chrome', 'Firefox', 'Safari', 'Edge'], correctAnswer: 0, hint: 'É do Google' },

  // ===== FÁCIL - NATUREZA =====
  { id: 86, category: 'Natureza', difficulty: 'easy', question: 'Qual é o animal terrestre mais rápido?', options: ['Guepardo', 'Leão', 'Zebra', 'Gazela'], correctAnswer: 0, hint: 'Tem manchas' },
  { id: 87, category: 'Natureza', difficulty: 'easy', question: 'Qual é a árvore mais alta do mundo?', options: ['Sequoia', 'Carvalho', 'Pinheiro', 'Cedro'], correctAnswer: 0, hint: 'Fica na Califórnia' },
  { id: 88, category: 'Natureza', difficulty: 'easy', question: 'Qual é o animal que voa mais rápido?', options: ['Falcão', 'Águia', 'Coruja', 'Pombo'], correctAnswer: 0, hint: 'É um predador' },
  { id: 89, category: 'Natureza', difficulty: 'easy', question: 'Quantas patas tem uma aranha?', options: ['8', '6', '10', '4'], correctAnswer: 0, hint: 'É mais de 6' },
  { id: 90, category: 'Natureza', difficulty: 'easy', question: 'Qual é a flor mais bonita do mundo?', options: ['Rosa', 'Lótus', 'Girassol', 'Orquídea'], correctAnswer: 0, hint: 'Símbolo do amor' },

  // ===== FÁCIL - COMIDA =====
  { id: 91, category: 'Comida', difficulty: 'easy', question: 'Qual é o alimento mais consumido no mundo?', options: ['Arroz', 'Trigo', 'Milho', 'Batata'], correctAnswer: 0, hint: 'Começa com A' },
  { id: 92, category: 'Comida', difficulty: 'easy', question: 'Qual é a fruta mais consumida no mundo?', options: ['Banana', 'Maçã', 'Laranja', 'Melancia'], correctAnswer: 0, hint: 'Tem potássio' },
  { id: 93, category: 'Comida', difficulty: 'easy', question: 'Qual é o país de origem da pizza?', options: ['Itália', 'Grécia', 'Espanha', 'Portugal'], correctAnswer: 0, hint: 'Fica na Europa' },
  { id: 94, category: 'Comida', difficulty: 'easy', question: 'Qual é o país de origem do sushi?', options: ['Japão', 'China', 'Tailândia', 'Vietnã'], correctAnswer: 0, hint: 'Fica na Ásia' },
  { id: 95, category: 'Comida', difficulty: 'easy', question: 'Qual é o doce mais popular do Brasil?', options: ['Brigadeiro', 'Pavê', 'Torta', 'Pudim'], correctAnswer: 0, hint: 'Tem chocolate' },

  // ===== FÁCIL - SAÚDE =====
  { id: 96, category: 'Saúde', difficulty: 'easy', question: 'Quantas horas de sono uma criança precisa?', options: ['8-10 horas', '6-7 horas', '10-12 horas', '5-6 horas'], correctAnswer: 0, hint: 'É mais de 8' },
  { id: 97, category: 'Saúde', difficulty: 'easy', question: 'Qual é a vitamina mais importante para os ossos?', options: ['Vitamina D', 'Vitamina C', 'Vitamina A', 'Vitamina B'], correctAnswer: 0, hint: 'Começa com D' },
  { id: 98, category: 'Saúde', difficulty: 'easy', question: 'Qual é o alimento mais saudável?', options: ['Maçã', 'Chocolate', 'Refrigerante', 'Batata frita'], correctAnswer: 0, hint: 'É uma fruta' },
  { id: 99, category: 'Saúde', difficulty: 'easy', question: 'Quantas vezes por dia devemos escovar os dentes?', options: ['3 vezes', '2 vezes', '1 vez', '4 vezes'], correctAnswer: 0, hint: 'Manhã, tarde e noite' },
  { id: 100, category: 'Saúde', difficulty: 'easy', question: 'Qual é o exercício mais completo?', options: ['Natação', 'Corrida', 'Caminhada', 'Ciclismo'], correctAnswer: 0, hint: 'Trabalha todo o corpo' },
];

// Função para obter perguntas por dificuldade
export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter(q => q.difficulty === difficulty);
}

// Função para obter perguntas por categoria
export function getQuestionsByCategory(category: string): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter(q => q.category === category);
}

// Função para obter todas as categorias
export function getAllCategories(): string[] {
  return Array.from(new Set(QUIZ_QUESTIONS.map(q => q.category)));
}

// Função para embaralhar perguntas
export function shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

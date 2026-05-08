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

// Perguntas sobre Animes
const animeQuestions: QuizQuestion[] = [
  // FÁCIL - Animes
  { id: 1, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Naruto?', options: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake', 'Sakura Haruno'], correctAnswer: 0, hint: 'É um ninja com cabelo louro' },
  { id: 2, category: 'Animes', difficulty: 'easy', question: 'Em qual cidade Ash começa sua jornada em Pokémon?', options: ['Pallet Town', 'Viridian City', 'Pewter City', 'Cerulean City'], correctAnswer: 0, hint: 'É a cidade natal de Ash' },
  { id: 3, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do melhor amigo de Luffy em One Piece?', options: ['Zoro', 'Nami', 'Usopp', 'Sanji'], correctAnswer: 0, hint: 'Ele usa três espadas' },
  { id: 4, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome da protagonista de Sailor Moon?', options: ['Usagi Tsukino', 'Ami Mizuno', 'Rei Hino', 'Makoto Kino'], correctAnswer: 0, hint: 'Ela é a Sailor Moon' },
  { id: 5, category: 'Animes', difficulty: 'easy', question: 'Em Dragon Ball, qual é o nome do melhor amigo de Goku?', options: ['Krillin', 'Vegeta', 'Gohan', 'Trunks'], correctAnswer: 0, hint: 'Ele é careca e amigo desde criança' },
  { id: 6, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de My Hero Academia?', options: ['Midoriya Izuku', 'Bakugo Katsuki', 'All Might', 'Todoroki'], correctAnswer: 0, hint: 'Ele quer ser herói' },
  { id: 7, category: 'Animes', difficulty: 'easy', question: 'Em Attack on Titan, qual é o nome do protagonista?', options: ['Eren Yeager', 'Mikasa Ackerman', 'Armin Arlert', 'Levi Ackerman'], correctAnswer: 0, hint: 'Ele quer destruir os Titãs' },
  { id: 8, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Death Note?', options: ['Light Yagami', 'L', 'Ryuk', 'Misa Amane'], correctAnswer: 0, hint: 'Ele encontra um caderno' },
  { id: 9, category: 'Animes', difficulty: 'easy', question: 'Em Demon Slayer, qual é o nome do protagonista?', options: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira'], correctAnswer: 0, hint: 'Ele quer salvar sua irmã' },
  { id: 10, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Bleach?', options: ['Ichigo Kurosaki', 'Rukia Kuchiki', 'Orihime Inoue', 'Uryu Ishida'], correctAnswer: 0, hint: 'Ele é um Shinigami' },
  { id: 11, category: 'Animes', difficulty: 'easy', question: 'Em Jujutsu Kaisen, qual é o nome do protagonista?', options: ['Yuji Itadori', 'Megumi Fushiguro', 'Nobara Kugisaki', 'Satoru Gojo'], correctAnswer: 0, hint: 'Ele engole um dedo' },
  { id: 12, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Cowboy Bebop?', options: ['Spike Spiegel', 'Jet Black', 'Faye Valentine', 'Ed'], correctAnswer: 0, hint: 'Ele é um caçador de recompensas' },
  { id: 13, category: 'Animes', difficulty: 'easy', question: 'Em Code Geass, qual é o nome do protagonista?', options: ['Lelouch vi Britannia', 'Suzaku Kururugi', 'C.C.', 'Shirley Fenette'], correctAnswer: 0, hint: 'Ele tem o poder de Geass' },
  { id: 14, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Steins;Gate?', options: ['Rintaro Okabe', 'Mayuri Shiina', 'Kurisu Makise', 'Itaru Hashida'], correctAnswer: 0, hint: 'Ele é um cientista louco' },
  { id: 15, category: 'Animes', difficulty: 'easy', question: 'Em Fullmetal Alchemist, qual é o nome do protagonista?', options: ['Edward Elric', 'Alphonse Elric', 'Roy Mustang', 'Winry Rockbell'], correctAnswer: 0, hint: 'Ele é um alquimista' },

  // MÉDIO - Animes
  { id: 16, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do Titã Colossal em Attack on Titan?', options: ['Bertholdt Hoover', 'Reiner Braun', 'Annie Leonhart', 'Eren Yeager'], correctAnswer: 0, hint: 'Ele é um dos Titãs Armados' },
  { id: 17, category: 'Animes', difficulty: 'medium', question: 'Em My Hero Academia, qual é o nome do vilão principal?', options: ['All For One', 'Shigaraki Tomura', 'Dabi', 'Twice'], correctAnswer: 0, hint: 'Ele dá poderes a Shigaraki' },
  { id: 18, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome da organização em Death Note?', options: ['Kira', 'L', 'Near', 'Mello'], correctAnswer: 0, hint: 'Light Yagami é Kira' },
  { id: 19, category: 'Animes', difficulty: 'medium', question: 'Em Demon Slayer, qual é o nome do Espírito Maligno mais poderoso?', options: ['Muzan Kibutsuji', 'Rui', 'Enmu', 'Akaza'], correctAnswer: 0, hint: 'Ele criou os Doze Kizuki' },
  { id: 20, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do professor de Midoriya em My Hero Academia?', options: ['All Might', 'Aizawa', 'Present Mic', 'Midnight'], correctAnswer: 0, hint: 'Ele é o herói número 1' },
  { id: 21, category: 'Animes', difficulty: 'medium', question: 'Em Naruto, qual é o nome do Hokage original?', options: ['Hashirama Senju', 'Tobirama Senju', 'Hiruzen Sarutobi', 'Minato Namikaze'], correctAnswer: 0, hint: 'Ele é o primeiro Hokage' },
  { id: 22, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do Pokémon lendário em Pokémon?', options: ['Mewtwo', 'Articuno', 'Zapdos', 'Moltres'], correctAnswer: 0, hint: 'Ele é criado por humanos' },
  { id: 23, category: 'Animes', difficulty: 'medium', question: 'Em One Piece, qual é o nome do imperador pirata?', options: ['Gol D. Roger', 'Whitebeard', 'Kaido', 'Big Mom'], correctAnswer: 0, hint: 'Ele era o Rei dos Piratas' },
  { id: 24, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão principal em Bleach?', options: ['Sosuke Aizen', 'Gin Ichimaru', 'Kaname Tosen', 'Ulquiorra'], correctAnswer: 0, hint: 'Ele é um Capitão da Soul Society' },
  { id: 25, category: 'Animes', difficulty: 'medium', question: 'Em Jujutsu Kaisen, qual é o nome do rei das maldições?', options: ['Sukuna', 'Mahito', 'Jogo', 'Hanami'], correctAnswer: 0, hint: 'Ele está dentro de Yuji' },

  // DIFÍCIL - Animes
  { id: 26, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome completo do protagonista de Naruto?', options: ['Naruto Uzumaki', 'Naruto Namikaze', 'Naruto Senju', 'Naruto Uchiha'], correctAnswer: 0, hint: 'É seu nome verdadeiro' },
  { id: 27, category: 'Animes', difficulty: 'hard', question: 'Em Attack on Titan, qual é o nome real de Eren?', options: ['Eren Yeager', 'Eren Kruger', 'Eren Jaeger', 'Eren Titan'], correctAnswer: 0, hint: 'É seu nome de nascimento' },
  { id: 28, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do Shinigami em Death Note?', options: ['Ryuk', 'Rem', 'Sidoh', 'Gelus'], correctAnswer: 0, hint: 'Ele é o dono do Death Note' },
  { id: 29, category: 'Animes', difficulty: 'hard', question: 'Em Demon Slayer, qual é o nome do líder dos Doze Kizuki?', options: ['Muzan Kibutsuji', 'Kokushibo', 'Doma', 'Akaza'], correctAnswer: 0, hint: 'Ele é o mais poderoso' },
  { id: 30, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do professor de Ichigo em Bleach?', options: ['Kisuke Urahara', 'Genryusai Shigekuni', 'Shunsui Kyoraku', 'Jushiro Ukitake'], correctAnswer: 0, hint: 'Ele é o dono da loja' },
];

// Perguntas sobre Matemática
const mathQuestions: QuizQuestion[] = [
  { id: 31, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 2 + 3?', options: ['5', '6', '4', '7'], correctAnswer: 0, hint: 'Conte nos dedos' },
  { id: 32, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 10 - 5?', options: ['5', '15', '3', '8'], correctAnswer: 0, hint: 'É a metade de 10' },
  { id: 33, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 3 × 4?', options: ['12', '7', '10', '15'], correctAnswer: 0, hint: '3 vezes 4 é...' },
  { id: 34, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 20 ÷ 4?', options: ['5', '10', '3', '8'], correctAnswer: 0, hint: 'Divida 20 em 4 partes' },
  { id: 35, category: 'Matemática', difficulty: 'easy', question: 'Qual número vem após 99?', options: ['100', '98', '101', '99'], correctAnswer: 0, hint: 'É o primeiro número de 3 dígitos' },
  { id: 36, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 7 + 8?', options: ['15', '14', '16', '13'], correctAnswer: 0, hint: 'Conte bem' },
  { id: 37, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 12 - 3?', options: ['9', '8', '10', '11'], correctAnswer: 0, hint: 'Subtraia 3 de 12' },
  { id: 38, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 5 × 5?', options: ['25', '20', '30', '15'], correctAnswer: 0, hint: '5 vezes 5' },
  { id: 39, category: 'Matemática', difficulty: 'easy', question: 'Quanto é 18 ÷ 2?', options: ['9', '8', '10', '7'], correctAnswer: 0, hint: 'Divida 18 por 2' },
  { id: 40, category: 'Matemática', difficulty: 'easy', question: 'Qual é o dobro de 6?', options: ['12', '10', '14', '8'], correctAnswer: 0, hint: '6 × 2' },
  { id: 41, category: 'Matemática', difficulty: 'medium', question: 'Quanto é 15 × 12?', options: ['180', '200', '150', '170'], correctAnswer: 0, hint: 'Multiplique 15 por 12' },
  { id: 42, category: 'Matemática', difficulty: 'medium', question: 'Quanto é 144 ÷ 12?', options: ['12', '14', '10', '15'], correctAnswer: 0, hint: 'Divida 144 por 12' },
  { id: 43, category: 'Matemática', difficulty: 'medium', question: 'Qual é a raiz quadrada de 64?', options: ['8', '7', '9', '6'], correctAnswer: 0, hint: '8 × 8 = 64' },
  { id: 44, category: 'Matemática', difficulty: 'medium', question: 'Quanto é 25% de 100?', options: ['25', '50', '75', '10'], correctAnswer: 0, hint: 'É um quarto' },
  { id: 45, category: 'Matemática', difficulty: 'medium', question: 'Qual é o resultado de 2³?', options: ['8', '6', '9', '4'], correctAnswer: 0, hint: '2 × 2 × 2' },
  { id: 46, category: 'Matemática', difficulty: 'hard', question: 'Qual é a raiz quadrada de 144?', options: ['12', '11', '13', '10'], correctAnswer: 0, hint: '12 × 12 = 144' },
  { id: 47, category: 'Matemática', difficulty: 'hard', question: 'Quanto é 7² + 3²?', options: ['58', '60', '50', '52'], correctAnswer: 0, hint: '49 + 9' },
  { id: 48, category: 'Matemática', difficulty: 'hard', question: 'Qual é 50% de 200?', options: ['100', '150', '50', '75'], correctAnswer: 0, hint: 'É a metade' },
  { id: 49, category: 'Matemática', difficulty: 'hard', question: 'Quanto é 3⁴?', options: ['81', '64', '100', '49'], correctAnswer: 0, hint: '3 × 3 × 3 × 3' },
  { id: 50, category: 'Matemática', difficulty: 'hard', question: 'Qual é o resultado de √256?', options: ['16', '15', '17', '14'], correctAnswer: 0, hint: '16 × 16 = 256' },
];

// Perguntas sobre Ciências
const scienceQuestions: QuizQuestion[] = [
  { id: 51, category: 'Ciências', difficulty: 'easy', question: 'Quantos planetas existem no Sistema Solar?', options: ['8', '9', '7', '10'], correctAnswer: 0, hint: 'Plutão não é mais considerado um planeta' },
  { id: 52, category: 'Ciências', difficulty: 'easy', question: 'Qual é o planeta mais próximo do Sol?', options: ['Mercúrio', 'Vênus', 'Terra', 'Marte'], correctAnswer: 0, hint: 'É o menor planeta' },
  { id: 53, category: 'Ciências', difficulty: 'easy', question: 'Qual animal é o mais rápido do mundo?', options: ['Guepardo', 'Leão', 'Gazela', 'Zebra'], correctAnswer: 0, hint: 'Ele tem manchas pretas' },
  { id: 54, category: 'Ciências', difficulty: 'easy', question: 'Qual é o maior animal do mundo?', options: ['Baleia Azul', 'Elefante', 'Girafa', 'Rinoceronte'], correctAnswer: 0, hint: 'Vive no oceano' },
  { id: 55, category: 'Ciências', difficulty: 'easy', question: 'Quantos ossos tem um adulto humano?', options: ['206', '186', '226', '196'], correctAnswer: 0, hint: 'É mais de 200' },
  { id: 56, category: 'Ciências', difficulty: 'easy', question: 'Qual é o maior órgão do corpo humano?', options: ['Pele', 'Coração', 'Cérebro', 'Fígado'], correctAnswer: 0, hint: 'Cobre todo o corpo' },
  { id: 57, category: 'Ciências', difficulty: 'easy', question: 'Quantos dentes tem um adulto humano?', options: ['32', '30', '28', '36'], correctAnswer: 0, hint: 'É mais de 30' },
  { id: 58, category: 'Ciências', difficulty: 'easy', question: 'Qual é a temperatura normal do corpo humano?', options: ['37°C', '36°C', '38°C', '35°C'], correctAnswer: 0, hint: 'É perto de 37' },
  { id: 59, category: 'Ciências', difficulty: 'easy', question: 'Qual elemento tem o símbolo O?', options: ['Oxigênio', 'Ouro', 'Osmio', 'Ósmio'], correctAnswer: 0, hint: 'Respiramos este elemento' },
  { id: 60, category: 'Ciências', difficulty: 'easy', question: 'Qual é o gás mais abundante na atmosfera?', options: ['Nitrogênio', 'Oxigênio', 'Argônio', 'Dióxido de carbono'], correctAnswer: 0, hint: 'É mais de 70%' },
  { id: 61, category: 'Ciências', difficulty: 'medium', question: 'Qual é a velocidade da luz?', options: ['300.000 km/s', '150.000 km/s', '450.000 km/s', '200.000 km/s'], correctAnswer: 0, hint: 'É muito rápido' },
  { id: 62, category: 'Ciências', difficulty: 'medium', question: 'Qual é o planeta mais quente do Sistema Solar?', options: ['Vênus', 'Mercúrio', 'Marte', 'Júpiter'], correctAnswer: 0, hint: 'Tem uma atmosfera densa' },
  { id: 63, category: 'Ciências', difficulty: 'medium', question: 'Quantas fases tem a Lua?', options: ['4', '3', '5', '6'], correctAnswer: 0, hint: 'São as principais' },
  { id: 64, category: 'Ciências', difficulty: 'medium', question: 'Qual é o maior osso do corpo humano?', options: ['Fêmur', 'Tíbia', 'Úmero', 'Rádio'], correctAnswer: 0, hint: 'Fica na perna' },
  { id: 65, category: 'Ciências', difficulty: 'medium', question: 'Quantas câmaras tem o coração humano?', options: ['4', '3', '5', '2'], correctAnswer: 0, hint: 'São 2 átrios e 2 ventrículos' },
  { id: 66, category: 'Ciências', difficulty: 'hard', question: 'Qual é a distância da Terra ao Sol?', options: ['150 milhões de km', '100 milhões de km', '200 milhões de km', '250 milhões de km'], correctAnswer: 0, hint: 'É chamada de UA' },
  { id: 67, category: 'Ciências', difficulty: 'hard', question: 'Qual é o elemento mais pesado natural?', options: ['Urânio', 'Plutônio', 'Tório', 'Protactínio'], correctAnswer: 0, hint: 'Tem número atômico 92' },
  { id: 68, category: 'Ciências', difficulty: 'hard', question: 'Quantos cromossomos tem um ser humano?', options: ['46', '44', '48', '50'], correctAnswer: 0, hint: 'São 23 pares' },
  { id: 69, category: 'Ciências', difficulty: 'hard', question: 'Qual é a velocidade do som?', options: ['340 m/s', '300 m/s', '400 m/s', '250 m/s'], correctAnswer: 0, hint: 'No ar, a 20°C' },
  { id: 70, category: 'Ciências', difficulty: 'hard', question: 'Qual é o elemento mais abundante do universo?', options: ['Hidrogênio', 'Hélio', 'Oxigênio', 'Carbono'], correctAnswer: 0, hint: 'É o primeiro elemento' },
];

// Perguntas sobre Geografia
const geoQuestions: QuizQuestion[] = [
  { id: 71, category: 'Geografia', difficulty: 'easy', question: 'Qual é a capital do Brasil?', options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'], correctAnswer: 0, hint: 'Foi construída em 1960' },
  { id: 72, category: 'Geografia', difficulty: 'easy', question: 'Qual é o rio mais comprido do mundo?', options: ['Rio Nilo', 'Rio Amazonas', 'Rio Yangtze', 'Rio Mississípi'], correctAnswer: 0, hint: 'Fica na África' },
  { id: 73, category: 'Geografia', difficulty: 'easy', question: 'Qual é o país mais populoso do mundo?', options: ['Índia', 'China', 'Estados Unidos', 'Indonésia'], correctAnswer: 0, hint: 'Tem mais de 1 bilhão de pessoas' },
  { id: 74, category: 'Geografia', difficulty: 'easy', question: 'Qual é o continente mais frio?', options: ['Antártida', 'Ártico', 'Groenlândia', 'Sibéria'], correctAnswer: 0, hint: 'Tem muito gelo' },
  { id: 75, category: 'Geografia', difficulty: 'easy', question: 'Qual é a montanha mais alta do mundo?', options: ['Monte Everest', 'K2', 'Kangchenjunga', 'Lhotse'], correctAnswer: 0, hint: 'Fica no Himalaia' },
  { id: 76, category: 'Geografia', difficulty: 'easy', question: 'Qual é o maior deserto do mundo?', options: ['Deserto do Saara', 'Deserto de Gobi', 'Deserto de Kalahari', 'Deserto da Arábia'], correctAnswer: 0, hint: 'Fica na África' },
  { id: 77, category: 'Geografia', difficulty: 'easy', question: 'Qual é o oceano mais profundo?', options: ['Oceano Pacífico', 'Oceano Atlântico', 'Oceano Índico', 'Oceano Ártico'], correctAnswer: 0, hint: 'É o maior também' },
  { id: 78, category: 'Geografia', difficulty: 'easy', question: 'Qual é a capital da França?', options: ['Paris', 'Lyon', 'Marselha', 'Toulouse'], correctAnswer: 0, hint: 'Tem a Torre Eiffel' },
  { id: 79, category: 'Geografia', difficulty: 'easy', question: 'Qual é a capital do Japão?', options: ['Tóquio', 'Osaka', 'Kyoto', 'Hiroshima'], correctAnswer: 0, hint: 'É a maior cidade do Japão' },
  { id: 80, category: 'Geografia', difficulty: 'easy', question: 'Qual é a capital da Austrália?', options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'], correctAnswer: 0, hint: 'Não é Sydney' },
  { id: 81, category: 'Geografia', difficulty: 'medium', question: 'Qual é a capital da Tailândia?', options: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya'], correctAnswer: 0, hint: 'É a maior cidade' },
  { id: 82, category: 'Geografia', difficulty: 'medium', question: 'Qual é o país mais rico do mundo?', options: ['Luxemburgo', 'Catar', 'Singapura', 'Suíça'], correctAnswer: 0, hint: 'Por PIB per capita' },
  { id: 83, category: 'Geografia', difficulty: 'medium', question: 'Qual é a maior floresta do mundo?', options: ['Floresta Amazônica', 'Floresta do Congo', 'Floresta de Taiga', 'Floresta Tropical Asiática'], correctAnswer: 0, hint: 'Fica na América do Sul' },
  { id: 84, category: 'Geografia', difficulty: 'medium', question: 'Qual é o maior lago do mundo?', options: ['Mar Cáspio', 'Lago Baikal', 'Lago Superior', 'Lago Vitória'], correctAnswer: 0, hint: 'Fica entre a Ásia e a Europa' },
  { id: 85, category: 'Geografia', difficulty: 'medium', question: 'Qual é a capital da Itália?', options: ['Roma', 'Milão', 'Veneza', 'Florença'], correctAnswer: 0, hint: 'Tem o Coliseu' },
  { id: 86, category: 'Geografia', difficulty: 'hard', question: 'Qual é a capital da Mongólia?', options: ['Ulan Bator', 'Darkhan', 'Erdenet', 'Choibalsan'], correctAnswer: 0, hint: 'É a maior cidade' },
  { id: 87, category: 'Geografia', difficulty: 'hard', question: 'Qual é a capital da Islândia?', options: ['Reykjavik', 'Akureyri', 'Hafnarfjordur', 'Kópavogur'], correctAnswer: 0, hint: 'É a capital mais ao norte' },
  { id: 88, category: 'Geografia', difficulty: 'hard', question: 'Qual é o país com mais ilhas do mundo?', options: ['Suécia', 'Noruega', 'Finlândia', 'Canadá'], correctAnswer: 0, hint: 'Tem mais de 50 mil ilhas' },
  { id: 89, category: 'Geografia', difficulty: 'hard', question: 'Qual é a capital da Letônia?', options: ['Riga', 'Daugavpils', 'Liepaja', 'Jelgava'], correctAnswer: 0, hint: 'É a maior cidade' },
  { id: 90, category: 'Geografia', difficulty: 'hard', question: 'Qual é a capital da Estônia?', options: ['Tallinn', 'Tartu', 'Narva', 'Kohtla-Jarve'], correctAnswer: 0, hint: 'Fica no Báltico' },
];

// Perguntas sobre História
const historyQuestions: QuizQuestion[] = [
  { id: 91, category: 'História', difficulty: 'easy', question: 'Em que ano o Brasil foi descoberto?', options: ['1500', '1492', '1530', '1600'], correctAnswer: 0, hint: 'Foi por Pedro Álvares Cabral' },
  { id: 92, category: 'História', difficulty: 'easy', question: 'Qual foi a primeira capital do Brasil?', options: ['Salvador', 'Rio de Janeiro', 'São Paulo', 'Brasília'], correctAnswer: 0, hint: 'Fica na Bahia' },
  { id: 93, category: 'História', difficulty: 'easy', question: 'Em que ano o Brasil se tornou independente?', options: ['1822', '1820', '1825', '1830'], correctAnswer: 0, hint: 'Foi por Dom Pedro I' },
  { id: 94, category: 'História', difficulty: 'easy', question: 'Qual foi o primeiro presidente do Brasil?', options: ['Deodoro da Fonseca', 'Floriano Peixoto', 'Prudente de Morais', 'Campos Sales'], correctAnswer: 0, hint: 'Foi militar' },
  { id: 95, category: 'História', difficulty: 'easy', question: 'Em que ano terminou a escravidão no Brasil?', options: ['1888', '1880', '1890', '1900'], correctAnswer: 0, hint: 'Foi a Lei Áurea' },
  { id: 96, category: 'História', difficulty: 'easy', question: 'Qual foi a Primeira Guerra Mundial?', options: ['1914-1918', '1910-1920', '1920-1930', '1900-1910'], correctAnswer: 0, hint: 'Começou em 1914' },
  { id: 97, category: 'História', difficulty: 'easy', question: 'Em que ano terminou a Segunda Guerra Mundial?', options: ['1945', '1944', '1946', '1947'], correctAnswer: 0, hint: 'Terminou em 1945' },
  { id: 98, category: 'História', difficulty: 'easy', question: 'Qual foi o primeiro presidente dos Estados Unidos?', options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'James Madison'], correctAnswer: 0, hint: 'Tem seu rosto no dólar' },
  { id: 99, category: 'História', difficulty: 'easy', question: 'Em que ano a Revolução Francesa começou?', options: ['1789', '1780', '1790', '1800'], correctAnswer: 0, hint: 'Começou em 1789' },
  { id: 100, category: 'História', difficulty: 'easy', question: 'Qual foi o Império Romano?', options: ['27 a.C. - 476 d.C.', '100 d.C. - 500 d.C.', '0 - 400 d.C.', '50 d.C. - 450 d.C.'], correctAnswer: 0, hint: 'Durou séculos' },
  { id: 101, category: 'História', difficulty: 'medium', question: 'Qual foi a Revolução Industrial?', options: ['Século XVIII-XIX', 'Século XVI-XVII', 'Século XIX-XX', 'Século XVII-XVIII'], correctAnswer: 0, hint: 'Começou na Inglaterra' },
  { id: 102, category: 'História', difficulty: 'medium', question: 'Em que ano Cristóvão Colombo chegou à América?', options: ['1492', '1490', '1495', '1500'], correctAnswer: 0, hint: 'Foi em 1492' },
  { id: 103, category: 'História', difficulty: 'medium', question: 'Qual foi a Idade Média?', options: ['Século V-XV', 'Século IV-XIV', 'Século VI-XVI', 'Século III-XIII'], correctAnswer: 0, hint: 'Durou cerca de 1000 anos' },
  { id: 104, category: 'História', difficulty: 'medium', question: 'Quem foi Napoleão Bonaparte?', options: ['Imperador da França', 'Rei da Itália', 'General da Espanha', 'Príncipe da Prússia'], correctAnswer: 0, hint: 'Conquistou muitos territórios' },
  { id: 105, category: 'História', difficulty: 'medium', question: 'Em que ano caiu o Muro de Berlim?', options: ['1989', '1987', '1990', '1988'], correctAnswer: 0, hint: 'Caiu em 1989' },
  { id: 106, category: 'História', difficulty: 'hard', question: 'Qual foi a Renascença?', options: ['Século XIV-XVII', 'Século XIII-XVI', 'Século XV-XVIII', 'Século XVI-XIX'], correctAnswer: 0, hint: 'Começou na Itália' },
  { id: 107, category: 'História', difficulty: 'hard', question: 'Em que ano começou a Guerra Fria?', options: ['1945', '1946', '1947', '1948'], correctAnswer: 0, hint: 'Após a Segunda Guerra' },
  { id: 108, category: 'História', difficulty: 'hard', question: 'Qual foi o Iluminismo?', options: ['Século XVII-XVIII', 'Século XVI-XVII', 'Século XVIII-XIX', 'Século XV-XVI'], correctAnswer: 0, hint: 'Movimento intelectual' },
  { id: 109, category: 'História', difficulty: 'hard', question: 'Em que ano terminou a Guerra Fria?', options: ['1989-1991', '1985-1987', '1992-1994', '1988-1990'], correctAnswer: 0, hint: 'Terminou no final dos anos 80' },
  { id: 110, category: 'História', difficulty: 'hard', question: 'Qual foi o Absolutismo?', options: ['Século XVI-XVIII', 'Século XV-XVII', 'Século XVII-XIX', 'Século XIV-XVI'], correctAnswer: 0, hint: 'Poder concentrado no rei' },
];

// Perguntas sobre Português
const portugueseQuestions: QuizQuestion[] = [
  { id: 111, category: 'Português', difficulty: 'easy', question: 'Qual é o sinônimo de "grande"?', options: ['Vasto', 'Pequeno', 'Médio', 'Mínimo'], correctAnswer: 0, hint: 'Significa muito grande' },
  { id: 112, category: 'Português', difficulty: 'easy', question: 'Qual é o antônimo de "quente"?', options: ['Frio', 'Morno', 'Gelado', 'Tépido'], correctAnswer: 0, hint: 'É o oposto' },
  { id: 113, category: 'Português', difficulty: 'easy', question: 'Qual é o plural de "pão"?', options: ['Pães', 'Pans', 'Paos', 'Pãos'], correctAnswer: 0, hint: 'Adicione "es"' },
  { id: 114, category: 'Português', difficulty: 'easy', question: 'Qual é o plural de "irmão"?', options: ['Irmãos', 'Irmans', 'Irmoes', 'Irmaos'], correctAnswer: 0, hint: 'Adicione "s"' },
  { id: 115, category: 'Português', difficulty: 'easy', question: 'Qual é o diminutivo de "casa"?', options: ['Casinha', 'Casita', 'Casela', 'Casete'], correctAnswer: 0, hint: 'Adicione "inha"' },
  { id: 116, category: 'Português', difficulty: 'easy', question: 'Qual é o aumentativo de "livro"?', options: ['Livrão', 'Livrote', 'Livraço', 'Livrasso'], correctAnswer: 0, hint: 'Adicione "ão"' },
  { id: 117, category: 'Português', difficulty: 'easy', question: 'Qual é a classe gramatical de "correr"?', options: ['Verbo', 'Substantivo', 'Adjetivo', 'Advérbio'], correctAnswer: 0, hint: 'É uma ação' },
  { id: 118, category: 'Português', difficulty: 'easy', question: 'Qual é a classe gramatical de "azul"?', options: ['Adjetivo', 'Substantivo', 'Verbo', 'Advérbio'], correctAnswer: 0, hint: 'Descreve qualidade' },
  { id: 119, category: 'Português', difficulty: 'easy', question: 'Qual é a classe gramatical de "mesa"?', options: ['Substantivo', 'Verbo', 'Adjetivo', 'Advérbio'], correctAnswer: 0, hint: 'É um objeto' },
  { id: 120, category: 'Português', difficulty: 'easy', question: 'Qual é a classe gramatical de "rapidamente"?', options: ['Advérbio', 'Verbo', 'Substantivo', 'Adjetivo'], correctAnswer: 0, hint: 'Modifica o verbo' },
  { id: 121, category: 'Português', difficulty: 'medium', question: 'Qual é o sujeito da frase "O gato comeu o rato"?', options: ['O gato', 'o rato', 'comeu', 'O'], correctAnswer: 0, hint: 'Quem realiza a ação' },
  { id: 122, category: 'Português', difficulty: 'medium', question: 'Qual é o predicado da frase "Maria dança bem"?', options: ['dança bem', 'Maria', 'bem', 'dança'], correctAnswer: 0, hint: 'O que se diz do sujeito' },
  { id: 123, category: 'Português', difficulty: 'medium', question: 'Qual é o complemento verbal de "João comeu maçã"?', options: ['maçã', 'João', 'comeu', 'João comeu'], correctAnswer: 0, hint: 'Recebe a ação' },
  { id: 124, category: 'Português', difficulty: 'medium', question: 'Qual é o tipo de oração "Se você estudar, passará"?', options: ['Composta', 'Simples', 'Complexa', 'Mista'], correctAnswer: 0, hint: 'Tem mais de um verbo' },
  { id: 125, category: 'Português', difficulty: 'medium', question: 'Qual é a figura de linguagem em "Aquele homem é um leão"?', options: ['Metáfora', 'Comparação', 'Metonímia', 'Hipérbole'], correctAnswer: 0, hint: 'Comparação implícita' },
  { id: 126, category: 'Português', difficulty: 'hard', question: 'Qual é o tipo de sujeito em "Choveu ontem"?', options: ['Indeterminado', 'Simples', 'Composto', 'Oculto'], correctAnswer: 0, hint: 'Não há sujeito claro' },
  { id: 127, category: 'Português', difficulty: 'hard', question: 'Qual é a função sintática de "com cuidado" em "Ele trabalha com cuidado"?', options: ['Adjunto adverbial', 'Complemento nominal', 'Aposto', 'Vocativo'], correctAnswer: 0, hint: 'Modifica o verbo' },
  { id: 128, category: 'Português', difficulty: 'hard', question: 'Qual é o tipo de período em "Quando chegar, avise-me"?', options: ['Composto por subordinação', 'Composto por coordenação', 'Simples', 'Misto'], correctAnswer: 0, hint: 'Tem uma oração subordinada' },
  { id: 129, category: 'Português', difficulty: 'hard', question: 'Qual é a figura de linguagem em "Morrer de rir"?', options: ['Hipérbole', 'Metáfora', 'Metonímia', 'Ironia'], correctAnswer: 0, hint: 'Exagero' },
  { id: 130, category: 'Português', difficulty: 'hard', question: 'Qual é o tipo de verbo em "João deu um livro a Maria"?', options: ['Bitransitivo', 'Transitivo direto', 'Transitivo indireto', 'Intransitivo'], correctAnswer: 0, hint: 'Tem dois complementos' },
];

// Perguntas sobre Esportes
const sportsQuestions: QuizQuestion[] = [
  { id: 131, category: 'Esportes', difficulty: 'easy', question: 'Quantos jogadores tem um time de futebol em campo?', options: ['11', '10', '12', '9'], correctAnswer: 0, hint: 'Incluindo o goleiro' },
  { id: 132, category: 'Esportes', difficulty: 'easy', question: 'Qual é o esporte mais popular do mundo?', options: ['Futebol', 'Basquete', 'Tênis', 'Críquete'], correctAnswer: 0, hint: 'Tem 11 jogadores por time' },
  { id: 133, category: 'Esportes', difficulty: 'easy', question: 'Quantos pontos vale um gol no futebol?', options: ['1', '2', '3', '0'], correctAnswer: 0, hint: 'É um ponto' },
  { id: 134, category: 'Esportes', difficulty: 'easy', question: 'Qual é a duração de um jogo de futebol?', options: ['90 minutos', '80 minutos', '100 minutos', '60 minutos'], correctAnswer: 0, hint: 'Dois tempos de 45' },
  { id: 135, category: 'Esportes', difficulty: 'easy', question: 'Quantos jogadores tem um time de basquete em campo?', options: ['5', '6', '7', '4'], correctAnswer: 0, hint: 'É menos que futebol' },
  { id: 136, category: 'Esportes', difficulty: 'easy', question: 'Qual é a altura da cesta de basquete?', options: ['3,05 metros', '3 metros', '3,5 metros', '2,5 metros'], correctAnswer: 0, hint: 'É perto de 3 metros' },
  { id: 137, category: 'Esportes', difficulty: 'easy', question: 'Quantos sets tem um jogo de tênis?', options: ['3', '2', '4', '5'], correctAnswer: 0, hint: 'Geralmente 3' },
  { id: 138, category: 'Esportes', difficulty: 'easy', question: 'Qual é o comprimento de uma piscina olímpica?', options: ['50 metros', '40 metros', '60 metros', '30 metros'], correctAnswer: 0, hint: 'É 50' },
  { id: 139, category: 'Esportes', difficulty: 'easy', question: 'Quantas voltas tem uma corrida de 1500 metros na pista?', options: ['3,75', '3', '4', '2,5'], correctAnswer: 0, hint: 'Pista tem 400 metros' },
  { id: 140, category: 'Esportes', difficulty: 'easy', question: 'Qual é o esporte com bola menor?', options: ['Golfe', 'Tênis', 'Badminton', 'Ping-pong'], correctAnswer: 0, hint: 'Tem buraco' },
  { id: 141, category: 'Esportes', difficulty: 'medium', question: 'Quantos Campeonatos Mundiais de Futebol o Brasil ganhou?', options: ['5', '4', '6', '3'], correctAnswer: 0, hint: 'É o maior campeão' },
  { id: 142, category: 'Esportes', difficulty: 'medium', question: 'Em que ano foi a primeira Copa do Mundo?', options: ['1930', '1932', '1928', '1934'], correctAnswer: 0, hint: 'Foi em 1930' },
  { id: 143, category: 'Esportes', difficulty: 'medium', question: 'Qual país ganhou mais Copas do Mundo?', options: ['Brasil', 'Alemanha', 'Itália', 'França'], correctAnswer: 0, hint: 'É o pentacampeão' },
  { id: 144, category: 'Esportes', difficulty: 'medium', question: 'Qual é o maior torneio de tênis do mundo?', options: ['Wimbledon', 'US Open', 'Roland Garros', 'Australian Open'], correctAnswer: 0, hint: 'É na Inglaterra' },
  { id: 145, category: 'Esportes', difficulty: 'medium', question: 'Quantas Olimpíadas o Brasil já sediou?', options: ['1', '2', '0', '3'], correctAnswer: 0, hint: 'Foi em 2016' },
  { id: 146, category: 'Esportes', difficulty: 'hard', question: 'Qual atleta ganhou mais medalhas olímpicas?', options: ['Michael Phelps', 'Usain Bolt', 'Simone Biles', 'Nadia Comaneci'], correctAnswer: 0, hint: 'É um nadador' },
  { id: 147, category: 'Esportes', difficulty: 'hard', question: 'Em que ano Pelé ganhou a Bola de Ouro?', options: ['1970', '1968', '1972', '1966'], correctAnswer: 0, hint: 'Nunca ganhou' },
  { id: 148, category: 'Esportes', difficulty: 'hard', question: 'Qual é o recorde de gols de Pelé na carreira?', options: ['1000', '900', '1100', '800'], correctAnswer: 0, hint: 'É mais de 1000' },
  { id: 149, category: 'Esportes', difficulty: 'hard', question: 'Quantos Campeonatos Mundiais Maradona ganhou?', options: ['1', '2', '0', '3'], correctAnswer: 0, hint: 'Foi em 1986' },
  { id: 150, category: 'Esportes', difficulty: 'hard', question: 'Qual é o recorde de gols de Cristiano Ronaldo?', options: ['850+', '700+', '900+', '600+'], correctAnswer: 0, hint: 'É mais de 800' },
];

// Combinar todas as perguntas
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  ...animeQuestions,
  ...mathQuestions,
  ...scienceQuestions,
  ...geoQuestions,
  ...historyQuestions,
  ...portugueseQuestions,
  ...sportsQuestions,
];

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

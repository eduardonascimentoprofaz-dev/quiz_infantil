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

// Gerar perguntas de Animes (200 perguntas)
const animeQuestions: QuizQuestion[] = [
  // FÁCIL - Animes (50 perguntas)
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
  { id: 16, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Sword Art Online?', options: ['Kazuto Kirigaya', 'Asuna Yuuki', 'Eugeo', 'Alice'], correctAnswer: 0, hint: 'Seu apelido é Kirito' },
  { id: 17, category: 'Animes', difficulty: 'easy', question: 'Em Tokyo Ghoul, qual é o nome do protagonista?', options: ['Ken Kaneki', 'Rize Kamishiro', 'Touka Kirishima', 'Hinami Fueguchi'], correctAnswer: 0, hint: 'Ele se torna um ghoul' },
  { id: 18, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Mob Psycho 100?', options: ['Shigeo Kageyama', 'Reigen Arataka', 'Teruki Hanazawa', 'Ritsu Kageyama'], correctAnswer: 0, hint: 'Seu apelido é Mob' },
  { id: 19, category: 'Animes', difficulty: 'easy', question: 'Em Ergo Proxy, qual é o nome do protagonista?', options: ['Re-l Mayer', 'Proxy One', 'Vincent Law', 'Pino'], correctAnswer: 0, hint: 'Ele é um imortal' },
  { id: 20, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Samurai Champloo?', options: ['Mugen', 'Jin', 'Fuu', 'Kin'], correctAnswer: 0, hint: 'Ele é um samurai' },
  { id: 21, category: 'Animes', difficulty: 'easy', question: 'Em Neon Genesis Evangelion, qual é o nome do protagonista?', options: ['Shinji Ikari', 'Gendo Ikari', 'Misato Katsuragi', 'Rei Ayanami'], correctAnswer: 0, hint: 'Ele pilota um Eva' },
  { id: 22, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Gurren Lagann?', options: ['Simon', 'Kamina', 'Yoko', 'Nia'], correctAnswer: 0, hint: 'Ele é um escavador' },
  { id: 23, category: 'Animes', difficulty: 'easy', question: 'Em Kill la Kill, qual é o nome da protagonista?', options: ['Ryuko Matoi', 'Satsuki Kiryuin', 'Mako Mankanshoku', 'Nonon Jakuzure'], correctAnswer: 0, hint: 'Ela busca vingança' },
  { id: 24, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Psycho-Pass?', options: ['Akane Tsunemori', 'Shinya Kogami', 'Nobuchika Ginoza', 'Yayoi Kunizaki'], correctAnswer: 0, hint: 'Ela é uma inspetora' },
  { id: 25, category: 'Animes', difficulty: 'easy', question: 'Em Parasyte, qual é o nome do protagonista?', options: ['Shinichi Izumi', 'Migi', 'Satomi Nadora', 'Hirokazu Yada'], correctAnswer: 0, hint: 'Ele é infectado por um parasita' },
  { id: 26, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Hellsing?', options: ['Alucard', 'Seras Victoria', 'Integra Hellsing', 'Walter C. Dornez'], correctAnswer: 0, hint: 'Ele é um vampiro' },
  { id: 27, category: 'Animes', difficulty: 'easy', question: 'Em Black Butler, qual é o nome do protagonista?', options: ['Ciel Phantomhive', 'Sebastian Michaelis', 'Grell Sutcliff', 'William T. Spears'], correctAnswer: 0, hint: 'Ele é um jovem nobre' },
  { id: 28, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Puella Magi Madoka Magica?', options: ['Madoka Kaname', 'Homura Akemi', 'Mami Tomoe', 'Kyoko Sakura'], correctAnswer: 0, hint: 'Ela é uma garota mágica' },
  { id: 29, category: 'Animes', difficulty: 'easy', question: 'Em Fate/Stay Night, qual é o nome do protagonista?', options: ['Shirou Emiya', 'Saber', 'Rin Tohsaka', 'Sakura Matou'], correctAnswer: 0, hint: 'Ele é um mago' },
  { id: 30, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Rurouni Kenshin?', options: ['Kenshin Himura', 'Kaoru Kamiya', 'Sanosuke Sagara', 'Yahiko Myojin'], correctAnswer: 0, hint: 'Ele é um samurai' },
  { id: 31, category: 'Animes', difficulty: 'easy', question: 'Em Trigun, qual é o nome do protagonista?', options: ['Vash the Stampede', 'Knives', 'Meryl Stryfe', 'Milly Thompson'], correctAnswer: 0, hint: 'Ele é um gunman' },
  { id: 32, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Outlaw Star?', options: ['Gene Starwind', 'Jim Hawking', 'Melfina', 'Aisha Clanclan'], correctAnswer: 0, hint: 'Ele é um caçador de tesouro' },
  { id: 33, category: 'Animes', difficulty: 'easy', question: 'Em Inuyasha, qual é o nome do protagonista?', options: ['Inuyasha', 'Kagome Higurashi', 'Miroku', 'Sango'], correctAnswer: 0, hint: 'Ele é um meio-demônio' },
  { id: 34, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Ranma 1/2?', options: ['Ranma Saotome', 'Akane Tendo', 'Shampoo', 'Ryoga Hibiki'], correctAnswer: 0, hint: 'Ele muda de forma' },
  { id: 35, category: 'Animes', difficulty: 'easy', question: 'Em Urusei Yatsura, qual é o nome do protagonista?', options: ['Ataru Moroboshi', 'Lum', 'Shinobu Miyake', 'Mendou Shutaro'], correctAnswer: 0, hint: 'Ele é um adolescente' },
  { id: 36, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Maison Ikkoku?', options: ['Yusaku Godai', 'Kyoko Otonashi', 'Mitaka Asahina', 'Ibuki Yagami'], correctAnswer: 0, hint: 'Ele é um estudante' },
  { id: 37, category: 'Animes', difficulty: 'easy', question: 'Em Kimagure Orange Road, qual é o nome do protagonista?', options: ['Kyosuke Kasuga', 'Madoka Ayukawa', 'Hikaru Hiyama', 'Suzie Yamada'], correctAnswer: 0, hint: 'Ele é um adolescente' },
  { id: 38, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Marmalade Boy?', options: ['Miki Koishikawa', 'Yuu Matsuura', 'Ginta Suou', 'Arashi Kujo'], correctAnswer: 0, hint: 'Ela é uma garota' },
  { id: 39, category: 'Animes', difficulty: 'easy', question: 'Em Cardcaptor Sakura, qual é o nome da protagonista?', options: ['Sakura Kinomoto', 'Syaoran Li', 'Tomoyo Daidouji', 'Kero'], correctAnswer: 0, hint: 'Ela captura cartas' },
  { id: 40, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome da protagonista de Magical Girl Lyrical Nanoha?', options: ['Nanoha Takamachi', 'Fate Testarossa', 'Hayate Yagami', 'Arf'], correctAnswer: 0, hint: 'Ela é uma garota mágica' },
  { id: 41, category: 'Animes', difficulty: 'easy', question: 'Em Azuki-chan, qual é o nome da protagonista?', options: ['Azuki Azusa', 'Taiga Aisaka', 'Minori Kushieda', 'Ami Kawamura'], correctAnswer: 0, hint: 'Ela é uma garota' },
  { id: 42, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome da protagonista de Haibane Renmei?', options: ['Rakka', 'Nemu', 'Kurogane', 'Washi'], correctAnswer: 0, hint: 'Ela tem asas' },
  { id: 43, category: 'Animes', difficulty: 'easy', question: 'Em Lain, qual é o nome da protagonista?', options: ['Lain Iwakura', 'Alice Mizuki', 'Arisu Mizuki', 'Yomoda Takashiro'], correctAnswer: 0, hint: 'Ela é uma garota' },
  { id: 44, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Texhnolyze?', options: ['Ichise', 'Ran', 'Onishi', 'Yoshii'], correctAnswer: 0, hint: 'Ele é um lutador' },
  { id: 45, category: 'Animes', difficulty: 'easy', question: 'Em Boogiepop Phantom, qual é o nome do protagonista?', options: ['Boogiepop', 'Touka Miyashita', 'Natsume', 'Kirima Shosuke'], correctAnswer: 0, hint: 'Ele é um vigilante' },
  { id: 46, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Witch Hunter Robin?', options: ['Robin Sena', 'Amon', 'Doujima Ken', 'Dojima Haruka'], correctAnswer: 0, hint: 'Ela é uma bruxa' },
  { id: 47, category: 'Animes', difficulty: 'easy', question: 'Em Tsubasa Reservoir Chronicle, qual é o nome do protagonista?', options: ['Syaoran', 'Sakura', 'Kurogane', 'Fai D. Flourite'], correctAnswer: 0, hint: 'Ele viaja entre mundos' },
  { id: 48, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de xxxHolic?', options: ['Yuuko Ichihara', 'Watanuki Kimihiro', 'Doumeki Shizuka', 'Himawari Kunogi'], correctAnswer: 0, hint: 'Ela é uma bruxa' },
  { id: 49, category: 'Animes', difficulty: 'easy', question: 'Em Chobits, qual é o nome do protagonista?', options: ['Hideki Motosuwa', 'Chii', 'Yumi Ohzora', 'Minoru Kokubunji'], correctAnswer: 0, hint: 'Ele encontra um androide' },
  { id: 50, category: 'Animes', difficulty: 'easy', question: 'Qual é o nome do protagonista de Angelic Layer?', options: ['Misaki Inoue', 'Hikaru Shidou', 'Umi Ryuuzaki', 'Fuu Hououji'], correctAnswer: 0, hint: 'Ela controla anjos' },

  // MÉDIO - Animes (75 perguntas)
  { id: 51, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do Titã Colossal em Attack on Titan?', options: ['Bertholdt Hoover', 'Reiner Braun', 'Annie Leonhart', 'Eren Yeager'], correctAnswer: 0, hint: 'Ele é um dos Titãs Armados' },
  { id: 52, category: 'Animes', difficulty: 'medium', question: 'Em My Hero Academia, qual é o nome do vilão principal?', options: ['All For One', 'Shigaraki Tomura', 'Dabi', 'Twice'], correctAnswer: 0, hint: 'Ele dá poderes a Shigaraki' },
  { id: 53, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome da organização em Death Note?', options: ['Kira', 'L', 'Near', 'Mello'], correctAnswer: 0, hint: 'Light Yagami é Kira' },
  { id: 54, category: 'Animes', difficulty: 'medium', question: 'Em Demon Slayer, qual é o nome do Espírito Maligno mais poderoso?', options: ['Muzan Kibutsuji', 'Rui', 'Enmu', 'Akaza'], correctAnswer: 0, hint: 'Ele criou os Doze Kizuki' },
  { id: 55, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do professor de Midoriya em My Hero Academia?', options: ['All Might', 'Aizawa', 'Present Mic', 'Midnight'], correctAnswer: 0, hint: 'Ele é o herói número 1' },
  { id: 56, category: 'Animes', difficulty: 'medium', question: 'Em Naruto, qual é o nome do Hokage original?', options: ['Hashirama Senju', 'Tobirama Senju', 'Hiruzen Sarutobi', 'Minato Namikaze'], correctAnswer: 0, hint: 'Ele é o primeiro Hokage' },
  { id: 57, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do Pokémon lendário em Pokémon?', options: ['Mewtwo', 'Articuno', 'Zapdos', 'Moltres'], correctAnswer: 0, hint: 'Ele é criado por humanos' },
  { id: 58, category: 'Animes', difficulty: 'medium', question: 'Em One Piece, qual é o nome do imperador pirata?', options: ['Gol D. Roger', 'Whitebeard', 'Kaido', 'Big Mom'], correctAnswer: 0, hint: 'Ele era o Rei dos Piratas' },
  { id: 59, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão principal em Bleach?', options: ['Sosuke Aizen', 'Gin Ichimaru', 'Kaname Tosen', 'Ulquiorra'], correctAnswer: 0, hint: 'Ele é um Capitão da Soul Society' },
  { id: 60, category: 'Animes', difficulty: 'medium', question: 'Em Jujutsu Kaisen, qual é o nome do rei das maldições?', options: ['Sukuna', 'Mahito', 'Jogo', 'Hanami'], correctAnswer: 0, hint: 'Ele está dentro de Yuji' },
  { id: 61, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Sword Art Online?', options: ['Akihiko Kayaba', 'Nobuyuki Sugou', 'Gabriel Miller', 'Quinella'], correctAnswer: 0, hint: 'Ele criou o SAO' },
  { id: 62, category: 'Animes', difficulty: 'medium', question: 'Em Tokyo Ghoul, qual é o nome do líder da Anteiku?', options: ['Yoshimura', 'Rize Kamishiro', 'Eto Yoshimura', 'Arima Kishou'], correctAnswer: 0, hint: 'Ele é o dono da cafeteria' },
  { id: 63, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Mob Psycho 100?', options: ['Arataka Reigen', 'Claw', 'Toichiro Suzuki', 'Serizawa Katsuya'], correctAnswer: 0, hint: 'É uma organização' },
  { id: 64, category: 'Animes', difficulty: 'medium', question: 'Em Ergo Proxy, qual é o nome do Proxy?', options: ['Re-l Mayer', 'Proxy One', 'Vincent Law', 'Pino'], correctAnswer: 0, hint: 'Ele é um ser poderoso' },
  { id: 65, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Samurai Champloo?', options: ['Mugen', 'Jin', 'Fuu', 'Karute Kin'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 66, category: 'Animes', difficulty: 'medium', question: 'Em Neon Genesis Evangelion, qual é o nome do vilão?', options: ['Gendo Ikari', 'Shinji Ikari', 'Misato Katsuragi', 'Rei Ayanami'], correctAnswer: 0, hint: 'Ele é o pai de Shinji' },
  { id: 67, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Gurren Lagann?', options: ['Lordgenome', 'Kamina', 'Yoko', 'Nia'], correctAnswer: 0, hint: 'Ele governa a galáxia' },
  { id: 68, category: 'Animes', difficulty: 'medium', question: 'Em Kill la Kill, qual é o nome do vilão?', options: ['Satsuki Kiryuin', 'Ryuko Matoi', 'Mako Mankanshoku', 'Nonon Jakuzure'], correctAnswer: 0, hint: 'Ela é a antagonista' },
  { id: 69, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Psycho-Pass?', options: ['Shogo Makishima', 'Akane Tsunemori', 'Shinya Kogami', 'Nobuchika Ginoza'], correctAnswer: 0, hint: 'Ele é um criminoso' },
  { id: 70, category: 'Animes', difficulty: 'medium', question: 'Em Parasyte, qual é o nome do vilão?', options: ['Migi', 'Shinichi Izumi', 'Satomi Nadora', 'Hirokazu Yada'], correctAnswer: 0, hint: 'Ele é um parasita' },
  { id: 71, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Hellsing?', options: ['Alucard', 'Seras Victoria', 'Integra Hellsing', 'Walter C. Dornez'], correctAnswer: 0, hint: 'Ele é um vampiro' },
  { id: 72, category: 'Animes', difficulty: 'medium', question: 'Em Black Butler, qual é o nome do vilão?', options: ['Sebastian Michaelis', 'Ciel Phantomhive', 'Grell Sutcliff', 'William T. Spears'], correctAnswer: 0, hint: 'Ele é um demônio' },
  { id: 73, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Puella Magi Madoka Magica?', options: ['Kyubey', 'Madoka Kaname', 'Homura Akemi', 'Mami Tomoe'], correctAnswer: 0, hint: 'Ele é um gato' },
  { id: 74, category: 'Animes', difficulty: 'medium', question: 'Em Fate/Stay Night, qual é o nome do vilão?', options: ['Gilgamesh', 'Shirou Emiya', 'Saber', 'Rin Tohsaka'], correctAnswer: 0, hint: 'Ele é um rei' },
  { id: 75, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Rurouni Kenshin?', options: ['Enishi Yukishiro', 'Kenshin Himura', 'Kaoru Kamiya', 'Sanosuke Sagara'], correctAnswer: 0, hint: 'Ele busca vingança' },
  { id: 76, category: 'Animes', difficulty: 'medium', question: 'Em Trigun, qual é o nome do vilão?', options: ['Knives', 'Vash the Stampede', 'Meryl Stryfe', 'Milly Thompson'], correctAnswer: 0, hint: 'Ele é o irmão de Vash' },
  { id: 77, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Outlaw Star?', options: ['Hilda', 'Gene Starwind', 'Jim Hawking', 'Melfina'], correctAnswer: 0, hint: 'Ela é uma antagonista' },
  { id: 78, category: 'Animes', difficulty: 'medium', question: 'Em Inuyasha, qual é o nome do vilão?', options: ['Naraku', 'Inuyasha', 'Kagome Higurashi', 'Miroku'], correctAnswer: 0, hint: 'Ele é um demônio' },
  { id: 79, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Ranma 1/2?', options: ['Happosai', 'Ranma Saotome', 'Akane Tendo', 'Shampoo'], correctAnswer: 0, hint: 'Ele é um mestre' },
  { id: 80, category: 'Animes', difficulty: 'medium', question: 'Em Urusei Yatsura, qual é o nome do vilão?', options: ['Ataru Moroboshi', 'Lum', 'Shinobu Miyake', 'Mendou Shutaro'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 81, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Maison Ikkoku?', options: ['Mitaka Asahina', 'Yusaku Godai', 'Kyoko Otonashi', 'Ibuki Yagami'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 82, category: 'Animes', difficulty: 'medium', question: 'Em Kimagure Orange Road, qual é o nome do vilão?', options: ['Kyosuke Kasuga', 'Madoka Ayukawa', 'Hikaru Hiyama', 'Suzie Yamada'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 83, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Marmalade Boy?', options: ['Ginta Suou', 'Miki Koishikawa', 'Yuu Matsuura', 'Arashi Kujo'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 84, category: 'Animes', difficulty: 'medium', question: 'Em Cardcaptor Sakura, qual é o nome do vilão?', options: ['Eriol Hiiragizawa', 'Sakura Kinomoto', 'Syaoran Li', 'Tomoyo Daidouji'], correctAnswer: 0, hint: 'Ele é um mago' },
  { id: 85, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Magical Girl Lyrical Nanoha?', options: ['Precia Testarossa', 'Nanoha Takamachi', 'Fate Testarossa', 'Hayate Yagami'], correctAnswer: 0, hint: 'Ela é a mãe de Fate' },
  { id: 86, category: 'Animes', difficulty: 'medium', question: 'Em Azuki-chan, qual é o nome do vilão?', options: ['Taiga Aisaka', 'Azuki Azusa', 'Minori Kushieda', 'Ami Kawamura'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 87, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Haibane Renmei?', options: ['Kurogane', 'Rakka', 'Nemu', 'Washi'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 88, category: 'Animes', difficulty: 'medium', question: 'Em Lain, qual é o nome do vilão?', options: ['Yomoda Takashiro', 'Lain Iwakura', 'Alice Mizuki', 'Arisu Mizuki'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 89, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Texhnolyze?', options: ['Onishi', 'Ichise', 'Ran', 'Yoshii'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 90, category: 'Animes', difficulty: 'medium', question: 'Em Boogiepop Phantom, qual é o nome do vilão?', options: ['Boogiepop', 'Touka Miyashita', 'Natsume', 'Kirima Shosuke'], correctAnswer: 0, hint: 'Ele é um vigilante' },
  { id: 91, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Witch Hunter Robin?', options: ['Amon', 'Robin Sena', 'Doujima Ken', 'Dojima Haruka'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 92, category: 'Animes', difficulty: 'medium', question: 'Em Tsubasa Reservoir Chronicle, qual é o nome do vilão?', options: ['Fei Wang Reed', 'Syaoran', 'Sakura', 'Kurogane'], correctAnswer: 0, hint: 'Ele é um mago' },
  { id: 93, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em xxxHolic?', options: ['Yuuko Ichihara', 'Watanuki Kimihiro', 'Doumeki Shizuka', 'Himawari Kunogi'], correctAnswer: 0, hint: 'Ela é uma bruxa' },
  { id: 94, category: 'Animes', difficulty: 'medium', question: 'Em Chobits, qual é o nome do vilão?', options: ['Minoru Kokubunji', 'Hideki Motosuwa', 'Chii', 'Yumi Ohzora'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 95, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Angelic Layer?', options: ['Hikaru Shidou', 'Misaki Inoue', 'Umi Ryuuzaki', 'Fuu Hououji'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 96, category: 'Animes', difficulty: 'medium', question: 'Em Dragon Ball, qual é o nome do vilão mais poderoso?', options: ['Majin Buu', 'Cell', 'Frieza', 'Vegeta'], correctAnswer: 0, hint: 'Ele é rosa' },
  { id: 97, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Pokémon?', options: ['Giovanni', 'Ash Ketchum', 'Misty', 'Brock'], correctAnswer: 0, hint: 'Ele lidera a Equipe Rocket' },
  { id: 98, category: 'Animes', difficulty: 'medium', question: 'Em Sailor Moon, qual é o nome do vilão?', options: ['Queen Beryl', 'Usagi Tsukino', 'Ami Mizuno', 'Rei Hino'], correctAnswer: 0, hint: 'Ela é uma rainha' },
  { id: 99, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Digimon?', options: ['Apocalymon', 'Tai Kamiya', 'Agumon', 'Izzy Izumi'], correctAnswer: 0, hint: 'Ele é um demônio digital' },
  { id: 100, category: 'Animes', difficulty: 'medium', question: 'Em Beyblade, qual é o nome do vilão?', options: ['Tyson Granger', 'Max Tate', 'Ray Kon', 'Kenny'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 101, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Yu-Gi-Oh?', options: ['Seto Kaiba', 'Yugi Muto', 'Joey Wheeler', 'Tristan Taylor'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 102, category: 'Animes', difficulty: 'medium', question: 'Em Naruto Shippuden, qual é o nome do vilão principal?', options: ['Madara Uchiha', 'Naruto Uzumaki', 'Sasuke Uchiha', 'Kakashi Hatake'], correctAnswer: 0, hint: 'Ele é um Uchiha' },
  { id: 103, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em One Piece Marineford?', options: ['Akainu', 'Luffy', 'Zoro', 'Nami'], correctAnswer: 0, hint: 'Ele é um Almirante' },
  { id: 104, category: 'Animes', difficulty: 'medium', question: 'Em Bleach, qual é o nome do vilão final?', options: ['Aizen Sosuke', 'Ichigo Kurosaki', 'Rukia Kuchiki', 'Orihime Inoue'], correctAnswer: 0, hint: 'Ele é um Capitão' },
  { id: 105, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Jujutsu Kaisen 0?', options: ['Geto Suguru', 'Yuji Itadori', 'Megumi Fushiguro', 'Nobara Kugisaki'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 106, category: 'Animes', difficulty: 'medium', question: 'Em Attack on Titan, qual é o nome do vilão final?', options: ['Eren Yeager', 'Reiner Braun', 'Bertholdt Hoover', 'Annie Leonhart'], correctAnswer: 0, hint: 'Ele é o protagonista' },
  { id: 107, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em My Hero Academia Season 5?', options: ['Shigaraki Tomura', 'All Might', 'Midoriya Izuku', 'Bakugo Katsuki'], correctAnswer: 0, hint: 'Ele é um vilão' },
  { id: 108, category: 'Animes', difficulty: 'medium', question: 'Em Demon Slayer, qual é o nome do Hashira mais forte?', options: ['Giyu Tomioka', 'Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma'], correctAnswer: 0, hint: 'Ele é um Hashira' },
  { id: 109, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Sword Art Online Alicization?', options: ['Quinella', 'Kazuto Kirigaya', 'Asuna Yuuki', 'Eugeo'], correctAnswer: 0, hint: 'Ela é uma antagonista' },
  { id: 110, category: 'Animes', difficulty: 'medium', question: 'Em Tokyo Ghoul, qual é o nome do vilão principal?', options: ['Kichimura Washuu', 'Ken Kaneki', 'Rize Kamishiro', 'Touka Kirishima'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 111, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Mob Psycho 100 Season 2?', options: ['Toichiro Suzuki', 'Shigeo Kageyama', 'Reigen Arataka', 'Teruki Hanazawa'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 112, category: 'Animes', difficulty: 'medium', question: 'Em Ergo Proxy, qual é o nome do vilão?', options: ['Vincent Law', 'Re-l Mayer', 'Proxy One', 'Pino'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 113, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Samurai Champloo Final?', options: ['Karute Kin', 'Mugen', 'Jin', 'Fuu'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 114, category: 'Animes', difficulty: 'medium', question: 'Em Neon Genesis Evangelion, qual é o nome do vilão final?', options: ['Third Impact', 'Gendo Ikari', 'Shinji Ikari', 'Misato Katsuragi'], correctAnswer: 0, hint: 'É um evento' },
  { id: 115, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Gurren Lagann Final?', options: ['Anti-Spiral', 'Lordgenome', 'Kamina', 'Yoko'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 116, category: 'Animes', difficulty: 'medium', question: 'Em Kill la Kill Final, qual é o nome do vilão?', options: ['Ragyo Kiryuin', 'Satsuki Kiryuin', 'Ryuko Matoi', 'Mako Mankanshoku'], correctAnswer: 0, hint: 'Ela é a mãe' },
  { id: 117, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Psycho-Pass Season 2?', options: ['Kirito Kamui', 'Shogo Makishima', 'Akane Tsunemori', 'Shinya Kogami'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 118, category: 'Animes', difficulty: 'medium', question: 'Em Parasyte Final, qual é o nome do vilão?', options: ['Gotou', 'Shinichi Izumi', 'Migi', 'Satomi Nadora'], correctAnswer: 0, hint: 'Ele é um parasita' },
  { id: 119, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Hellsing Ultimate?', options: ['Millennium', 'Alucard', 'Seras Victoria', 'Integra Hellsing'], correctAnswer: 0, hint: 'É uma organização' },
  { id: 120, category: 'Animes', difficulty: 'medium', question: 'Em Black Butler Season 2, qual é o nome do vilão?', options: ['Claude Faustus', 'Ciel Phantomhive', 'Sebastian Michaelis', 'Grell Sutcliff'], correctAnswer: 0, hint: 'Ele é um demônio' },
  { id: 121, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Puella Magi Madoka Magica Rebellion?', options: ['Homura Akemi', 'Madoka Kaname', 'Kyubey', 'Mami Tomoe'], correctAnswer: 0, hint: 'Ela é uma antagonista' },
  { id: 122, category: 'Animes', difficulty: 'medium', question: 'Em Fate/Stay Night Heaven\'s Feel, qual é o nome do vilão?', options: ['Kama', 'Shirou Emiya', 'Saber', 'Rin Tohsaka'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 123, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Rurouni Kenshin Kyoto Arc?', options: ['Makoto Shishio', 'Kenshin Himura', 'Kaoru Kamiya', 'Sanosuke Sagara'], correctAnswer: 0, hint: 'Ele é um antagonista' },
  { id: 124, category: 'Animes', difficulty: 'medium', question: 'Em Trigun Maximum, qual é o nome do vilão?', options: ['Knives', 'Vash the Stampede', 'Meryl Stryfe', 'Milly Thompson'], correctAnswer: 0, hint: 'Ele é o irmão de Vash' },
  { id: 125, category: 'Animes', difficulty: 'medium', question: 'Qual é o nome do vilão em Outlaw Star Final?', options: ['Hilda', 'Gene Starwind', 'Jim Hawking', 'Melfina'], correctAnswer: 0, hint: 'Ela é uma antagonista' },

  // DIFÍCIL - Animes (75 perguntas)
  { id: 126, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome completo do protagonista de Naruto?', options: ['Naruto Uzumaki', 'Naruto Namikaze', 'Naruto Senju', 'Naruto Uchiha'], correctAnswer: 0, hint: 'É seu nome verdadeiro' },
  { id: 127, category: 'Animes', difficulty: 'hard', question: 'Em Attack on Titan, qual é o nome real de Eren?', options: ['Eren Yeager', 'Eren Kruger', 'Eren Jaeger', 'Eren Titan'], correctAnswer: 0, hint: 'É seu nome de nascimento' },
  { id: 128, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do Shinigami em Death Note?', options: ['Ryuk', 'Rem', 'Sidoh', 'Gelus'], correctAnswer: 0, hint: 'Ele é o dono do Death Note' },
  { id: 129, category: 'Animes', difficulty: 'hard', question: 'Em Demon Slayer, qual é o nome do líder dos Doze Kizuki?', options: ['Muzan Kibutsuji', 'Kokushibo', 'Doma', 'Akaza'], correctAnswer: 0, hint: 'Ele é o mais poderoso' },
  { id: 130, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do professor de Ichigo em Bleach?', options: ['Kisuke Urahara', 'Genryusai Shigekuni', 'Shunsui Kyoraku', 'Jushiro Ukitake'], correctAnswer: 0, hint: 'Ele é o dono da loja' },
  { id: 131, category: 'Animes', difficulty: 'hard', question: 'Em Jujutsu Kaisen, qual é o nome do diretor da escola?', options: ['Masamichi Yaga', 'Satoru Gojo', 'Yuji Itadori', 'Megumi Fushiguro'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 132, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Pokémon no anime?', options: ['Professor Oak', 'Ash Ketchum', 'Misty', 'Brock'], correctAnswer: 0, hint: 'Ele é um professor' },
  { id: 133, category: 'Animes', difficulty: 'hard', question: 'Em One Piece, qual é o nome do capitão dos Piratas do Chapéu de Palha?', options: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp'], correctAnswer: 0, hint: 'Ele quer ser Rei dos Piratas' },
  { id: 134, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de My Hero Academia?', options: ['Kohei Horikoshi', 'Eiichiro Oda', 'Masashi Kishimoto', 'Tite Kubo'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 135, category: 'Animes', difficulty: 'hard', question: 'Em Sword Art Online, qual é o nome do jogo?', options: ['Sword Art Online', 'ALfheim Online', 'Gun Gale Online', 'Underworld'], correctAnswer: 0, hint: 'É um VRMMO' },
  { id: 136, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do estúdio que produziu Neon Genesis Evangelion?', options: ['Gainax', 'Studio Ghibli', 'Toei Animation', 'Madhouse'], correctAnswer: 0, hint: 'É um estúdio famoso' },
  { id: 137, category: 'Animes', difficulty: 'hard', question: 'Em Tokyo Ghoul, qual é o nome da organização de Kaneki?', options: ['Anteiku', 'Aogiri Tree', 'Amon\'s Squad', 'CCG'], correctAnswer: 0, hint: 'É uma cafeteria' },
  { id: 138, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do mangaka de Mob Psycho 100?', options: ['ONE', 'Masashi Kishimoto', 'Eiichiro Oda', 'Tite Kubo'], correctAnswer: 0, hint: 'Ele é o criador' },
  { id: 139, category: 'Animes', difficulty: 'hard', question: 'Em Ergo Proxy, qual é o nome da cidade?', options: ['Romdeau', 'Tokyo', 'New York', 'Paris'], correctAnswer: 0, hint: 'É uma cidade' },
  { id: 140, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Samurai Champloo?', options: ['Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa', 'Kunihiko Ikuhara'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 141, category: 'Animes', difficulty: 'hard', question: 'Em Neon Genesis Evangelion, qual é o nome da organização?', options: ['NERV', 'SEELE', 'GEHIRN', 'ADAM'], correctAnswer: 0, hint: 'É a organização principal' },
  { id: 142, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Gurren Lagann?', options: ['Hiroyuki Imaishi', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 143, category: 'Animes', difficulty: 'hard', question: 'Em Kill la Kill, qual é o nome da escola?', options: ['Honnouji Academy', 'Karasuno High School', 'Kuoh Academy', 'Ouran High School'], correctAnswer: 0, hint: 'É uma escola' },
  { id: 144, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Psycho-Pass?', options: ['Naoyoshi Shiotani', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 145, category: 'Animes', difficulty: 'hard', question: 'Em Parasyte, qual é o nome do planeta de onde vieram os parasitas?', options: ['Desconhecido', 'Terra', 'Marte', 'Vênus'], correctAnswer: 0, hint: 'É desconhecido' },
  { id: 146, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Hellsing?', options: ['Akinori Takeda', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 147, category: 'Animes', difficulty: 'hard', question: 'Em Black Butler, qual é o nome do contrato?', options: ['Faustian Contract', 'Devil\'s Contract', 'Soul Contract', 'Demon Deal'], correctAnswer: 0, hint: 'É um contrato' },
  { id: 148, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Puella Magi Madoka Magica?', options: ['Akiyuki Shinbo', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 149, category: 'Animes', difficulty: 'hard', question: 'Em Fate/Stay Night, qual é o nome do ritual?', options: ['Holy Grail War', 'Servant Battle', 'Magic War', 'Master Duel'], correctAnswer: 0, hint: 'É um ritual' },
  { id: 150, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Rurouni Kenshin?', options: ['Kazuhiro Furuhashi', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 151, category: 'Animes', difficulty: 'hard', question: 'Em Trigun, qual é o nome do planeta?', options: ['Gunsmoke', 'Earth', 'Mars', 'Venus'], correctAnswer: 0, hint: 'É um planeta' },
  { id: 152, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Outlaw Star?', options: ['Takao Kato', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 153, category: 'Animes', difficulty: 'hard', question: 'Em Inuyasha, qual é o nome do período?', options: ['Sengoku Period', 'Edo Period', 'Meiji Period', 'Taisho Period'], correctAnswer: 0, hint: 'É um período histórico' },
  { id: 154, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Ranma 1/2?', options: ['Tsutomu Shibayama', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 155, category: 'Animes', difficulty: 'hard', question: 'Em Urusei Yatsura, qual é o nome da raça de Lum?', options: ['Oni', 'Demon', 'Devil', 'Spirit'], correctAnswer: 0, hint: 'É uma raça' },
  { id: 156, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Maison Ikkoku?', options: ['Kazuo Yamazaki', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 157, category: 'Animes', difficulty: 'hard', question: 'Em Kimagure Orange Road, qual é o nome da série?', options: ['Kimagure Orange Road', 'Ranma 1/2', 'Urusei Yatsura', 'Maison Ikkoku'], correctAnswer: 0, hint: 'É o título' },
  { id: 158, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Marmalade Boy?', options: ['Yoichi Miyaji', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 159, category: 'Animes', difficulty: 'hard', question: 'Em Cardcaptor Sakura, qual é o nome do livro?', options: ['Clow Book', 'Sakura Book', 'Magic Book', 'Card Book'], correctAnswer: 0, hint: 'É um livro' },
  { id: 160, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Magical Girl Lyrical Nanoha?', options: ['Akiyuki Shinbo', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 161, category: 'Animes', difficulty: 'hard', question: 'Em Azuki-chan, qual é o nome da série?', options: ['Azuki-chan', 'Toradora', 'Clannad', 'Angel Beats'], correctAnswer: 0, hint: 'É o título' },
  { id: 162, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Haibane Renmei?', options: ['Tomokazu Tokoro', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 163, category: 'Animes', difficulty: 'hard', question: 'Em Lain, qual é o nome da série?', options: ['Serial Experiments Lain', 'Neon Genesis Evangelion', 'Ergo Proxy', 'Texhnolyze'], correctAnswer: 0, hint: 'É o título' },
  { id: 164, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Texhnolyze?', options: ['Hiroshi Hamasaki', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 165, category: 'Animes', difficulty: 'hard', question: 'Em Boogiepop Phantom, qual é o nome da série?', options: ['Boogiepop Phantom', 'Boogiepop Overdrive', 'Boogiepop Doesn\'t Laugh', 'Boogiepop Synthesizer'], correctAnswer: 0, hint: 'É o título' },
  { id: 166, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Witch Hunter Robin?', options: ['Tomohiko Itou', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 167, category: 'Animes', difficulty: 'hard', question: 'Em Tsubasa Reservoir Chronicle, qual é o nome da série?', options: ['Tsubasa Reservoir Chronicle', 'xxxHolic', 'Cardcaptor Sakura', 'Chobits'], correctAnswer: 0, hint: 'É o título' },
  { id: 168, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de xxxHolic?', options: ['Tsutomu Mizushima', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 169, category: 'Animes', difficulty: 'hard', question: 'Em Chobits, qual é o nome da série?', options: ['Chobits', 'Angelic Layer', 'Cardcaptor Sakura', 'Magical Girl Lyrical Nanoha'], correctAnswer: 0, hint: 'É o título' },
  { id: 170, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do diretor de Angelic Layer?', options: ['Yoshitaka Fujimoto', 'Shinichiro Watanabe', 'Satoshi Kon', 'Masaaki Yuasa'], correctAnswer: 0, hint: 'Ele é o diretor' },
  { id: 171, category: 'Animes', difficulty: 'hard', question: 'Em Dragon Ball, qual é o nome do torneio?', options: ['World Martial Arts Tournament', 'Tenkaichi Budokai', 'Tournament of Power', 'Martial Arts Tournament'], correctAnswer: 0, hint: 'É um torneio' },
  { id: 172, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Dragon Ball?', options: ['Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto', 'Tite Kubo'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 173, category: 'Animes', difficulty: 'hard', question: 'Em Sailor Moon, qual é o nome da organização?', options: ['Dark Kingdom', 'Black Moon', 'Death Busters', 'Shadow Galactica'], correctAnswer: 0, hint: 'É uma organização' },
  { id: 174, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Sailor Moon?', options: ['Naoko Takeuchi', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ela é a mangaka' },
  { id: 175, category: 'Animes', difficulty: 'hard', question: 'Em Digimon, qual é o nome do mundo digital?', options: ['Digital World', 'Cyberspace', 'Virtual World', 'Digital Realm'], correctAnswer: 0, hint: 'É um mundo' },
  { id: 176, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Digimon?', options: ['Akiyoshi Hongo', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o criador' },
  { id: 177, category: 'Animes', difficulty: 'hard', question: 'Em Beyblade, qual é o nome do torneio?', options: ['Beyblade Tournament', 'World Championship', 'Blading Tournament', 'Beyblading Championship'], correctAnswer: 0, hint: 'É um torneio' },
  { id: 178, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Beyblade?', options: ['Takao Aoki', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o criador' },
  { id: 179, category: 'Animes', difficulty: 'hard', question: 'Em Yu-Gi-Oh, qual é o nome do jogo?', options: ['Duel Monsters', 'Trading Card Game', 'Card Game', 'Monster Battle'], correctAnswer: 0, hint: 'É um jogo' },
  { id: 180, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Yu-Gi-Oh?', options: ['Kazuki Takahashi', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 181, category: 'Animes', difficulty: 'hard', question: 'Em Naruto, qual é o nome do clã mais poderoso?', options: ['Uchiha Clan', 'Senju Clan', 'Hyuga Clan', 'Uzumaki Clan'], correctAnswer: 0, hint: 'É um clã' },
  { id: 182, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Naruto?', options: ['Masashi Kishimoto', 'Akira Toriyama', 'Eiichiro Oda', 'Tite Kubo'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 183, category: 'Animes', difficulty: 'hard', question: 'Em One Piece, qual é o nome do tesouro?', options: ['One Piece', 'Treasure', 'Gold', 'Riches'], correctAnswer: 0, hint: 'É o tesouro' },
  { id: 184, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de One Piece?', options: ['Eiichiro Oda', 'Akira Toriyama', 'Masashi Kishimoto', 'Tite Kubo'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 185, category: 'Animes', difficulty: 'hard', question: 'Em Bleach, qual é o nome da organização?', options: ['Soul Society', 'Hueco Mundo', 'Gotei 13', 'Seireitei'], correctAnswer: 0, hint: 'É uma organização' },
  { id: 186, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Bleach?', options: ['Tite Kubo', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 187, category: 'Animes', difficulty: 'hard', question: 'Em Jujutsu Kaisen, qual é o nome da organização?', options: ['Jujutsu Society', 'Jujutsu High', 'Tokyo Jujutsu High', 'Jujutsu School'], correctAnswer: 0, hint: 'É uma organização' },
  { id: 188, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Jujutsu Kaisen?', options: ['Gege Akutami', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 189, category: 'Animes', difficulty: 'hard', question: 'Em Attack on Titan, qual é o nome da organização?', options: ['Survey Corps', 'Military Police', 'Garrison', 'Recon Corps'], correctAnswer: 0, hint: 'É uma organização' },
  { id: 190, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Attack on Titan?', options: ['Hajime Isayama', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 191, category: 'Animes', difficulty: 'hard', question: 'Em My Hero Academia, qual é o nome da escola?', options: ['U.A. High School', 'Karasuno High School', 'Kuoh Academy', 'Ouran High School'], correctAnswer: 0, hint: 'É uma escola' },
  { id: 192, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de My Hero Academia?', options: ['Kohei Horikoshi', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 193, category: 'Animes', difficulty: 'hard', question: 'Em Demon Slayer, qual é o nome da organização?', options: ['Demon Slayer Corps', 'Demon Hunter Guild', 'Slayer Organization', 'Demon Extermination Squad'], correctAnswer: 0, hint: 'É uma organização' },
  { id: 194, category: 'Animes', difficulty: 'hard', question: 'Qual é o nome do criador de Demon Slayer?', options: ['Koyoharu Gotouge', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ela é a mangaka' },
  { id: 195, category: 'Animes', difficulty: 'hard', question: 'Em Sword Art Online, qual é o nome do criador?', options: ['Reki Kawahara', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o autor' },
  { id: 196, category: 'Animes', difficulty: 'hard', question: 'Em Tokyo Ghoul, qual é o nome do criador?', options: ['Sui Ishida', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 197, category: 'Animes', difficulty: 'hard', question: 'Em Mob Psycho 100, qual é o nome do criador?', options: ['ONE', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o mangaka' },
  { id: 198, category: 'Animes', difficulty: 'hard', question: 'Em Ergo Proxy, qual é o nome do criador?', options: ['Atsuko Asano', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ela é a criadora' },
  { id: 199, category: 'Animes', difficulty: 'hard', question: 'Em Samurai Champloo, qual é o nome do criador?', options: ['Shinichiro Watanabe', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o criador' },
  { id: 200, category: 'Animes', difficulty: 'hard', question: 'Em Neon Genesis Evangelion, qual é o nome do criador?', options: ['Hideaki Anno', 'Akira Toriyama', 'Eiichiro Oda', 'Masashi Kishimoto'], correctAnswer: 0, hint: 'Ele é o criador' },
];

// Perguntas sobre Matemática (100 perguntas)
const mathQuestions: QuizQuestion[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 201 + i,
    category: 'Matemática',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Matemática ${i + 1}`,
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctAnswer: 0,
    hint: 'Pense bem na resposta'
  }))
];

// Perguntas sobre Ciências (100 perguntas)
const scienceQuestions: QuizQuestion[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 301 + i,
    category: 'Ciências',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Ciências ${i + 1}`,
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctAnswer: 0,
    hint: 'Pense bem na resposta'
  }))
];

// Perguntas sobre Geografia (100 perguntas)
const geoQuestions: QuizQuestion[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 401 + i,
    category: 'Geografia',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Geografia ${i + 1}`,
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctAnswer: 0,
    hint: 'Pense bem na resposta'
  }))
];

// Perguntas sobre História (100 perguntas)
const historyQuestions: QuizQuestion[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 501 + i,
    category: 'História',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de História ${i + 1}`,
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctAnswer: 0,
    hint: 'Pense bem na resposta'
  }))
];

// Perguntas sobre Português (100 perguntas)
const portugueseQuestions: QuizQuestion[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 601 + i,
    category: 'Português',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Português ${i + 1}`,
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctAnswer: 0,
    hint: 'Pense bem na resposta'
  }))
];

// Perguntas sobre Esportes (100 perguntas)
const sportsQuestions: QuizQuestion[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: 701 + i,
    category: 'Esportes',
    difficulty: (['easy', 'medium', 'hard'] as const)[i % 3],
    question: `Pergunta de Esportes ${i + 1}`,
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctAnswer: 0,
    hint: 'Pense bem na resposta'
  }))
];

// Combinar todas as perguntas (800 total)
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

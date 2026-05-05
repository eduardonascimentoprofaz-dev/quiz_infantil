# 📱 Guia Completo: Publicar Quiz Infantil na Play Store

## 🎯 Visão Geral

Este guia mostra como publicar seu PWA (Progressive Web App) na Google Play Store como um app Android nativo usando **Bubblewrap** (ferramenta oficial do Google).

---

## 📋 Pré-requisitos

Antes de começar, você precisa de:

1. **Conta Google Play Developer** ($25 USD - pagamento único)
   - Acesse: https://play.google.com/console
   - Crie uma conta e pague a taxa de registro

2. **Node.js** (versão 14+)
   - Já deve estar instalado no seu computador

3. **Java Development Kit (JDK)** (versão 11+)
   - Download: https://www.oracle.com/java/technologies/downloads/

4. **Android SDK** (opcional, mas recomendado)
   - Pode ser instalado via Android Studio ou ferramentas de linha de comando

5. **Seu domínio ou URL do app**
   - URL: `https://quizgame-8qxx7zqn.manus.space`

---

## 🚀 Passo 1: Instalar Bubblewrap

Abra o terminal/prompt de comando e execute:

```bash
npm install -g @bubblewrap/cli
```

Verifique a instalação:

```bash
bubblewrap --version
```

---

## 🔑 Passo 2: Gerar Certificado Digital (Keystore)

O certificado é necessário para assinar seu APK. Execute:

```bash
keytool -genkey -v -keystore quiz-infantil.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias quiz_infantil
```

**Quando solicitado, preencha com:**
- **Senha do keystore**: Escolha uma senha forte (ex: `QuizInfantil@2026`)
- **Nome**: Quiz Infantil
- **Organização**: Seu nome ou empresa
- **Cidade**: Sua cidade
- **Estado**: Seu estado
- **País**: BR (Brasil)

⚠️ **IMPORTANTE**: Guarde o arquivo `quiz-infantil.keystore` e a senha em um local seguro!

---

## 📝 Passo 3: Criar Arquivo de Configuração

Crie um arquivo chamado `twa-manifest.json` na raiz do seu projeto:

```json
{
  "packageId": "com.quizinfantil.app",
  "host": "quizgame-8qxx7zqn.manus.space",
  "launcherName": "Quiz Infantil",
  "launcherIcon": "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/icon-512-kngWBG39hqzTYrU5sQiXPr.webp",
  "primaryColor": "#6366f1",
  "secondaryColor": "#ec4899",
  "tertiaryColor": "#fbbf24",
  "backgroundColor": "#ffffff",
  "themeColor": "#6366f1",
  "orientation": "portrait",
  "startUrl": "/",
  "display": "standalone",
  "shortcuts": [
    {
      "name": "Começar Jogo",
      "short_name": "Jogar",
      "url": "/quiz",
      "icon": "https://d2xsxph8kpxj0f.cloudfront.net/310519663592250795/8QXx7zQnM9ZSDCnYaXwbHj/icon-192-4vzGPqocnYbYKG69zhGcS3.webp"
    }
  ],
  "features": {
    "offline": true
  },
  "appVersionCode": 1,
  "appVersionName": "1.0.0",
  "minSdkVersion": 21,
  "targetSdkVersion": 34,
  "enableNotifications": false
}
```

---

## 🛠️ Passo 4: Gerar APK com Bubblewrap

No diretório do projeto, execute:

```bash
bubblewrap build --manifest twa-manifest.json --keystore quiz-infantil.keystore --keystorePassword SUA_SENHA --keyAlias quiz_infantil --keyPassword SUA_SENHA
```

Substitua `SUA_SENHA` pela senha que você criou no Passo 2.

Isso vai gerar:
- `app-release.aab` (App Bundle - recomendado para Play Store)
- `app-release.apk` (APK - para testes)

---

## 📊 Passo 5: Criar Conta na Play Store

1. Acesse: https://play.google.com/console
2. Faça login com sua conta Google
3. Clique em **"Criar app"**
4. Preencha os dados:
   - **Nome do app**: Quiz Infantil
   - **Idioma padrão**: Português (Brasil)
   - **Tipo de app**: Aplicativo
   - **Categoria**: Educação
   - **Classificação**: Apto para todas as idades

---

## 📤 Passo 6: Upload do APK/AAB

1. No console da Play Store, vá para **"Versão de teste" → "Teste interno"**
2. Clique em **"Criar nova versão"**
3. Faça upload do arquivo `app-release.aab`
4. Preencha as notas de versão:
   ```
   Versão 1.0.0 - Lançamento inicial
   
   Quiz Infantil é um jogo educativo divertido com:
   - 250 perguntas em 12 categorias
   - Sistema de ranking
   - Personagens de anime
   - Funciona offline
   - Interface amigável para crianças
   ```

---

## 📋 Passo 7: Preencher Informações do App

Complete todas as seções obrigatórias:

### **Detalhes do App**
- **Título**: Quiz Infantil
- **Descrição curta**: Jogo educativo com 250 perguntas e ranking
- **Descrição completa**:
  ```
  Quiz Infantil é um jogo educativo divertido e interativo para crianças!
  
  ✨ Características:
  - 250 perguntas em 12 categorias diferentes
  - Sistema de pistas para ajudar
  - Ranking das melhores pontuações
  - Personagens de anime animados
  - Funciona offline
  - Interface colorida e amigável
  - Sem anúncios
  
  📚 Categorias:
  Animes, Matemática, Ciências, Geografia, História, Português, Esportes, Cultura, Tecnologia, Natureza, Comida e Saúde
  
  🎮 Como Jogar:
  1. Responda perguntas de múltipla escolha
  2. Use pistas quando precisar
  3. Ganhe pontos por acertos
  4. Entre no ranking dos melhores
  5. Desafie seus amigos!
  ```

### **Screenshots**
- Faça upload de 2-8 screenshots do jogo
- Use as imagens geradas: `screenshot-540.png` e `screenshot-1280.png`

### **Ícone do App**
- Use: `icon-512.png` (512x512 pixels)

### **Classificação de Conteúdo**
- Responda o questionário (app é apto para todas as idades)

### **Política de Privacidade**
- Crie uma página simples ou use um template
- Exemplo: "Este app não coleta dados pessoais"

---

## ✅ Passo 8: Enviar para Revisão

1. Verifique se todas as seções estão completas (verde ✓)
2. Clique em **"Enviar para revisão"**
3. Aguarde a aprovação (geralmente 24-48 horas)

---

## 🎉 Passo 9: Lançamento

Após aprovação:
1. Vá para **"Produção"**
2. Clique em **"Criar nova versão"**
3. Faça upload do mesmo APK/AAB
4. Preencha as notas de versão
5. Clique em **"Revisar"** e depois **"Lançar"**

---

## 🐛 Solução de Problemas

### **Erro: "Certificado inválido"**
- Verifique se o keystore foi criado corretamente
- Certifique-se de usar a senha correta

### **Erro: "Domínio não verificado"**
- Adicione um arquivo `assetlinks.json` no seu servidor
- Coloque em: `https://quizgame-8qxx7zqn.manus.space/.well-known/assetlinks.json`

### **App rejeitado na Play Store**
- Verifique a política de privacidade
- Certifique-se de que o app funciona offline
- Teste em múltiplos dispositivos Android

---

## 📞 Suporte

Para mais informações:
- Documentação Bubblewrap: https://github.com/GoogleChromeLabs/bubblewrap
- Google Play Console Help: https://support.google.com/googleplay/android-developer
- TWA Documentation: https://developer.chrome.com/docs/android/trusted-web-activity/

---

## 📝 Checklist Final

Antes de publicar, verifique:

- [ ] Certificado digital (keystore) criado e guardado
- [ ] APK/AAB gerado com sucesso
- [ ] Conta Google Play Developer criada
- [ ] Todas as informações do app preenchidas
- [ ] Screenshots e ícones enviados
- [ ] Política de privacidade criada
- [ ] App testado em múltiplos dispositivos
- [ ] Versão 1.0.0 pronta para lançamento

---

**Boa sorte com o lançamento! 🚀**

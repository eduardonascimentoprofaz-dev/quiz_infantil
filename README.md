# 🎮 Quiz Infantil

Aplicativo educativo em formato **PWA** e **APK Android**, desenvolvido para proporcionar uma experiência interativa de perguntas e respostas para crianças.

## 📱 Sobre o projeto

O **Quiz Infantil** é um jogo de perguntas e respostas com interface amigável, colorida e responsiva, pensado para estimular aprendizado de forma divertida.

O projeto foi estruturado para funcionar tanto no navegador quanto como aplicativo Android.

---

## 🚀 Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript / TypeScript
* Node.js
* Vite
* Capacitor
* Android (Gradle)
* PWA (Progressive Web App)

---

## 📂 Estrutura do projeto

```bash
quiz_infantil/
├── Android/                # Projeto Android gerado pelo Capacitor
├── cliente/                # Front-end do aplicativo
├── servidor/               # Back-end/API
├── compartilhado/          # Arquivos compartilhados
├── remendos/               # Ajustes e correções
├── app-debug.apk           # APK compilado
├── BUILD_APK.sh            # Script para build Android
├── capacitor.config.ts     # Configuração do Capacitor
├── package.json            # Dependências do projeto
├── vite.config.ts          # Configuração do Vite
```

---

## ⚙️ Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

---

## 📦 Gerando APK Android

### Sincronizar Capacitor

```bash
npx cap sync android
```

### Compilar APK

```bash
cd android
./gradlew assembleDebug
```

O APK será gerado em:

```bash
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📲 Download do APK

O APK está disponível na aba **Releases** deste repositório.

---

## 🎯 Funcionalidades

✅ Sistema de perguntas e respostas
✅ Interface responsiva
✅ Compatível com navegador e Android
✅ Instalação via PWA
✅ Aplicativo Android (.apk)
✅ Estrutura modularizada

---

## 📌 Objetivo

Este projeto faz parte do meu portfólio na transição de carreira para a área de tecnologia, com foco em desenvolvimento de software e aplicações mobile.

---

## 👨‍💻 Autor

**Francisco Eduardo Nascimento com uso da plataforma Manus**

GitHub: https://github.com/eduardonascimentoprofaz-dev

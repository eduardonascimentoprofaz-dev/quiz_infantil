#!/bin/bash

# Script para gerar APK do Quiz Infantil usando Bubblewrap
# Autor: Quiz Infantil Team
# Data: 2026-05-05

echo "🚀 Quiz Infantil - Gerador de APK"
echo "=================================="
echo ""

# Verificar se Bubblewrap está instalado
if ! command -v bubblewrap &> /dev/null; then
    echo "❌ Bubblewrap não está instalado!"
    echo "Instale com: npm install -g @bubblewrap/cli"
    exit 1
fi

# Verificar se o keystore existe
if [ ! -f "quiz-infantil.keystore" ]; then
    echo "❌ Arquivo keystore não encontrado!"
    echo ""
    echo "Crie um certificado com:"
    echo "keytool -genkey -v -keystore quiz-infantil.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias quiz_infantil"
    exit 1
fi

# Solicitar senha
echo "🔐 Digite a senha do keystore:"
read -s KEYSTORE_PASSWORD

echo ""
echo "🔨 Gerando APK..."
echo ""

# Gerar APK
bubblewrap build \
    --manifest twa-manifest.json \
    --keystore quiz-infantil.keystore \
    --keystorePassword "$KEYSTORE_PASSWORD" \
    --keyAlias quiz_infantil \
    --keyPassword "$KEYSTORE_PASSWORD"

# Verificar resultado
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ APK gerado com sucesso!"
    echo ""
    echo "📁 Arquivos gerados:"
    ls -lh app-release.* 2>/dev/null
    echo ""
    echo "📤 Próximos passos:"
    echo "1. Acesse: https://play.google.com/console"
    echo "2. Crie um novo app"
    echo "3. Faça upload do arquivo app-release.aab"
    echo "4. Preencha as informações do app"
    echo "5. Envie para revisão"
    echo ""
else
    echo ""
    echo "❌ Erro ao gerar APK!"
    exit 1
fi

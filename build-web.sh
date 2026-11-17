#!/usr/bin/env bash
# Builds the GitHub Pages site from ../adventure-point.html and ../img.  Usage: bash build-web.sh
set -euo pipefail
cd "$(dirname "$0")"
BASE="https://cioldo.github.io/adventure-point"

mkdir -p img && cp ../img/*.jpg img/
touch .nojekyll
{
cat <<EOF
<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Finn aktiviteter i Tromsø, book på sekunder og samle poeng du kan bruke på gratis opplevelser. Klikkbar demo av Adventure Point.">
<meta name="theme-color" content="#0d1830">
<meta property="og:type" content="website">
<meta property="og:title" content="Adventure Point – opplev Tromsø og samle poeng">
<meta property="og:description" content="Finn aktiviteter i nærheten, book på sekunder og samle poeng du kan bruke på gratis opplevelser. Klikkbar demo.">
<meta property="og:image" content="$BASE/img/hero.jpg">
<meta property="og:url" content="$BASE/">
<meta property="og:locale" content="nb_NO">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 108'%3E%3Ccircle cx='54' cy='54' r='54' fill='%230d1830'/%3E%3Cpath fill='%23ffc84a' d='M51 30h6v8h16l7 7-7 7H57v5H40l-7-7 7-7h11zM51 60h6v20h-6z'/%3E%3C/svg%3E">
<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
EOF
cat ../adventure-point.html
printf '\n</body>\n</html>\n'
} > index.html
echo "Bygget index.html ($(wc -c < index.html) bytes) og $(ls img | wc -l) bilder"

@echo off
title aime - Clinica

rem Verifica se o build existe
if not exist "C:\PROJETOS\clinica\dist\index.html" (
  color 0C
  echo.
  echo  AVISO: Build nao encontrado!
  echo  Execute primeiro: cd C:\PROJETOS\clinica ^& npm run build
  echo.
  pause
  exit /b 1
)

rem Lanca Electron direto no build pre-compilado
start "" "C:\PROJETOS\clinica\node_modules\electron\dist\electron.exe" --no-sandbox "C:\PROJETOS\clinica"

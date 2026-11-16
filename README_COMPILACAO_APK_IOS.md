# Heartvyra Digital — Aplicativo React Native / Expo (Android APK & iOS)

Este pacote contém o código-fonte nativo configurado para compilação oficial nas lojas e geração de APK via Expo EAS.

## Passos para gerar o APK Android:
1. `npm install`
2. `npx eas login`
3. `npx eas build -p android --profile preview` (gera o arquivo .apk instalável)

## Passos para iOS (App Store / TestFlight):
1. `npx eas build -p ios --profile production`
2. `npx eas submit -p ios`

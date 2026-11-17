# CarrelloSmart

App web attuale pubblicata su GitHub Pages e primo progetto Capacitor per preparare le versioni Android e iOS.

## Struttura

- `index.html`: versione web pubblicata su GitHub Pages.
- `www/`: copia dei file web usata da Capacitor.
- `capacitor.config.ts`: identificativo nativo `it.carrellosmart.app`.
- `scripts/copy-web.js`: copia i file web aggiornati dentro `www/`.

## Requisiti di sviluppo

- Node.js 22 o superiore.
- Android: Android Studio e Android SDK.
- iOS: macOS, Xcode e CocoaPods.

## Preparazione locale

```bash
npm install
npm run cap:sync
npx cap add android
npx cap add ios
```

I comandi `cap add` si eseguono una sola volta per piattaforma. Dopo aver aggiornato la versione web:

```bash
npm run cap:sync
```

Per aprire i progetti nativi:

```bash
npx cap open android
npx cap open ios
```

## Stato pubblicazione

Questo repository contiene lo scaffold iniziale Capacitor. Non è ancora un'app pronta per gli store e non sono ancora stati configurati gli acquisti Premium.

Prima della pubblicazione servono:
- test su dispositivi reali e verifica della fotocamera;
- gestione sicura dei link di conferma email e del ripristino sessione nell'app nativa;
- funzione di eliminazione account e dati;
- privacy policy e informazioni richieste dagli store;
- acquisti in-app ufficiali Apple e Google con verifica degli acquisti lato server;
- account sviluppatore, schede store, icone, screenshot e build firmate.

Non inserire mai chiavi segrete Supabase, chiavi private degli store o credenziali di firma nel codice pubblico.

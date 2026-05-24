# Hinweise fuer Agents

Dieses Projekt ist eine statische React-Webseite fuer **Die Riedemanns**, einen
landwirtschaftlichen Betrieb mit Freilandeiern und Fleisch von eigenen
Charolais-Rindern.

## Ziel der Seite

- hochwertig, ruhig und einfach wirken
- ein laendliches Gefuehl vermitteln
- den Betrieb als Portfolioseite vorstellen
- Freilandeier und Charolais-Rindfleisch sichtbar machen
- Mail-Anfragen fuer Fleischbestellungen ermoeglichen
- erwaehnen, dass die Kaelber bei den Mutterkuehen bleiben
- die Sommerhaltung auf Gruenlandflaechen am Rand eines Naturschutzgebietes
  hervorheben

Der sichtbare Name und Slogan der Seite ist **Die Riedemanns**.

## Entwicklung

```bash
npm install
npm run dev
```

Der Dev-Server startet normalerweise auf `http://localhost:5173/`. Wenn der Port
belegt ist, waehlt Vite automatisch einen anderen freien Port.

## Build

```bash
npm run build
```

Der fertige statische Build liegt danach in `dist/`.

## Vorschau

```bash
npm run preview
```

## Projektstruktur

- `index.html`: Einstiegspunkt und Meta-Daten
- `src/main.jsx`: React-Struktur und Inhalte
- `src/styles.css`: komplettes Styling
- `assets/`: Bilder fuer Hero und Impressionen
- `vite.config.js`: Vite-Konfiguration mit relativen Asset-Pfaden

## Gestaltung

- edel, reduziert und laendlich
- keine ueberladene Marketingseite
- grosszuegige Typografie, ruhige Flaechen, wenige Farben
- keine dekorativen Effekte ohne Nutzen
- mobile Ansicht kompakt halten, besonders beim Hero-Bild
- Bilder sollen den echten Charakter der Seite tragen

## Assets

Bilder werden aus `assets/` in `src/main.jsx` importiert. Dadurch kann Vite sie
beim Build korrekt versionieren und in `dist/assets/` ausgeben.

Vor dem Entfernen oder Umbenennen von Bildern pruefen, ob sie in `src/main.jsx`
referenziert werden.

## Textstil

- Deutsch
- klar, ruhig und hochwertig
- keine uebertrieben werbliche Sprache
- Tierhaltung sachlich und vertrauenswuerdig beschreiben
- Mail-Anfragen fuer Fleischbestellungen sollen einfach erreichbar bleiben

## Git

Commitnachrichten bitte auf Deutsch schreiben.

Vor einem Commit ausfuehren:

```bash
npm run build
```

# Die Riedemanns

Statische React-Webseite fuer einen landwirtschaftlichen Betrieb mit
Freilandeiern, Charolais-Rindfleisch und Mail-Anfragen fuer Fleischbestellungen.

## Inhalt

Die Seite ist als schlichte Portfolioseite angelegt. Sie stellt den Betrieb,
das Angebot und die naturnahe Haltung der Charolais-Rinder vor. Erwaehnt werden
unter anderem:

- Eier aus Freilandhaltung
- Fleisch von eigenen Charolais-Rindern
- Sommerhaltung auf Gruenlandflaechen am Rand eines Naturschutzgebietes
- Kaelber, die bei den Mutterkuehen bleiben
- Mail-Anfragen fuer Fleischbestellungen

Der Slogan und sichtbare Name der Seite ist: **Die Riedemanns**.

## Technik

- Vite
- React
- CSS ohne zusaetzliches UI-Framework
- statischer Build fuer einfaches Hosting

## Entwicklung

```bash
npm install
npm run dev
```

Der Dev-Server laeuft standardmaessig unter `http://localhost:5173/`.
Falls der Port belegt ist, waehlt Vite automatisch den naechsten freien Port.

## Passwortschutz

Die Seite kann ueber einen clientseitigen Passwortschutz gesperrt werden. Dafuer
wird in `.env.local` der SHA-256-Hash des Passworts gesetzt:

```bash
VITE_PAGE_PASSWORD_HASH=...
```

Zum Aendern des Passworts einen neuen SHA-256-Hash erzeugen und in `.env.local`
sowie in der Hosting-Umgebung als `VITE_PAGE_PASSWORD_HASH` hinterlegen. Ohne
gesetzten Hash ist die Sperre deaktiviert.

Hinweis: Bei einer statischen Webseite ist das eine einfache Zugangssperre im
Browser. Fuer echten Schutz sollte zusaetzlich ein serverseitiger
Passwortschutz beim Hoster eingerichtet werden.

## Statischer Build

```bash
npm run build
```

Der fertige Build landet in `dist/`.

## Vorschau des Builds

```bash
npm run preview
```

## Assets

Die Bilder liegen im Ordner `assets/` und werden in `src/main.jsx` importiert,
damit Vite sie beim Build korrekt verarbeitet.

Aktuell genutzte Bilder:

- `freilandhuehner-eier.png` als Hero-Bild
- `charolais-hero.png` fuer Freilandhuehner und Eier
- `hoflandschaft.png` fuer Landschaft und Hofgefuehl

## Deployment

Nach `npm run build` kann der Inhalt des Ordners `dist/` auf einen statischen
Host hochgeladen werden. Die Vite-Konfiguration nutzt relative Asset-Pfade,
damit die Seite auch in Unterordnern funktioniert.

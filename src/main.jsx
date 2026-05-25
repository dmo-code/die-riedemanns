import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import chickenEggs from '../assets/charolais-hero.png';
import heroPasture from '../assets/freilandhuehner-eier.png';
import farmLandscape from '../assets/hoflandschaft.png';
import './styles.css';

const passwordHash = import.meta.env.VITE_PAGE_PASSWORD_HASH || '';
const passwordStorageKey = 'die-riedemanns-page-unlocked';

const offerings = [
  {
    title: 'Freilandeier',
    text: 'Unsere Eier stammen von eigenen Hühnern in Freilandhaltung. Sie sind regelmäßig direkt am Hof erhältlich, mit kurzen Wegen und klarer Herkunft.',
  },
  {
    title: 'Charolais-Rindfleisch',
    text: 'Fleisch von unseren eigenen Charolais-Rindern geben wir auf Anfrage und nach Verfügbarkeit ab. Die Termine richten sich nach der Haltung.',
  },
  {
    title: 'Grünlandhaltung',
    text: 'Im Sommer stehen unsere Rinder auf Grünlandflächen am Rand eines Naturschutzgebietes. Die Kälber bleiben bei den Mutterkühen.',
  },
];

const impressions = [
  {
    image: chickenEggs,
    title: 'Freilandhaltung',
    text: 'Hühner im Freiland und Eier direkt vom Hof.',
    alt: 'Freilandhühner mit einem Korb Eier auf der Wiese',
  },
  {
    image: heroPasture,
    title: 'Mutterkuhherde',
    text: 'Charolais-Rinder mit Kälbern, die bei ihren Mutterkühen bleiben.',
    alt: 'Charolais-Rinder mit Kälbern auf einer Wiese bei Sonnenaufgang',
  },
  {
    image: farmLandscape,
    title: 'Landschaft',
    text: 'Grünlandflächen am Rand eines Naturschutzgebietes prägen die Sommerhaltung.',
    alt: 'Ländlicher Weg mit Blick über Grünlandflächen',
  },
];

async function getSha256Hash(value) {
  const bytes = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', bytes);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setIsChecking(true);

    const enteredHash = await getSha256Hash(password);

    if (enteredHash === passwordHash) {
      sessionStorage.setItem(passwordStorageKey, 'true');
      onUnlock();
      return;
    }

    setError('Das Passwort stimmt nicht.');
    setPassword('');
    setIsChecking(false);
  }

  return (
    <main className="password-page">
      <section className="password-panel" aria-labelledby="password-title">
        <p className="eyebrow">Geschützter Zugang</p>
        <h1 id="password-title">Die Riedemanns</h1>
        <p>
          Diese Seite ist vorübergehend mit einem Passwort geschützt. Bitte gib
          das Passwort ein, um fortzufahren.
        </p>
        <form className="password-form" onSubmit={handleSubmit}>
          <label htmlFor="page-password">Passwort</label>
          <div className="password-row">
            <input
              id="page-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              autoFocus
              required
            />
            <button className="button" type="submit" disabled={isChecking}>
              {isChecking ? 'Prüfen' : 'Öffnen'}
            </button>
          </div>
          {error && <p className="password-error">{error}</p>}
        </form>
      </section>
    </main>
  );
}

function App() {
  const [isUnlocked, setIsUnlocked] = useState(
    !passwordHash || sessionStorage.getItem(passwordStorageKey) === 'true',
  );
  const orderMail =
    'mailto:hallo@die-riedemanns.de?subject=Anfrage%20Fleischbestellung&body=Guten%20Tag%2C%0A%0Aich%20interessiere%20mich%20fuer%20Fleisch%20vom%20Charolais-Rind.%0A%0AName%3A%0ATelefon%3A%0AWunschtermin%3A%0A%0AVielen%20Dank.';

  if (!isUnlocked) {
    return <PasswordGate onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Die Riedemanns Startseite">
          Die Riedemanns
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#angebot">Angebot</a>
          <a href="#haltung">Haltung</a>
          <a href="#anfrage">Anfrage</a>
        </nav>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={heroPasture}
          alt="Charolais-Rinder mit Kälbern auf einer grünen Weide bei Sonnenaufgang"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Landwirtschaftlicher Familienbetrieb</p>
          <h1 id="hero-title">Die Riedemanns</h1>
          <p>
            Freilandeier direkt vom Hof und Fleisch von eigenen
            Charolais-Rindern. Wir arbeiten bodenständig, mit ruhigem Umgang
            mit den Tieren und kurzen Wegen für Menschen aus der Region.
          </p>
          <a className="button" href={orderMail}>
            Fleisch anfragen
          </a>
        </div>
      </section>

      <section id="angebot" className="section intro">
        <div>
          <p className="eyebrow">Vom Hof</p>
          <h2>Freilandeier und Charolais-Rindfleisch aus eigener Haltung.</h2>
        </div>
        <p>
          Unser Hof steht für ein überschaubares Angebot, das wir selbst
          verantworten: Freilandeier aus eigener Hühnerhaltung und Rindfleisch
          von unseren Charolais-Rindern. Was es gibt, kommt aus unserem Alltag
          auf dem Hof und ist nach Verfügbarkeit erhältlich.
        </p>
      </section>

      <section className="section grid" aria-label="Bereiche der Webseite">
        {offerings.map((item) => (
          <article className="feature" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section impressions" aria-label="Impressionen vom Hof">
        {impressions.map((item) => (
          <article className="impression" key={item.title}>
            <img src={item.image} alt={item.alt} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="haltung" className="section story">
        <p className="eyebrow">Unser Hof</p>
        <h2>Bodenständig arbeiten, ruhig mit den Tieren umgehen.</h2>
        <p>
          Wir führen unseren Hof als Familienbetrieb mit einem klaren Blick auf
          das Wesentliche: gute Haltung, verlässliche Arbeit und ein
          respektvoller Umgang mit den Tieren. Unsere Charolais-Rinder leben im
          Herdenverbund; die Kälber bleiben bei ihren Mutterkühen. Im Sommer
          grasen die Tiere auf Grünlandflächen am Rand eines Naturschutzgebietes.
        </p>
      </section>

      <section id="anfrage" className="contact">
        <div>
          <p className="eyebrow">Fleisch anfragen</p>
          <h2>Charolais-Rindfleisch gibt es auf Anfrage und nach Verfügbarkeit.</h2>
          <p>
            Schreib uns gern eine Mail, wenn du Interesse an Fleisch vom
            Charolais-Rind hast. Hilfreich sind Name, Telefonnummer, gewünschte
            Menge und ob du über kommende Termine informiert werden möchtest. Da
            wir nicht dauerhaft schlachten, ist die Verfügbarkeit begrenzt.
          </p>
        </div>
        <a className="button button-dark" href={orderMail}>
          Anfrage per Mail senden
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

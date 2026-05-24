import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import heroPasture from '../assets/charolais-gruenland-hero.png';
import './styles.css';

const offerings = [
  {
    title: 'Freilandeier',
    text: 'Eier aus Freilandhaltung, direkt vom Hof und mit kurzen Wegen.',
  },
  {
    title: 'Charolais-Rindfleisch',
    text: 'Fleisch von eigenen Charolais-Rindern, auf Anfrage und nach Verfügbarkeit.',
  },
  {
    title: 'Grünlandhaltung',
    text: 'Im Sommer leben die Tiere auf Grünlandflächen am Rand eines Naturschutzgebietes.',
  },
];

function App() {
  const orderMail =
    'mailto:hallo@die-riedemanns.de?subject=Anfrage%20Fleischbestellung&body=Guten%20Tag%2C%0A%0Aich%20interessiere%20mich%20fuer%20Fleisch%20vom%20Charolais-Rind.%0A%0AName%3A%0ATelefon%3A%0AWunschtermin%3A%0A%0AVielen%20Dank.';

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
          alt="Charolais-Rinder mit Kälbern auf einer grünen Weide"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Landwirtschaftlicher Betrieb</p>
          <h1 id="hero-title">Die Riedemanns</h1>
          <p>
            Freilandeier und Fleisch von eigenen Charolais-Rindern. Ruhig,
            naturnah und mit Respekt vor Tier, Landschaft und Handwerk.
          </p>
          <a className="button" href={orderMail}>
            Fleisch anfragen
          </a>
        </div>
      </section>

      <section id="angebot" className="section intro">
        <div>
          <p className="eyebrow">Vom Hof</p>
          <h2>Ein einfaches Angebot, getragen von guter Haltung.</h2>
        </div>
        <p>
          Diese Seite ist als edle Portfolioseite für den Betrieb angelegt. Sie
          zeigt, wofür der Hof steht, und macht Anfragen zu Fleischbestellungen
          unkompliziert möglich.
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

      <section id="haltung" className="section story">
        <p className="eyebrow">Haltung</p>
        <h2>Die Kälber bleiben bei ihren Mutterkühen.</h2>
        <p>
          Die Charolais-Rinder wachsen im Herdenverbund auf. Im Sommer stehen
          sie auf Grünlandflächen am Rande eines Naturschutzgebietes, wo Weite,
          frisches Futter und ein ruhiger Rhythmus den Alltag prägen.
        </p>
      </section>

      <section id="anfrage" className="contact">
        <div>
          <p className="eyebrow">Bestellung & Kontakt</p>
          <h2>Fleisch vom Charolais-Rind kann per Mail angefragt werden.</h2>
        </div>
        <a className="button button-dark" href={orderMail}>
          Anfrage senden
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

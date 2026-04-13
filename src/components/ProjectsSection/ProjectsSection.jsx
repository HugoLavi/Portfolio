import "./ProjectsSection.css";
import imgWordpress from "../../assets/images/wordpress.png";
import imgLanding from "../../assets/images/landing-page.webp";
import imgHTML from "../../assets/images/html.png";
import imgCSS from "../../assets/images/css.png";
import imgJS from "../../assets/images/javascript.png";
import imgBlog from "../../assets/images/blog.webp";
import imgBitcoin from "../../assets/images/bitcoin.png";
import imgScoutview from "../../assets/images/scoutview.png";
import imgOllama from "../../assets/images/ollama.png";
import imgCampus from "../../assets/images/challenge48h.png";
import imgGameday from "../../assets/images/asso-esport.png";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <div className="container3">
        <span className="section-eyebrow">Réalisations</span>
        <h1>Mes projets</h1>
        <p>Découvrez quelques réalisations !</p>
        <div className="flex3">
          <div className="grid-container">
            <div className="card">
              <img src={imgLanding} alt="image landing page" />
              <div className="card-content">
                <h3 className="card-title">Landing page</h3>
                <p className="card-description">
                  Landing page pour vendre un stylo
                </p>
                <div className="trait"></div>
                <div className="card-icon">
                  <img src={imgHTML} alt="icone HTML" />
                  <img src={imgCSS} alt="icone CSS" />
                </div>
                <a
                  href="https://hugolavi.github.io/landing-page/"
                  className="card-button"
                >
                  Voir
                </a>
              </div>
            </div>
            <div className="card">
              <img src={imgBitcoin} alt="image Bitcoin Normandie" />
              <div className="card-content">
                <h3 className="card-title">Site Normandie Bitcoin</h3>
                <p className="card-description">
                  Projet pour une asso de bitcoin
                </p>
                <div className="trait"></div>
                <div className="card-icon">
                  <img src={imgWordpress} alt="icone Wordpress" />
                </div>
                <a href="https://normandiebitcoin.com/" className="card-button">
                  Voir
                </a>
              </div>
            </div>
            <div className="card">
              <img src={imgBlog} alt="image blog F1" />
              <div className="card-content">
                <h3 className="card-title">Blog F1</h3>
                <p className="card-description">
                  Réalisation d'un blog sur la Formule 1
                </p>
                <div className="trait"></div>
                <div className="card-icon">
                  <img src={imgHTML} alt="icone HTML" />
                  <img src={imgCSS} alt="icone CSS" />
                  <img src={imgJS} alt="icone JS" />
                </div>
                <a
                  href="https://hugolavi.github.io/Blog-f1/"
                  className="card-button"
                >
                  Voir
                </a>
              </div>
            </div>
            <div className="card">
              <img src={imgCampus} alt="Campus Companion" className="card-img-contain" />
              <div className="card-content">
                <h3 className="card-title">Campus Companion</h3>
                <p className="card-description">
                  Assistant IA pour étudiants — questions sur les cours, examens et vie étudiante
                </p>
                <div className="trait"></div>
                <div className="card-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="icone React Native" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="icone Go" />
                  <img src={imgOllama} alt="icone Ollama" />
                </div>
                <span className="card-private">Projet privé</span>
              </div>
            </div>
            <div className="card">
              <img src={imgGameday} alt="Game Day by LFE" />
              <div className="card-content">
                <h3 className="card-title">Game Day by LFE</h3>
                <p className="card-description">
                  Site d'événements gaming — soirées organisées par LFE au campus Ynov
                </p>
                <div className="trait"></div>
                <div className="card-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="icone React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="icone Django" />
                </div>
                <span className="card-wip">En cours de réalisation</span>
              </div>
            </div>
            <div className="card">
              <img src={imgScoutview} alt="ScoutView" />
              <div className="card-content">
                <h3 className="card-title">ScoutView</h3>
                <p className="card-description">
                  Application desktop de scouting — visualisation et analyse de données sportives
                </p>
                <div className="trait"></div>
                <div className="card-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="icone Electron" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icone TypeScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="icone React" />
                </div>
                <span className="card-wip">En cours de réalisation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

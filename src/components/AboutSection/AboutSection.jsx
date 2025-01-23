import React from "react";
import "./AboutSection.css"; // Assure-toi de créer et importer ce fichier CSS
import gifBenSeghir from "../../assets/gifs/ben-seghir.gif";
import imgTravis from "../../assets/images/travis.jpg";
import imgF1 from "../../assets/images/gasly.jpg";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h1>À propos de moi</h1>
        <p>
          Voici trois éléments qui définissent mes inspirations et mes passions.
          Découvrez ce qui me motive au quotidien !
        </p>
        <div className="about-items">
          <div className="about-item">
            <img
              src={gifBenSeghir}
              alt="Équipe de foot de Monaco"
              className="about-gif"
            />
            <h2>AS Monaco</h2>
            <p>Fan de football, mon équipe favorite est l'AS Monaco.</p>
          </div>
          <div className="about-item">
            <img src={imgTravis} alt="image travis scott" />
            <h2>Travis Scott</h2>
            <p>
              Artiste visionnaire, j'adore ses musiques qui peuvent être de tous
              les styles mais toujours incroyable.
            </p>
          </div>
          <div className="about-item">
            <img src={imgF1} alt="Formule 1" />
            <h2>Formule 1</h2>
            <p>
              Gasly, mon pilote préféré en plus d'être français il est très
              talentueux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

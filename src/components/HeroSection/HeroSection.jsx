import React, { useEffect } from "react";
import "./HeroSection.css";
import imgGecko from "../../assets/images/gecko-container.png";
import cv from "../../assets/cv1.pdf";

const HeroSection = () => {
  useEffect(() => {
    const text = document.querySelector(".texte");
    const image = document.querySelector(".container-img");

    setTimeout(() => {
      text.style.transform = "translateX(0)";
      text.style.opacity = "1";

      image.style.transform = "translateX(0)";
      image.style.opacity = "1";
    }, 500);
  }, []);

  return (
    <section id="accueil">
      <div className="container">
        <div className="texte">
          <h1>Salut, je suis Hugo Lavieuville</h1>
          <h2>
            Étudiant en 2ème année de{" "}
            <span className="vert-sous-titre">développeur web</span> au CESI de
            Rouen
          </h2>
          <p>
            Découvrez ici mon parcours, mes projets, et mes passions. À travers
            mes réalisations, je partage mon évolution, mes compétences, et ma
            vision. Que ce soit des projets professionnels, personnels ou
            collaboratifs, ce portfolio reflète mon engagement et ma créativité.
            Bonne exploration !
          </p>
          <a href={cv} download="">
            Téléchargez mon CV
          </a>
        </div>
        <div className="container-img">
          <img src={imgGecko} alt="Gecko" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

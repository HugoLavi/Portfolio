import React, { useEffect } from "react";
import "./Slider.css";
import imgHTML from "../../assets/images/html.png";
import imgCSS from "../../assets/images/css.png";
import imgJS from "../../assets/images/javascript.png";
import imgWordpress from "../../assets/images/wordpress.png";
import imgFigma from "../../assets/images/figma.png";
import imgPhotoshop from "../../assets/images/photoshop.png";
import imgIllustrator from "../../assets/images/illustrator.png";
import imgAE from "../../assets/images/after-effects.png";
import imgReact from "../../assets/images/React-icon.svg.png";

const Slider = () => {
  useEffect(() => {
    const sliderItems = document.querySelector(".slider-items");
    const clone = sliderItems.cloneNode(true);
    document.querySelector(".slider").appendChild(clone);
  }, []);

  return (
    <section>
      <div className="container2">
        <div className="slider">
          <div className="slider-items">
            <img src={imgHTML} alt="icone HTML" />
            <img src={imgCSS} alt="icone CSS" />
            <img src={imgJS} alt="icone JavaScript" />
            <img src={imgWordpress} alt="icone Wordpress" />
            <img src={imgFigma} alt="icone Figma" />
            <img src={imgPhotoshop} alt="icone Photoshop" />
            <img src={imgIllustrator} alt="icone Illustrator" />
            <img src={imgAE} alt="icone After effect" />
            <img src={imgReact} alt="icone React" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

import React from "react";
import classes from "./carousel.module.scss";

const Carousel = () => {
  const logos = new Array(50).fill("");

  const logoElements = logos.map((logo, index) => (
    <img key={index} src="../assets/carousel_hotjar.png" alt="Hotjar" />
  ));
  return (
    <div className={classes.carousel}>
      <h2 className={classes.carousel__title}>USED BY OVER 50 ENTERPRISES</h2>
      <div className={classes.carousel__logos}>
        <div className={classes.carousel__logos__slide}>{logoElements}</div>
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import Styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.hero__content}>
        <h2 className={Styles.hero__title}>The World's Most Configurable</h2>
        <h1 className={Styles.hero__subtitle}>
          Travel & Expense Management Software
        </h1>
        <p className={Styles.hero__description}>
          Configure{" "}
          <span
            className={`${Styles.hero__highlight} 
                  ${Styles["hero__highlight--emphasis"]}`}
          >
            any
          </span>{" "}
          rule. Enable a world class mobile experience for your users. Get
          seamless reporting & integrations. Inbuilt OCR expense scanning.
          Manage travel & non-travel expenses. Open APIs to connect with
          external systems.
        </p>
      </div>
      <div className={Styles.hero__form}>
        <input
          className={`${Styles.hero__input} 
                  ${Styles["hero__input--name"]}`}
          placeholder="Name"
        />
        <input
          className={`${Styles.hero__input} 
          ${Styles["hero__input--email"]}`}
          placeholder="Official Email ID"
        />
        <button className={Styles.hero__button}>Start Trial</button>
      </div>

      <div className={Styles.hero__details}>
        <p className={Styles.hero__trial}>30 Days free trial</p>
        <div className={Styles.hero__ellipse}></div>
        <p className={Styles.hero__users}>Upto 10 users</p>
      </div>
    </div>
  );
};

export default Hero;

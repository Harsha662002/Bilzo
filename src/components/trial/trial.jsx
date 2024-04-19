import React from "react";
import Styles from "./trial.module.scss";

const Trial = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.trial}>
        <h1 className={Styles.trial__title}>
          Manage your travel and expenses the smart way!
        </h1>
        <div className={Styles.trial__form}>
          <input
            className={`${Styles.trial__input} 
                  ${Styles["trial__input--name"]}`}
            placeholder="Name"
          />
          <input
            className={`${Styles.trial__input} 
          ${Styles["trial__input--email"]}`}
            placeholder="Official Email ID"
          />
          <button className={Styles.trial__button}>Start Trial</button>
        </div>
        <div className={Styles.trial__details}>
          <p className={Styles.trial__trial}>30 Days free trial</p>
          <div className={Styles.trial__ellipse}></div>
          <p className={Styles.trial__users}>Upto 10 users</p>
        </div>
      </div>
    </div>
  );
};

export default Trial;

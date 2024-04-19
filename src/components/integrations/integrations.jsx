import React from "react";
import Styles from "./integrations.module.scss";

const Integrations = () => {
  return (
    <div className={Styles.integrations}>
      <h1>Integrations</h1>
      <div className={Styles.integrations__dropdown}>
        <img src="../assets/dropdown.png" alt="" />
      </div>
      <div className={Styles.integrations__cards}>
        <div className={Styles.integrations__card1}>
          <div className={Styles.integrations__card__title}>
            <div className={Styles.integrations__logo}>
              <img src="../assets/hrms.png" alt="Logo" />
            </div>
            <div className={Styles.integrations__title}>HRMS Systems</div>
          </div>
          <div className={Styles.integrations__card__content}>
            We can integrate with any HRMS as long as the employees master can
            be made available to us over SFTP/API.
          </div>
          <div className={Styles.integrations__card__content}>
            We are already deeply integrated with PeopleStrong and others are
            coming up.
          </div>
        </div>
        <div className={Styles.integrations__card2}>
          <div className={Styles.integrations__card__title}>
            <div className={Styles.integrations__logo}>
              <img src="../assets/finance_systems.png" alt="Logo" />
            </div>
            <div className={Styles.integrations__title}>Finance Systems</div>
          </div>
          <div className={Styles.integrations__card__content}>
            Connect us with your finance systems to get all cost centers mapped,
            and all data reconciled on a periodic/regular basis.
          </div>
          <div className={Styles.integrations__card__content}>
            Open APIs available to connect.
          </div>
        </div>
        <div className={Styles.integrations__card3}>
          <div className={Styles.integrations__card__title}>
            <div className={Styles.integrations__logo}>
              <img src="../assets/single_sign_on.png" alt="Logo" />
            </div>
            <div className={Styles.integrations__title}>
              Single Sign-On Systems
            </div>
          </div>
          <div className={Styles.integrations__card__content}>
            We can integrate to ensure that your users don't have to log in
            multiple times into different groups.
          </div>
          <div className={Styles.integrations__card__content}>
            SSO is possible with any system that offers it.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;

import React from "react";
import Styles from "./customers.module.scss";

const Customers = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.customers}>
        <h1 className={Styles.customers__title}>Our Customers love us</h1>
        <div className={Styles.customers__cards}>
          <div className={Styles.customers__card1}>
            <p className={Styles.customers__card__content}>
              ExpenseBook has truly streamlined our travel setup. No more emails
              and delays in booking. No mor unknown overruns in expense.
              Everything is trackable, and the configurability they offer is
              outstanding.
            </p>
            <div className={Styles.customers__profile}>
              <img src="../assets/profile1.png" />
              <div className={Styles.customers__profile__details}>
                <p className={`${Styles["customers__profile__details--name"]}`}>
                  Rohit Mehra
                </p>
                <p
                  className={`${Styles["customers__profile__details--designation"]}`}
                >
                  CFO, XYZ
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.customers__card2}>
            <p className={Styles.customers__card__content}>
              ExpenseBook has truly streamlined our travel setup. No more emails
              and delays in booking. No mor unknown overruns in expense.
              Everything is trackable, and the configurability they offer is
              outstanding.
            </p>
            <div className={Styles.customers__profile}>
              <img src="../assets/profile1.png" />
              <div className={Styles.customers__profile__details}>
                <p className={`${Styles["customers__profile__details--name"]}`}>
                  Alan Turing
                </p>
                <p
                  className={`${Styles["customers__profile__details--designation"]}`}
                >
                  CFO, XYZ
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.customers__card3}>
            <p className={Styles.customers__card__content}>
              ExpenseBook has truly streamlined our travel setup. No more emails
              and delays in booking. No mor unknown overruns in expense.
              Everything is trackable, and the configurability they offer is
              outstanding.
            </p>
            <div className={Styles.customers__profile}>
              <img src="../assets/profile1.png" />
              <div className={Styles.customers__profile__details}>
                <p className={`${Styles["customers__profile__details--name"]}`}>
                  Rohit Mehra
                </p>
                <p
                  className={`${Styles["customers__profile__details--designation"]}`}
                >
                  CFO, XYZ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;

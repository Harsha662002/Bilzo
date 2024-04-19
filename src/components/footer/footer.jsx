import React from "react";
import Styles from "./footer.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.footer}>
        <div className={Styles.footer__contact}>
          <div className={Styles.footer__logo}>
            <img src="../assets/expense_book.png" alt="Expense Book" />
          </div>
          <div className={Styles.footer__contact__details}>
            <div
              className={` 
                  ${Styles["footer__contact__details--location"]}`}
            >
              <FaLocationDot
                style={{
                  color: "#2D57EC",
                  marginRight: "8px",
                  backgroundColor: "inherit",
                }}
                size={16}
              />
              Address
            </div>
            <div
              className={` 
                  ${Styles["footer__contact__details--phone"]}`}
            >
              <FaPhoneAlt
                style={{
                  color: "#2D57EC",
                  marginRight: "8px",
                  backgroundColor: "inherit",
                }}
                size={16}
              />
              +91 1234567890
            </div>
            <div
              className={` 
                  ${Styles["footer__contact__details_social"]}`}
            >
              <span
                className={` 
                  ${Styles["footer__contact__details_social--text"]}`}
              >
                Social Media
              </span>
              <div
                className={` 
                  ${Styles["footer__contact__details_social--linkedin"]}`}
              >
                <FaLinkedinIn
                  style={{
                    color: "#2D57EC",
                    backgroundColor: "inherit",
                  }}
                />
              </div>
              <div
                className={` 
                  ${Styles["footer__contact__details_social--youtube"]}`}
              >
                <FaYoutube
                  style={{
                    color: "#2D57EC",
                    backgroundColor: "inherit",
                  }}
                />
              </div>
              <div
                className={` 
                  ${Styles["footer__contact__details_social--instagram"]}`}
              >
                <FaInstagram
                  style={{
                    color: "#2D57EC",
                    backgroundColor: "inherit",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={Styles.footer__copyright}>
          <div className={Styles.footer__links}>
            <ul>
              <li className={Styles.footer__link__Item}>
                <a href="#">Blogs</a>
              </li>
              <li className={Styles.footer__link__Item}>
                <a href="#">Features</a>
              </li>
              <li className={Styles.footer__link__Item}>
                <a href="#">Pricing</a>
              </li>
              <li className={Styles.footer__link__Item}>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>
          <div className={Styles.footer__copyright__content}>
            <p
              className={` 
                  ${Styles["footer__copyright__content--text"]}`}
            >
              Copyright &copy; 2024
            </p>
            <div className={Styles.footer__copyright__ellipse}></div>
            <p
              className={` 
                  ${Styles["footer__copyright__content--text"]}`}
            >
              ExpenseBook
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

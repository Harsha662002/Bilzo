import React, { useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.navbar__left}>
            <img
              src="../assets/logo2.png"
              alt="Logo"
              className={styles.navbar__logo}
            />
          </div>
          <div className={styles.navbar__right}>
            <div
              className={`${styles.navbar__links} ${
                isDropdownOpen ? styles.showDropdown : ""
              }`}
            >
              <ul>
                <li>
                  <a href="#" className={styles.navbar__link}>
                    Blogs
                  </a>
                </li>

                <li>
                  <a href="#" className={styles.navbar__link}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.navbar__link}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.navbar__link}>
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <button
              className={`${styles.navbar__start__trial__btn} ${
                isDropdownOpen ? styles.showDropdown : ""
              }`}
            >
              Start Trial
            </button>
          </div>
        </nav>
        <label class={styles.hamburger} onClick={toggleDropdown}>
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
      <div className={styles.bottomLine} />
    </div>
  );
};

export default Navbar;

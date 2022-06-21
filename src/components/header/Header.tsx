import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  const pages = [
    "SHOW ALL TYRES",
    "FIND A DEALER",
    "GUIDES & VIDEOS",
    "GO WITH",
    "SERVICE & HELP",
  ];

  return (
    <div className={styles["navbar"]}>
      <ul className={styles["navbar__list"]}>
        <li className={styles["navbar__item"]}>
          <Logo />
        </li>
        {pages.map((page, i) => (
          <li key={i} className={styles["navbar__item"]}>
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

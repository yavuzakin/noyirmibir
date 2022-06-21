import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import styles from "./Header.module.scss";

const pages = [
  "SHOW ALL TYRES",
  "FIND A DEALER",
  "GUIDES & VIDEOS",
  "GO WITH",
  "SERVICE & HELP",
];

const Header = () => {
  const convertPageNameToSlug = (pageName: string) => {
    return pageName.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
  };

  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar__list"]}>
        <li className={styles["navbar__item"]}>
          <Link to="/" className={styles["navbar__link"]}>
            <Logo />
          </Link>
        </li>
        {pages.map((page, i) => (
          <li key={i} className={styles["navbar__item"]}>
            <Link
              to={convertPageNameToSlug(page)}
              className={styles["navbar__link"]}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

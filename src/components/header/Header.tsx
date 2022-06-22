import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as MenuBar } from "../../assets/svg/menu.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/chevron-right.svg";

import styles from "./Header.module.scss";
import { useEffect, useState } from "react";

const pages = [
  "SHOW ALL TYRES",
  "FIND A DEALER",
  "GUIDES & VIDEOS",
  "GO WITH",
  "SERVICE & HELP",
];

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const bodyElement = document.querySelector("body") as HTMLBodyElement;
    if (isClicked) {
      bodyElement.classList.add("active");
    } else {
      bodyElement.classList.remove("active");
    }
  }, [isClicked]);

  const clickHandler = () => {
    setIsClicked((prevState: boolean) => !prevState);
  };

  const convertPageNameToSlug = (pageName: string) => {
    return pageName.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
  };

  const listClassName = [
    styles["navbar__list"],
    isClicked ? styles["navbar__list--active"] : "",
  ].join(" ");

  return (
    <nav className={styles["navbar"]}>
      <h1 className={styles["navbar__logo"]} onClick={clickHandler}>
        <Link to="/" className={styles["navbar__link"]}>
          <Logo />
        </Link>
      </h1>
      <ul className={listClassName}>
        {pages.map((page, i) => (
          <li key={i} className={styles["navbar__item"]} onClick={clickHandler}>
            <Link
              to={convertPageNameToSlug(page)}
              className={styles["navbar__link"]}
            >
              {page}
            </Link>
            <div className={styles["navbar__right-arrow"]}>
              <RightArrow />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles["navbar__icons"]}>
        {!isClicked && <MenuBar onClick={clickHandler} />}
        {isClicked && <Close onClick={clickHandler} />}
      </div>
    </nav>
  );
};

export default Header;

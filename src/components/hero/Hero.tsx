import Button from "../button/Button";
import hero from "../../assets/images/hero.png";
import heroMobile from "../../assets/images/hero-mobile.png";

import styles from "./Hero.module.scss";

interface Props {
  headerText: string;
  btnText: string;
}

const Hero = (props: Props) => {
  return (
    <section className={styles["hero"]}>
      <picture>
        <source srcSet={heroMobile} media="(max-width: 46.875em)" />
        <source srcSet={hero} media="(min-width: 46.875em)" />
        <img src={hero} className={styles["hero__image"]} alt="hero" />
      </picture>
      <div className={styles["hero__box"]}>
        <h1 className={styles["hero__header"]}>{props.headerText}</h1>
        <div>
          <Button type="tertiary" size="medium">
            {props.btnText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

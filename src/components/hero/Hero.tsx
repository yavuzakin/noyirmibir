import styles from "./Hero.module.scss";

interface Props {
  headerText: string;
  btnText: string;
}

export const Hero = (props: Props) => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__box"]}>
        <h1 className={styles["hero__header"]}>{props.headerText}</h1>
        <button className={styles["hero__btn"]}>{props.btnText}</button>
      </div>
    </section>
  );
};

export default Hero;

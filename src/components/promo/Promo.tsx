import styles from "./Promo.module.scss";

export const Promo = () => {
  return (
    <div className={styles["promo"]}>
      <div className={styles["promo__top"]}>
        <h2 className={styles["promo__header"]}>
          Feel the excellent wet braking with Driveways!
        </h2>
        <button className={styles["promo__btn"]}>WATCH ALL VIDEOS</button>
      </div>
      <div className={styles["promo__iframe-container"]}>
        <iframe
          className={styles["promo__video"]}
          src="https://www.youtube.com/embed/fgXgcLIIsjc"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    </div>
  );
};

export default Promo;

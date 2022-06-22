import styles from "./Promo.module.scss";

const Promo = () => {
  return (
    <div className={styles["promo"]}>
      <h2 className={styles["promo__header"]}>
        Feel the excellent wet braking with Driveways!
      </h2>
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
      <button className={styles["promo__btn"]}>WATCH ALL VIDEOS</button>
    </div>
  );
};

export default Promo;

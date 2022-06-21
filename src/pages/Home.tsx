import Features from "../components/features/Features";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero headerText="Nothing can stop you" btnText="FIND OUT MORE" />
      <Features />
    </div>
  );
};

export default Home;

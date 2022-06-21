import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Promo from "../components/promo/Promo";

export const Home = () => {
  return (
    <div>
      <Hero headerText="Nothing can stop you" btnText="FIND OUT MORE" />
      <Features />
      <Promo />
    </div>
  );
};

export default Home;

import Slider from "../slider/Slider";
import { ReactComponent as LeftController } from "../../assets/svg/left-arrow.svg";
import { ReactComponent as RightController } from "../../assets/svg/right-arrow.svg";

import styles from "./Features.module.scss";

const sliderItems = [
  {
    id: "s1",
    header: "ICEWAYS",
    description:
      "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
    firstBtnText: "LEARN MORE",
    lastBtnText: "FIND A DEALER",
    width: 385,
    height: 235,
  },
  {
    id: "s2",
    header: "DRIVEWAYS SPORT",
    description:
      "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.",
    firstBtnText: "LEARN MORE",
    lastBtnText: "FIND A DEALER",
    width: 385,
    height: 235,
  },
  {
    id: "s3",
    header: "Driveways COMPETUS H/P",
    description:
      "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
    firstBtnText: "LEARN MORE",
    lastBtnText: "FIND A DEALER",
    width: 385,
    height: 235,
  },
  {
    id: "s4",
    header: "ICEWAYS",
    description:
      "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
    firstBtnText: "LEARN MORE",
    lastBtnText: "FIND A DEALER",
    width: 385,
    height: 235,
  },
  {
    id: "s5",
    header: "DRIVEWAYS SPORT",
    description:
      "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.",
    firstBtnText: "LEARN MORE",
    lastBtnText: "FIND A DEALER",
    width: 385,
    height: 235,
  },
  {
    id: "s6",
    header: "Driveways COMPETUS H/P",
    description:
      "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
    firstBtnText: "LEARN MORE",
    lastBtnText: "FIND A DEALER",
    width: 385,
    height: 235,
  },
];

const Features = () => {
  return (
    <section className={styles["features"]}>
      <h1 className={styles["features__header"]}>Featured Products</h1>
      <Slider
        sliderItems={sliderItems}
        leftController={LeftController}
        rightController={RightController}
        gap={20}
        displayAtOnce={3}
        slideAtOnce={1}
        autoPlay={true}
        autoPlayDurationInSeconds={3}
      />
    </section>
  );
};

export default Features;

import Dot from "../dot/Dot";
import styles from "./Dots.module.scss";

interface Props {
  dots: number[];
  activeSlice: number;
  onClick: (index: number) => void;
}

const Dots = (props: Props) => {
  return (
    <div className={styles["dots"]}>
      {props.dots.map((id, i) => (
        <Dot
          key={id}
          activeSlice={props.activeSlice}
          index={i}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
};

export default Dots;

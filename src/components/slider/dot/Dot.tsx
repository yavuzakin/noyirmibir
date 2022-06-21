import styles from "./Dot.module.scss";

interface Props {
  activeSlice: number;
  index: number;
  onClick: (index: number) => void;
}

const Dot = (props: Props) => {
  const dotClass = [
    styles["dot"],
    props.index === props.activeSlice ? styles["dot--active"] : "",
  ].join(" ");

  return (
    <div onClick={() => props.onClick(props.index)} className={dotClass}></div>
  );
};

export default Dot;

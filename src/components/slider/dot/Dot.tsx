import styles from "./Dot.module.scss";

interface Props {
  activeSlice: number;
  index: number;
  onClick: (index: number) => void;
}

export const Dot = (props: Props) => {
  //   const dotClass = `slider__dot ${
  //     props.index === props.activeSlice ? "slider__dot--active" : ""
  //   }`;

  const dotClass = [
    styles["dot"],
    props.index === props.activeSlice ? styles["dot--active"] : "",
  ].join(" ");

  // const clickHandler = () => props.setActiveSlice(props.index);

  return (
    <div onClick={() => props.onClick(props.index)} className={dotClass}></div>
  );
};

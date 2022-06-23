import Button from "../../button/Button";

import styles from "./SliderItem.module.scss";

export interface SliderItemType {
  id: string;
  header: string;
  description: string;
  firstBtnText: string;
  lastBtnText: string;
  width: number;
  height: number;
}

interface Props {
  sliderItem: SliderItemType;
}

const SliderItem = (props: Props) => {
  return (
    <div
      className={styles["slider-item"]}
      style={{ width: props.sliderItem.width, height: props.sliderItem.height }}
    >
      <h3 className={styles["slider-item__header"]}>
        {props.sliderItem.header}
      </h3>
      <p className={styles["slider-item__description"]}>
        {props.sliderItem.description}
      </p>
      <div className={styles["slider-item__actions"]}>
        <div className={styles["slider-item__btn"]}>
          <Button type="secondary">{props.sliderItem.firstBtnText}</Button>
        </div>
        <div className={styles["slider-item__btn"]}>
          <Button>{props.sliderItem.lastBtnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;

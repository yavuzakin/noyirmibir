import { useEffect, useState } from "react";
import Dots from "./dots/Dots";
import SliderItem, { SliderItemType } from "./sliderItem/SliderItem";

import styles from "./Slider.module.scss";

interface Props {
  sliderItems: SliderItemType[];
  leftController: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  rightController: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  gap: number;
  displayAtOnce: number;
  slideAtOnce: number;
  autoPlay: boolean;
  autoPlayDurationInSeconds: number;
}

const Slider = (props: Props) => {
  const [remainingTimeInMs, setRemainingTimeInMs] = useState(
    props.autoPlayDurationInSeconds * 1000
  );
  const [toggleCounting, setToggleCounting] = useState(true);
  const [activeSlice, setActiveSlice] = useState(0);
  const [displayAtOnce, setDisplayAtOnce] = useState(props.displayAtOnce);

  const singleItemWidth = props.sliderItems[0].width;

  const translateValue =
    -1 * props.slideAtOnce * activeSlice * singleItemWidth -
    activeSlice * props.slideAtOnce * props.gap;

  const displayAreaWidth =
    displayAtOnce * singleItemWidth + (displayAtOnce - 1) * props.gap;

  const dotCount = Math.ceil(
    (props.sliderItems.length - displayAtOnce) / props.slideAtOnce + 1
  );
  const dots = Array.from({ length: dotCount }, (_, i) => i);

  useEffect(() => {
    const autoPlayHandler = () => {
      setActiveSlice((prevState) => {
        if (prevState === dotCount - 1) return 0;
        else return prevState + 1;
      });
    };

    let interval: NodeJS.Timer;

    if (props.autoPlay && toggleCounting) {
      interval = setInterval(() => {
        setRemainingTimeInMs((prevState) => prevState - 500);
        if (remainingTimeInMs < 500) {
          autoPlayHandler();
        }
      }, 500);
    }

    return () => {
      if (remainingTimeInMs < 500) {
        setRemainingTimeInMs(props.autoPlayDurationInSeconds * 1000);
      }
      clearInterval(interval);
    };
  }, [
    props.autoPlay,
    props.autoPlayDurationInSeconds,
    dotCount,
    remainingTimeInMs,
    toggleCounting,
  ]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setDisplayAtOnce(1);
        setActiveSlice(0);
      } else if (window.innerWidth <= 1440) {
        setDisplayAtOnce(2);
        setActiveSlice(0);
      } else {
        setDisplayAtOnce(3);
        setActiveSlice(0);
      }
    };
    window.addEventListener("resize", handleResize);
  });

  const leftControllerStyle = [
    styles["slider__controller"],
    styles["slider__controller--left"],
  ].join(" ");
  const rightControllerStyle = [
    styles["slider__controller"],
    styles["slider__controller--right"],
  ].join(" ");

  const clickHandler = (index: number) => {
    setActiveSlice(index);
  };

  const leftControlClickHandler = () => {
    if (activeSlice > 1) {
      setActiveSlice((prevState) => prevState - 1);
    } else {
      setActiveSlice(0);
    }
  };
  const rightControlClickHandler = () => {
    if (activeSlice < dotCount - 1) {
      setActiveSlice((prevState) => prevState + 1);
    } else {
      setActiveSlice(dotCount - 1);
    }
  };

  const handleToggleCount = () => {
    setToggleCounting((prevState) => !prevState);
  };

  return (
    <div className={styles["slider"]}>
      <div
        className={styles["slider__display-area"]}
        onMouseEnter={handleToggleCount}
        onMouseLeave={handleToggleCount}
        style={{ maxWidth: displayAreaWidth }}
      >
        {activeSlice > 0 && (
          <div
            className={leftControllerStyle}
            onClick={leftControlClickHandler}
          >
            <props.leftController />
          </div>
        )}
        <div
          className={styles["slider__items"]}
          style={{
            gap: props.gap,
            transform: `translateX(${translateValue}px)`,
          }}
        >
          {props.sliderItems.map((sliderItem) => (
            <SliderItem key={sliderItem.id} sliderItem={sliderItem} />
          ))}
        </div>
        {activeSlice < dotCount - 1 && (
          <div
            className={rightControllerStyle}
            onClick={rightControlClickHandler}
          >
            <props.rightController />
          </div>
        )}
      </div>
      <Dots dots={dots} activeSlice={activeSlice} onClick={clickHandler} />
    </div>
  );
};

export default Slider;

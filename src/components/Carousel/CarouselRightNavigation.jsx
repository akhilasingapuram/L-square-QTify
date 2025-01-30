import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
// import { ReactComponent as RightArrow } from "../../assets/right.svg";
import RightArrow from "../../assets/right.svg?import";
import styles from "./Carousel.module.css";

export const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div>
      {!isEnd && (
        <img
          className={styles.rightNavigation}
          src={RightArrow}
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
};

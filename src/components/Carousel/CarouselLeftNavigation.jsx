import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
// import { ReactComponent as LeftArrow } from "../../assets/Left.svg";
import LeftArrow from "../../assets/Left.svg?import";
import styles from "./Carousel.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  // return (
  //   <div className={styles.leftNavigation}>
  //     {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
  //   </div>
  // );
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <img src={LeftArrow} onClick={() => swiper.slidePrev()} />
      )}
    </div>
  );
};
export default CarouselLeftNavigation;

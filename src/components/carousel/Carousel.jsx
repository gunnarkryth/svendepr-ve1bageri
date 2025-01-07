import slide1 from "/assets/images/slide1.jpg";
import slide2 from "/assets/images/slide2.jpg";
import slide3 from "/assets/images/slide3.jpg";

import s from "./carousel.module.scss";
import { useState } from "react";
import { useEffect } from "react";

export const Carousel = () => {
  const imageArray = [slide1, slide2, slide3];

  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    if (currentImage === imageArray.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function previousImage() {
    if (currentImage === 0) {
      setCurrentImage(imageArray.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      nextImage();
    }, 3000);

    //Prevent memory leak
    return () => clearTimeout(timeout);
  }, [currentImage]);

  return (
    <section className={s.carousel} aria-label="Fresh baked goods">
      <img src={imageArray[currentImage]} alt="" />
      <h2>Vi elsker at lave brød</h2>
      <div className={s.navigation}>
        <button className={s.left} onClick={() => previousImage()}>
          <img src="public/assets/icons/chevron.png" alt="" />
        </button>
        <button className={s.right} onClick={() => nextImage()}>
          <img src="public/assets/icons/chevron.png" alt="" />
        </button>
      </div>
      <div className={s.circleContainer}>
        <div
          className={`${s.circle} ${currentImage === 0 ? s.active : ""}`}
          onClick={() => setCurrentImage(0)}
        />
        <div
          className={`${s.circle} ${currentImage === 1 ? s.active : ""}`}
          onClick={() => setCurrentImage(1)}
        />
        <div
          className={`${s.circle} ${currentImage === 2 ? s.active : ""}`}
          onClick={() => setCurrentImage(2)}
        />
      </div>
    </section>
  );
};

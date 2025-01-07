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
    if (currentImage === 2) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function previousImage() {
    if (currentImage === 0) {
      setCurrentImage(2);
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
    <div className={s.carousel}>
      <img src={imageArray[currentImage]} alt="" />
      <h2>Vi elsker at lave brød</h2>
      <div className={s.navigation}>
        <button className={s.left} onClick={() => previousImage()}>
          left
        </button>
        <button className={s.right} onClick={() => nextImage()}>
          right
        </button>
      </div>
      <div className={s.circleContainer}>
        <span className={s.circle} onClick={() => setCurrentImage(1)} />
        <span className={s.circle} onClick={() => setCurrentImage(2)} />
        <span className={s.circle} onClick={() => setCurrentImage(3)} />
      </div>
    </div>
  );
};

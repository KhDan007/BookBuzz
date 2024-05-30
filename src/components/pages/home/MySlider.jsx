import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../img/home/1.jpg";
import { ProgressBar } from "./ProgressBar";
import { useEffect, useState } from "react";

export const MySlider = () => {
  const defaultSettings = {
    dots: true,
    appendDots: (dots) => (
      <div style={{ marginTop: "10px" }}>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [settings, setSettings] = useState(defaultSettings)
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div className="slider__block">
            <div className="slider__image">
              <img src={image1} alt="1" />
            </div>
            <div className="flex slider__description">
              <div className="slider__subimage">
                <img src={image1} alt="1" />
              </div>
              <div className="slider__col">
                <div className="slider__title">
                  To Kill A Mockingbird
                </div>
                <div className="slider__progress">
                  <div className="slider__progress-text">
                    {progress}% completed
                  </div>
                  <ProgressBar value={progress} max={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="slider__block">
            <div className="slider__image">
              <img src={image1} alt="1" />
            </div>
            <div className="flex slider__description">
              <div className="slider__subimage">
                <img src={image1} alt="1" />
              </div>
              <div className="slider__col">
                <div className="slider__title">
                  To Kill A Mockingbird
                </div>
                <div className="slider__progress">
                  <div className="slider__progress-text">
                    {progress}% completed
                  </div>
                  <ProgressBar value={progress} max={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="slider__block">
            <div className="slider__image">
              <img src={image1} alt="1" />
            </div>
            <div className="flex slider__description">
              <div className="slider__subimage">
                <img src={image1} alt="1" />
              </div>
              <div className="slider__col">
                <div className="slider__title">
                  To Kill A Mockingbird
                </div>
                <div className="slider__progress">
                  <div className="slider__progress-text">
                    {progress}% completed
                  </div>
                  <ProgressBar value={progress} max={100} />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

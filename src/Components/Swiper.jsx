import { useState } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaTimes,
} from "react-icons/fa";

/*eslint-disable react/prop-types*/
function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider flex-wrap md:flex-nowrap md:flex-col p-10 gap-5 ">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <FaArrowAltCircleLeft
              size={36}
              color="white"
              className="cursor-pointer md:absolute md:top-[43%] md:left-6"
            />
          </div>
          <div className="imgContainer mt-2">
            <img className="rounded-md" src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <FaArrowAltCircleRight
              size={36}
              color="white"
              className="md:absolute md:top-[43%] md:right-6 md:cursor-pointer"
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            <FaTimes
              size={30}
              color="white"
              className="text-black hover:text-[#536cb0] cursor-pointer"
            />
          </div>

          <div className="flex gap-5 items-center flex-wrap">
            {" "}
            {images.map((img, index) => (
              <img
                key={img}
                src={img}
                className={`md:h-24 h-full rounded-md cursor-pointer ${
                  index !== imageIndex ? "opacity-55" : ""
                }`}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          className="rounded-md cursor-pointer"
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages ">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
            className="rounded-md cursor-pointer "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

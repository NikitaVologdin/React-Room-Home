import { motion } from "motion/react";
import { ISlide } from "../types/slide";
import Picture from "./Picture";

interface props {
  slides: ISlide[];
  index: number;
}

export default function Slider({ index, slides }: props) {
  return (
    <div className="slider">
      <motion.div
        className="slider__images"
        custom={index}
        animate={{ x: `${index * -100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {slides.map((slide) => {
          return <Picture slide={slide} key={slide.img.src} />;
        })}
      </motion.div>
    </div>
  );
}

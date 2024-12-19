import { ISlide } from "../types/slide";

interface props {
  slide: ISlide;
}

export default function Picture({ slide }: props) {
  return (
    <picture>
      {slide.sources.map((source) => {
        return (
          <source
            media={source.media}
            srcSet={source.srcSet}
            key={source.srcSet}
          ></source>
        );
      })}
      <img
        className="slider__img"
        src={slide.img.src}
        alt={slide.img.alt}
        width={slide.img.width}
        height={slide.img.height}
      />
    </picture>
  );
}

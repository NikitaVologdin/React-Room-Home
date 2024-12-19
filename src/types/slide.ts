export interface ISlide {
  sources: ISource[];
  img: { width: number; height: number; src: string; alt: string };
}

interface ISource {
  media: string;
  srcSet: string;
}

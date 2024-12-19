const slides = [
  {
    sources: [
      {
        media: "(max-width: 480px)",
        srcSet: "/images/mobile-image-hero-1.webp",
      },
      {
        media: "(min-width: 481px)",
        srcSet: "/images/desktop-image-hero-1.webp",
      },
    ],
    img: {
      width: 375,
      height: 360,
      src: "images/mobile-image-hero-1.webp",
      alt: "Two modern designed white chairs shows creativeness",
    },
  },
  {
    sources: [
      {
        media: "(max-width: 480px)",
        srcSet: "/images/mobile-image-hero-2.webp",
      },
      {
        media: "(min-width: 481px)",
        srcSet: "/images/desktop-image-hero-2.webp",
      },
    ],
    img: {
      width: 375,
      height: 360,
      src: "/images/mobile-image-hero-2.webp",
      alt: "Three soft color chairs shows skill of creating comfort",
    },
  },
  {
    sources: [
      {
        media: "(max-width: 480px)",
        srcSet: "/images/mobile-image-hero-3.webp",
      },
      {
        media: "(min-width: 481px)",
        srcSet: "/images/desktop-image-hero-3.webp",
      },
    ],
    img: {
      width: 375,
      height: 360,
      src: "/images/mobile-image-hero-3.webp",
      alt: "Single black chair shows feeling of minimalism",
    },
  },
];

export default slides;

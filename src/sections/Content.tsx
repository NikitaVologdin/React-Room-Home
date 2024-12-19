export default function Content() {
  return (
    <section className="content">
      <img
        src="/images/image-about-dark.webp"
        className="content__image content__image_dark"
        width={376}
        height={238}
        alt=""
        loading="lazy"
      />
      <article className="content__article">
        <h2 className="content-article__heading">ABOUT OUR FURNITURE</h2>
        <p className="content-article__paragraph">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.{" "}
        </p>
      </article>
      <img
        src="/images/image-about-light.webp"
        className="content__image content__image_light"
        width={376}
        height={238}
        alt=""
        loading="lazy"
      />
    </section>
  );
}

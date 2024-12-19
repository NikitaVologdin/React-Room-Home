import { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IArticle } from "../types/article";

interface props {
  article: IArticle;
  children: ReactNode;
}

export default function Article({ article, children }: props) {
  return (
    <article className="article">
      <AnimatePresence>
        <motion.div
          className="article__wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          key={article.heading}
        >
          <h1 className="article__heading">{article.heading}</h1>
          <p className="article__paragraph">{article.paragraph}</p>
          <a className="article__link" href="#">
            <span className="article__link-text">shop now </span>
            <svg
              className="article__link-icon"
              width="40"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          </a>
        </motion.div>

        {children}
      </AnimatePresence>
    </article>
  );
}

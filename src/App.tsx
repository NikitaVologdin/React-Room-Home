import Header from "./sections/Header";
import Main from "./sections/Main";
import Logo from "./ui/Logo";
import Nav from "./ui/Nav";
import Hamburger from "./ui/Hamburger";
import Slider from "./components/Slider";
import Article from "./components/Article";
import SliderControl from "./components/SliderControl";
import Dialog from "./components/Dialog";
import Content from "./sections/Content";
import slides from "./data/slides";
import articles from "./data/articles";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Header>
        <Hamburger onOpenDialog={setOpenDialog} />
        <Logo />
        <Nav />
      </Header>
      <Main>
        <Slider slides={slides} index={index} />
        <Article article={articles[index]}>
          <SliderControl
            index={index}
            onChangeIndex={setIndex}
            slidesLength={slides.length}
          />
        </Article>
        <Content />
      </Main>
      <AnimatePresence>
        {openDialog ? (
          <Dialog openDialog={openDialog} onOpenDialog={setOpenDialog} />
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}

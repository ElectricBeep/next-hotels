import React from "react";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";

import styles from "../styles/PhotoSlider.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const PhotoSlider = (props) => {
  const slides = [
    {
      id: 1,
      name: "Sarajevo sebilj",
      img: "sebilj.webp",
      title: props.t("photoSilderFirst"),
      link: "https://en.wikipedia.org/wiki/Ba%C5%A1%C4%8Dar%C5%A1ija"
    },
    {
      id: 2,
      name: "Sarajevo kazandziluk street",
      img: "kazandziluk.webp",
      title: props.t("photoSilderTwo"),
      link: "https://sr.wikipedia.org/sr-el/%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%9F%D0%B8%D0%BB%D1%83%D0%BA"
    },
    {
      id: 3,
      name: "Sarajevo street decoration",
      img: "blend.webp",
      title: props.t("photoSliderThree"),
      link: "https://en.wikipedia.org/wiki/Sarajevo"
    },
    {
      id: 4,
      name: "Sarajevo Ferhadija street",
      img: "ferhadija.webp",
      title: props.t("photoSliderFour"),
      link: "https://en.wikipedia.org/wiki/Ferhadija_street"
    },
    {
      id: 5,
      name: "Sarajevo clock tower",
      img: "clockTower.webp",
      title: props.t("photoSliderFive"),
      link: "https://en.wikipedia.org/wiki/Sarajevo_Clock_Tower"
    },
    {
      id: 6,
      name: "Sarajevo mosque",
      img: "husrev.webp",
      title: props.t("photoSliderSix"),
      link: "https://en.wikipedia.org/wiki/Gazi_Husrev-beg_Mosque"
    },
    {
      id: 7,
      name: "Sarajevo Bezistan",
      img: "bezistan.webp",
      title: props.t("photoSliderSeven"),
      link: "https://en.wikipedia.org/wiki/Gazi_Husrev-begov_bezistan"
    },
    {
      id: 8,
      name: "Sarajevo City Hall",
      img: "cityHall.webp",
      title: props.t("photoSliderEight"),
      link: "https://en.wikipedia.org/wiki/Vije%C4%87nica"
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 380;

  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 380;

  };

  return (
    <div className={styles.mainSliderContainer}>
      <MdChevronLeft size={50} className={`${styles.sliderIcon} ${styles.left}`} onClick={slideLeft} />
      <motion.div
        id="slider"
        className={styles.slider}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amoung: 0.45 }}
      >
        {slides.map((slide, i) => (
          <motion.div
            className={styles.sliderCard}
            key={slide.id}
            variants={slideIn("right", "spring", i * 0.2, 2.5)}
          >
            <div className={styles.sliderCardImageContainer}>
              <Link href={slide.link} target="_blank" rel="noreferrer">
                <img src={`/img/attraction/${slide.img}`} alt={slide.title} className={styles.image} fill="true" />
              </Link>
            </div>
            <Link href={slide.link} target="_blank" rel="noreferrer" aria-label="">
              <h2 className={styles.sliderCardTitle}>{slide.title}</h2>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <MdChevronRight size={50} className={`${styles.sliderIcon} ${styles.right}`} onClick={slideRight} />
    </div>
  )
}

export default PhotoSlider
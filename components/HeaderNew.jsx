import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles/HeaderNew.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { slideIn, staggerContainer, textVariant2, textContainer, textVariant3 } from "../utils/motion";

const HeaderNew = ({ title, t }) => {
  const [current, setCurrent] = useState(0);

  const featuredPhotos = [
    {
      id: 1,
      img: "featured/featured3.jpg",
    },
    {
      id: 2,
      img: "featured/featured4.jpg",
    },
    {
      id: 3,
      img: "featured/featured7.jpg",
    },
  ];

  const length = featuredPhotos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const handleClick = () => {
    const hotelsSection = document.getElementById("hotels");
    hotelsSection.scrollIntoView({ behavior: "smooth" });
  };

  if (!Array.isArray(featuredPhotos) || featuredPhotos.length <= 0) {
    return null;
  };

  return (
    <div className={styles.container}>
      <motion.div className={styles.wrapper}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amoung: 0.25 }}
      >
        <motion.div
          className={styles.left}
          variants={slideIn("left", "spring", 0.3, 1)}
        >
          <div className={styles.content}>
            <h2
              className={styles.titleTop}

            >
              {t("headerTitleOne")}
            </h2>
            <h1
              className={styles.titleMid}
              variants={textContainer}
            >
              {Array.from(title).map((letter, index) => (
                <span variants={textVariant2} key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
            <h2
              className={styles.titleBotTop}
              variants={slideIn("left", "spring", 0.9, 1)}
            >
              {t("headerTitleTwo")} <span className={styles.redText}>Sarajevo?</span>
            </h2>
            <h2
              className={styles.titleBotMid}
              variants={slideIn("left", "spring", 1.0, 1.2)}
            >
              {t("headerTitleThree1")} <span className={styles.bottomTitleSpan}>{t("headerTitleThree2")}</span>,
            </h2>
            <h3
              className={styles.titleBotBot}
              variants={slideIn("left", "spring", 1.1, 1.5)}
            >
              {t("headerTitleThree3")} <span className={styles.bottomTitleSpanTwo}>{t("headerTitleThree4")}</span>
            </h3>
            <a
              href="#hotels"
              className={styles.button}
              variants={slideIn("left", "spring", 1.1, 2)}
              onClick={handleClick}
            >
              {t("headerButtonScoll")}
            </a>
          </div>
        </motion.div>
        <motion.div
          className={styles.right}
          variants={slideIn("right", "spring", 0.3, 1)}
        >
          <div
            className={styles.imgContainer}
            variants={slideIn("up", "spring", 0.3, 1)}
          >
            <div
              className={`${styles.arrowIconContainer} ${styles.arrowLeft}`}
              variants={slideIn("left", "spring", 0.8, 1)}
            >
              <FiChevronLeft className={styles.arrowIcon} onClick={prevSlide} />
            </div>
            <div
              className={styles.mobileTitleContainer}
              variants={textContainer}
            >
              <h2
                variants={slideIn("up", "spring", 0.5, 1)}
              >
                {t("headerTitleOne")}
              </h2>
              <h1>
                {Array.from(title).map((letter, index) => (
                  <span variants={textVariant3} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>
            </div>
            {featuredPhotos.map((img, index) => (
              <div className={index === current ? styles.slideActive : styles.slide} key={img.id}>
                {index === current && (
                  <img src={`/img/${img.img}`} alt="header" className={styles.img} />
                )}
              </div>
            ))}
            <div
              className={`${styles.arrowIconContainer} ${styles.arrowRight}`}
              variants={slideIn("right", "spring", 0.8, 1)}
            >
              <FiChevronRight className={styles.arrowIcon} onClick={nextSlide} />
            </div>
          </div>
          <div
            className={styles.dotContainer}
            variants={slideIn("down", "spring", 1, 1)}
          >
            {featuredPhotos.map((img, index) => (
              <div key={img.id} onClick={() => goToSlide(index)} className={current === index ? styles.activeDot : styles.dot}>
                &#9679;
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeaderNew
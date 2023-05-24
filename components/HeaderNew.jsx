import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles/HeaderNew.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { slideIn, staggerContainer } from "../utils/motion";

const HeaderNew = ({ t }) => {
  const [current, setCurrent] = useState(0);

  const featuredPhotos = [
    {
      id: 1,
      img: "featured/featured3.webp",
    },
    {
      id: 2,
      img: "featured/featured4.webp",
    },
    {
      id: 3,
      img: "featured/featured7.webp",
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

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amoung: 0.3 }}
      >
        <div
          className={styles.left}
          variants={slideIn("left", "spring", 0.3, 1)}
        >
          <div className={styles.content}>
            <h2 className={styles.titleTop}>
              {t("headerTitleOne")}
            </h2>
            <h1 className={styles.titleMid}>
              SARAJEVO
            </h1>
            <h2 className={styles.titleBotTop}>
              {t("headerTitleTwo")} <span className={styles.redText}>Sarajevo?</span>
            </h2>
            <h2 className={styles.titleBotMid}>
              {t("headerTitleThree1")} <span className={styles.bottomTitleSpan}>{t("headerTitleThree2")}</span>,
            </h2>
            <h3 className={styles.titleBotBot}>
              {t("headerTitleThree3")} <span className={styles.bottomTitleSpanTwo}>{t("headerTitleThree4")}</span>
            </h3>
            <a
              href="#hotels"
              className={styles.button}
              onClick={handleClick}
            >
              {t("headerButtonScoll")}
            </a>
          </div>
        </div>
        <div
          className={styles.right}
          variants={slideIn("right", "spring", 0.3, 1)}
        >
          <div className={styles.imgContainer}>
            <div className={`${styles.arrowIconContainer} ${styles.arrowLeft}`}>
              <FiChevronLeft className={styles.arrowIcon} onClick={prevSlide} />
            </div>
            <div className={styles.mobileTitleContainer}>
              <h2>
                {t("headerTitleOne")}
              </h2>
              <h1>SARAJEVO</h1>
            </div>
            {featuredPhotos.map((img, index) => (
              <div className={index === current ? styles.slideActive : styles.slide} key={img.id}>
                {index === current && (
                  <img src={`/img/${img.img}`} alt="header" className={styles.img} />
                )}
              </div>
            ))}
            <div className={`${styles.arrowIconContainer} ${styles.arrowRight}`}>
              <FiChevronRight className={styles.arrowIcon} onClick={nextSlide} />
            </div>
          </div>
          <div className={styles.dotContainer}>
            {featuredPhotos.map((img, index) => (
              <div key={img.id} onClick={() => goToSlide(index)} className={current === index ? styles.activeDot : styles.dot}>
                &#9679;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNew
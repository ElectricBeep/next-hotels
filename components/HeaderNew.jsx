import React, { useState } from "react";
import { motion } from "framer-motion";

import { featuredPhotos } from "@/featuredPhotosData";
import styles from "../styles/HeaderNew.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { slideIn, staggerContainer, textVariant2, textContainer, textVariant3 } from "../utils/motion";

const HeaderNew = ({ title, t }) => {
  const [current, setCurrent] = useState(0);
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

  if (!Array.isArray(featuredPhotos) || featuredPhotos.length <= 0) {
    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <div className={styles.content}>
            <motion.h2
              className={styles.titleTop}
              variants={slideIn("left", "spring", 0.3, 1)}
            >
              {t("headerTitleOne")}
            </motion.h2>
            <motion.h1
              className={styles.titleMid}
              variants={textContainer}
            >
              {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2
              className={styles.titleBotTop}
              variants={slideIn("left", "spring", 0.9, 1)}
            >
              {t("headerTitleTwo")} <span className={styles.redText}>Sarajevo?</span>
            </motion.h2>
            <motion.h2
              className={styles.titleBotMid}
              variants={slideIn("left", "spring", 1.0, 1.2)}
            >
              {t("headerTitleThree1")} <span className={styles.bottomTitleSpan}>{t("headerTitleThree2")}</span>,
            </motion.h2>
            <motion.h3
              className={styles.titleBotBot}
              variants={slideIn("left", "spring", 1.1, 1.5)}
            >
              {t("headerTitleThree3")} <span className={styles.bottomTitleSpanTwo}>{t("headerTitleThree4")}</span>
            </motion.h3>
            <motion.a
              href="#hotels"
              className={styles.button}
              variants={slideIn("left", "spring", 1.2, 1.8)}
            >
              {t("headerButton")}
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className={styles.right}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <motion.div
            className={styles.imgContainer}
            variants={slideIn("up", "spring", 0.3, 1)}
          >
            <motion.div
              className={`${styles.arrowIconContainer} ${styles.arrowLeft}`}
              variants={slideIn("left", "spring", 0.8, 1)}
            >
              <FiChevronLeft className={styles.arrowIcon} onClick={prevSlide} />
            </motion.div>
            <motion.div
              className={styles.mobileTitleContainer}
              variants={textContainer}
            >
              <motion.h2
                variants={slideIn("up", "spring", 0.5, 1)}
              >
                {t("headerTitleOne")}
              </motion.h2>
              <motion.h1>
                {Array.from(title).map((letter, index) => (
                  <motion.span variants={textVariant3} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
            {featuredPhotos.map((img, index) => (
              <div className={index === current ? styles.slideActive : styles.slide} key={img.id}>
                {index === current && (
                  <img src={`/img/${img.img}`} className={styles.img} />
                )}
              </div>
            ))}
            <motion.div
              className={`${styles.arrowIconContainer} ${styles.arrowRight}`}
              variants={slideIn("right", "spring", 0.8, 1)}
            >
              <FiChevronRight className={styles.arrowIcon} onClick={nextSlide} />
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.dotContainer}
            variants={slideIn("down", "spring", 1, 1)}
          >
            {featuredPhotos.map((img, index) => (
              <div key={img.id} onClick={() => goToSlide(index)} className={current === index ? styles.activeDot : styles.dot}>
                &#9679;
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeaderNew
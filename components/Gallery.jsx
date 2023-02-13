import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "../styles/Gallery.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const Gallery = ({ photos, t }) => {

  const [current, setCurrent] = useState(0);
  const length = photos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amoung: 0.25 }}
      >
        <motion.h1 variants={slideIn("up", "spring", 0.3, 1)}>
          {t("galleryTitle")}
        </motion.h1>
        <motion.div
          className={styles.imgContainer}
          variants={slideIn("up", "spring", 0.4, 1)}
        >
          <div className={styles.leftArrow} onClick={prevSlide} >
            <FiChevronLeft className={styles.icon} />
          </div>
          <div className={styles.dotContainer}>
            {photos.length < 13 && photos.map((img, index) => (
              <div key={img.id} onClick={() => goToSlide(index)} className={current === index ? styles.activeDot : styles.dot}>
                &#9679;
              </div>
            ))}
          </div>
          {photos.map((img, index) => (
            <div className={index === current ? styles.slideActive : styles.slide} key={img.id}>
              {index === current && (
                <img src={`/img/${img.img}`} alt={img.title} className={styles.img} />
              )}
            </div>
          ))}
          <div className={styles.rightArrow} onClick={nextSlide} >
            <FiChevronRight className={styles.icon} />
          </div>
        </motion.div>
        <div className={styles.smallImgContainer}>
          {photos.length < 13 && photos.map((img, index) => (
            <img src={`/img/${img.img}`} key={img.id} onClick={() => goToSlide(index)} className={current === index ? styles.activeSmallImg : styles.smallImg} />
          ))}
        </div>
      </motion.div>
    </div >
  )
}

export default Gallery
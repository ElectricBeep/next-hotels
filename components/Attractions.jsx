import React from "react";
import PhotoSlider from "./PhotoSlider";
import { motion } from "framer-motion";

import styles from "../styles/Attractions.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const Attractions = ({ t }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.h1
          className={styles.heading}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <motion.span variants={slideIn("up", "spring", 0.3, 1)}>
            {t("attractionsTitle")}
          </motion.span>
        </motion.h1>
        <hr className={styles.hr} />
        <div className={styles.contentContainer}>
          <motion.div
            className={styles.left}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amoung: 0.45 }}
          >
            <motion.h1
              className={styles.title}
              variants={slideIn("left", "spring", 0.4, 1)}
            >
              {t("attractionsDescTitle")}
            </motion.h1>
            <motion.h2 variants={slideIn("left", "spring", 0.5, 1)}>
              <span className={styles.subtitleFirstWord}>{t("attractionsTextFirst")}</span>, <span className={styles.subtitle}>{t("attractionsTextSecond")}</span>
            </motion.h2>
            <motion.div
              className={styles.leftBottom}
              variants={slideIn("up", "spring", 0.6, 1)}
            >
              {t("attractionsSubtitle")}
            </motion.div>
          </motion.div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <div className={styles.cardContainer}>
                <PhotoSlider t={t} />
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
      </div>
    </div>
  )
}

export default Attractions
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "../styles/HotelsSection.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const HotelsSection = ({ t, direction, imgOne, imgTwo, features, hotelTitle, hotelAddress, hotelDesc, linkOne, linkTwo }) => {
  return (
    <div className={styles.container} id="hotels">
      {direction === "left" && (
        <motion.h1
          className={styles.heading} id="hotels"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.45 }}
        >
          <motion.span variants={slideIn("up", "spring", 0.3, 1)}>
            {t("hotelSectionHeader")}
          </motion.span>
        </motion.h1>
      )}
      <div className={direction === 'left' || direction === 'leftTwo' ? styles.wrapperLeft : styles.wrapperRight}>
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.45 }}
        >
          <motion.img
            variants={direction === 'left' || direction === 'leftTwo' ? slideIn("left", "spring", 0.4, 1) : slideIn("right", "spring", 0.4, 1)}
            src={`/img/featured/${imgOne}`}
            alt="hotels sarajevo"
            className={styles.firstImage}
          />
          <motion.img
            variants={direction === 'left' || direction === 'leftTwo' ? slideIn("left", "spring", 0.45, 1) : slideIn("right", "spring", 0.45, 1)}
            src={`/img/featured/${imgTwo}`}
            alt="hotels sarajevo"
            className={styles.secondImage}
          />
        </motion.div>
        <div className={styles.right}>
          <motion.div
            className={styles.rightContainer}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amoung: 0.45 }}
          >
            <hr className={styles.hr} />
            <motion.h2
              className={styles.rightTitle}
              variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.4, 1) : slideIn("left", "spring", 0.4, 1)}
            >
              {hotelTitle}
            </motion.h2>
            <motion.p
              className={styles.rightAddress}
              variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.4, 1) : slideIn("left", "spring", 0.43, 1)}
            >
              <FaMapMarkerAlt /><span>{hotelAddress}</span>
            </motion.p>
            <motion.p
              className={styles.rightText}
              variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.45, 2) : slideIn("left", "spring", 0.45, 2)}
            >
              {hotelDesc}
            </motion.p>
            <Link href={`/hotel/${linkOne}`}>
              <motion.button
                className={styles.readMoreButton}
                variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.5, 2) : slideIn("left", "spring", 0.5, 2)}
              >
                {t("hotelsSectionButton")}
                <FaArrowRight className={styles.leftBottomIcon} />
              </motion.button>
            </Link>
            <div className={styles.pillsContainer}>
              {features.map((feature, i) => (
                <motion.div
                  className={styles.pill}
                  key={feature.id}
                  variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", i * 0.2, 3) : slideIn("left", "spring", i * 0.2, 3)}
                >
                  {feature.feature}
                  {feature.icon}
                </motion.div>
              ))}
            </div>
            <Link href={linkTwo}>
              <motion.button
                className={styles.button}
                variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.8, 2) : slideIn("left", "spring", 0.8, 2)}
              >
                {t("headerButton")}
              </motion.button>
            </Link>
            <hr className={styles.hr} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HotelsSection
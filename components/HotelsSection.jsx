import React from "react";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "../styles/HotelsSection.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const HotelsSection = ({ t, direction, imgOne, imgTwo, features, hotelTitle, hotelAddress, hotelDesc, linkOne, linkTwo }) => {
  return (
    <div
      className={styles.container}
      id="hotels"
    >
      {direction === "left" && (
        <h1 className={styles.heading}>
          <span>
            {t("hotelSectionHeader")}
          </span>
        </h1>
      )}
      <div className={direction === 'left' || direction === 'leftTwo' ? styles.wrapperLeft : styles.wrapperRight}>
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.55 }}
        >
          <motion.img
            variants={direction === 'left' || direction === 'leftTwo' ? slideIn("left", "spring", 0.3, 1) : slideIn("right", "spring", 0.3, 1)}
            src={`/img/featured/${imgOne}`}
            alt="hotels sarajevo"
            className={styles.firstImage}
          />
          <motion.img
            variants={direction === 'left' || direction === 'leftTwo' ? slideIn("left", "spring", 0.3, 1) : slideIn("right", "spring", 0.3, 1)}
            src={`/img/featured/${imgTwo}`}
            alt="hotels sarajevo"
            className={styles.secondImage}
          />
        </motion.div>
        <motion.div
          className={styles.right}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.55 }}
        >
          <div className={styles.rightContainer}>
            <hr className={styles.hr} />
            <motion.h2
              className={styles.rightTitle}
              variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.3, 1) : slideIn("left", "spring", 0.3, 1)}
            >
              {hotelTitle}
            </motion.h2>
            <motion.p
              className={styles.rightAddress}
              variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.35, 1) : slideIn("left", "spring", 0.35, 1)}
            >
              <FaMapMarkerAlt /><span>{hotelAddress}</span>
            </motion.p>
            <motion.p
              className={styles.rightText}
              variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.4, 1) : slideIn("left", "spring", 0.4, 1)}
            >
              {hotelDesc}
            </motion.p>
            <Link href={`/hotel/${linkOne}`}>
              <button className={styles.readMoreButton}>
                {t("hotelsSectionButton")}
                <FaArrowRight className={styles.leftBottomIcon} />
              </button>
            </Link>
            <motion.div
              className={styles.pillsContainer}
              variants={direction === 'left' || direction === 'leftTwo' ? slideIn("right", "spring", 0.45, 1) : slideIn("left", "spring", 0.45, 1)}
            >
              {features.map((feature) => (
                <div
                  className={styles.pill}
                  key={feature.id}
                >
                  {feature.feature}
                  {feature.icon}
                </div>
              ))}
            </motion.div>
            <Link href={linkTwo}>
              <button className={styles.button}>
                {t("headerButton")}
              </button>
            </Link>
            <hr className={styles.hr} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HotelsSection
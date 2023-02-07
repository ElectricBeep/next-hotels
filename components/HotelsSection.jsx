import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "../styles/HotelsSection.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const HotelsSection = ({ direction, imgOne, imgTwo, features, hotelTitle, hotelDesc, linkOne, linkTwo }) => {

  return (
    <div className={styles.container}>
      {direction === "left" && (
        <motion.h1
          className={styles.heading} id="hotels"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.45 }}
        >
          <motion.span variants={slideIn("up", "spring", 0.3, 1)}>
            Browser our Hotels
          </motion.span>
        </motion.h1>
      )}
      <div className={direction === 'left' ? styles.wrapperLeft : styles.wrapperRight}>
        <motion.div
          className={styles.left}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.45 }}
        >
          <motion.img
            variants={direction === 'left' ? slideIn("left", "spring", 0.4, 1) : slideIn("right", "spring", 0.4, 1)}
            src={`/img/featured/${imgOne}`}
            alt="hotels sarajevo"
            className={styles.firstImage}
          />
          <motion.img
            variants={direction === 'left' ? slideIn("left", "spring", 0.45, 1) : slideIn("right", "spring", 0.45, 1)}
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
            <motion.h1
              className={styles.rightTitle}
              variants={direction === 'left' ? slideIn("right", "spring", 0.4, 1) : slideIn("left", "spring", 0.4, 1)}
            >
              {hotelTitle}
            </motion.h1>
            <motion.p
              className={styles.rightText}
              variants={direction === 'left' ? slideIn("right", "spring", 0.45, 1) : slideIn("left", "spring", 0.45, 1)}
            >
              {hotelDesc}
            </motion.p>
            <Link href={`/hotel/${linkOne}`}>
              <motion.button
                className={styles.readMoreButton}
                variants={direction === 'left' ? slideIn("right", "spring", 0.5, 1) : slideIn("left", "spring", 0.5, 1)}
              >
                View Photos
                <FaArrowRight className={styles.leftBottomIcon} />
              </motion.button>
            </Link>
            <div className={styles.pillsContainer}>
              {features.map((feature, i) => (
                <motion.div
                  className={styles.pill}
                  key={feature.id}
                  variants={direction === 'left' ? slideIn("right", "spring", i * 0.2, 2.5) : slideIn("left", "spring", i * 0.2, 2.5)}
                >
                  {feature.feature}
                  {feature.icon}
                </motion.div>
              ))}
            </div>
            <Link href={linkTwo} target="_blank">
              <motion.button
                className={styles.button}
                variants={direction === 'left' ? slideIn("right", "spring", 0.8, 1) : slideIn("left", "spring", 0.8, 1)}
              >
                BOOK NOW
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
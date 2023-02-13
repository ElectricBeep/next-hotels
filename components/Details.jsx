import React from "react";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineEuroCircle, AiOutlineClockCircle } from "react-icons/ai";
import { motion } from "framer-motion";

import styles from "../styles/Details.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const Details = ({ t }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <motion.div
            className={styles.one}
            variants={slideIn("up", "spring", 0.4, 1)}
          >
            <BsGlobe className={styles.icon} />
            <h2>{t("detailsOneTitle")}</h2>
            <p>
              {t("detailsOneText")}
            </p>
          </motion.div>
          <motion.div
            className={styles.two}
            variants={slideIn("up", "spring", 0.4, 1)}
          >
            <AiOutlineEuroCircle className={styles.icon} />
            <h2>{t("detailsTwoTitle")}</h2>
            <p>
              {t("detailsTwoText")}
            </p>
          </motion.div>
          <motion.div
            className={styles.three}
            variants={slideIn("up", "spring", 0.4, 1)}
          >
            <AiOutlineClockCircle className={styles.icon} />
            <h2>{t("detailsThreeTitle")}</h2>
            <p>{t("detailsThreeText")}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Details
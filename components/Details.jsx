import React from "react";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineEuroCircle, AiOutlineClockCircle } from "react-icons/ai";
import { motion } from "framer-motion";

import styles from "../styles/Details.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const Details = () => {
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
            <h2>Language</h2>
            <p>
              The main official languages of Bosnia and Herzegovina are Bosnian, Croation and Serbian. Besides the Shtokavian dialect, on which Standard language is based, there are two other main dialects spoken on the territory of Bosnia, Chakavian and Kajkavian.
            </p>
          </motion.div>
          <motion.div
            className={styles.two}
            variants={slideIn("up", "spring", 0.4, 1)}
          >
            <AiOutlineEuroCircle className={styles.icon} />
            <h2>What's Bosnia's currency?</h2>
            <p>
              The official currency of Bosnia and Herzegovia is the convertible mark (BAM).
            </p>
          </motion.div>
          <motion.div
            className={styles.three}
            variants={slideIn("up", "spring", 0.4, 1)}
          >
            <AiOutlineClockCircle className={styles.icon} />
            <h2>Time zone</h2>
            <p>Central European Standard Time (GMT+1)</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Details
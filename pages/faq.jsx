import Head from "next/head";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Details from "../components/Details";
import styles from "../styles/FAQ.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

const FAQ = () => {
  const { t } = useTranslation("common");
  const [selected, setSelected] = useState(null);

  const handleToggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const questions = [
    {
      id: 1,
      question: t("faqQOne"),
      answer: t("faqAOne")
    },
    {
      id: 2,
      question: t("faqQTwo"),
      answer: t("faqATwo")
    },
    {
      id: 3,
      question: t("faqQThree"),
      answer: t("faqAThree")
    },
    {
      id: 4,
      question: t("faqQFour"),
      answer: t("faqAFour")
    },
    {
      id: 5,
      question: t("faqQFive"),
      answer: t("faqAFive")
    },
  ];

  return (
    <>
      <Head>
        <title>Sarajevo Hotels FAQ</title>
        <meta name="description" content="Sarajevo Hotels FAQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amoung: 0.25 }}
          >
            <motion.h1
              className={styles.mainTitle}
              variants={slideIn("up", "spring", 0.2, 1)}
            >
              {t("faqTitle")}
            </motion.h1>
          </motion.div>
          <div className={styles.contentContainer}>
            <motion.div
              className={styles.left}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              {questions.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={styles.item}
                  variants={slideIn("left", "spring", i * 0.3, 1)}
                >
                  <div className={styles.title} onClick={() => handleToggle(i)}>
                    <h3>{item.question}</h3>
                    {
                      selected === i
                        ? <IoIosArrowUp className={styles.icon} />
                        : <IoIosArrowDown className={styles.icon} />
                    }
                  </div>
                  <div className={selected === i ? `${styles.content} ${styles.show}` : styles.content}>{item.answer}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className={styles.right}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              <div className={styles.imgContainer}>
                <motion.img
                  src="/img/sebilj.jpg"
                  alt="the city of Sarajevo"
                  className={styles.img}
                  variants={slideIn("right", "spring", 0.3, 1)}
                />
                <motion.div
                  className={styles.text}
                  variants={slideIn("right", "spring", 0.3, 1)}
                >
                  {t("faqDesc")}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Details t={t} />
    </>
  )
}

export default FAQ
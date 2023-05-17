import Head from "next/head";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Details from "../components/Details";
import styles from "../styles/FAQ.module.css";
import { slideIn, staggerContainer } from "../utils/motion";
import Script from "next/script";

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
        <title>Sarajevo Hecco Hotels FAQ</title>
        <meta name="description" content="Frequently asked questions about Sarajevo Hecco Hotels. Find answers to common inquiries about our services, amenities, reservations, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
        <link rel="apple-touch-icon" href="/hotel.png" />
        <meta property="og:title" content="Sarajevo Hotels FAQ" />
        <meta property="og:description" content="Frequently asked questions about Sarajevo Hecco Hotels. Find answers to common inquiries about our services, amenities, reservations, and more." />
        <meta property="og:image" content="/hotel.png" />
        <link rel="canonical" href="https://www.hecco-hotels-sarajevo.com/faq" />
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
                    <p>{item.question}</p>
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
                  src="/img/sebiljSarajevo.jpg"
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
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What's the best time of year to visit Sarajevo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best time to visit Bosnia-Herzegovina is May, June and early September, when the heat fades and the hiking is idyllic. February and March are great for winter activities, as the sun is out and the days are longer than in midwinter."
                }
              },
              {
                "@type": "Question",
                name: "Do I need passport or visa to enter the country?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bosnia and Herzegovina welcomes thousands of tourists every year. If you want to visit Bosnia, click the following link to check if you need a visa: https://visaguide.world/europe/bosnia-herzegovina-visa/"
                }
              },
              {
                "@type": "Question",
                name: "What are some basic facts about Sarajevo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sarajevo had the first tram in Europe, the second in the World. Sarajevo was first to have water supply network in 1400s. Sarajevo's event triggered the World War 1. Sarajevo held the Winter Olympic games in 1984. Sarajevo siege is the longest siege in modern hsitory."
                }
              },
              {
                "@type": "Question",
                name: "Where should I go in Sarajevo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sarajevo is a very historically significant city, its landmarks come with a story so it is recommended taking a walking tour of Sarajevo on your arrival. You can check some of Sarajevo's attractions on the Homepage."
                }
              },
              {
                "@type": "Question",
                name: "What major event happened in Sarajevo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The event in Sarajevo was the catalyst for the outbreak of World War I. Additionally, in the 1990s, Sarajevo suffered through the longest siege in modern history."
                }
              }
            ]
          })
        }}
      />
    </>
  )
}

export default FAQ
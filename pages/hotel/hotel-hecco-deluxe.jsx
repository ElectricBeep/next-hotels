import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Gallery from "../../components/Gallery";
import styles from "../../styles/HotelCosmopolit.module.css";
import { hotelTwoFeatures } from "../../hotelTwoFeatures";
import { slideIn, staggerContainer } from "../../utils/motion";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

const HotelHeccoDeluxe = () => {
  const { t } = useTranslation("common");

  const photos = [
    {
      id: 1,
      img: "deluxe/deluxe1.webp"
    },
    {
      id: 2,
      img: "deluxe/deluxe3.jpg"
    },
    {
      id: 3,
      img: "deluxe/deluxe4.JPG"
    },
    {
      id: 4,
      img: "deluxe/deluxe5.JPG"
    },
    {
      id: 5,
      img: "deluxe/deluxe7.jpg"
    },
    {
      id: 6,
      img: "deluxe/deluxe8.jpg"
    },
    {
      id: 7,
      img: "deluxe/deluxe9.jpg"
    },
    {
      id: 8,
      img: "deluxe/deluxe10.jpg"
    },
    {
      id: 9,
      img: "deluxe/deluxe12.jpg"
    },
    {
      id: 10,
      img: "deluxe/deluxe14.jpg"
    },
  ];

  return (
    <>
      <Head>
        <title>Hotel City View Deluxe Sarajevo</title>
        <meta name="description" content="Hotel City View Deluxe Sarajevo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div>
                <motion.div
                  className={styles.leftTop}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amoung: 0.25 }}
                >
                  <div>
                    <motion.h1
                      className={styles.leftTopTitle}
                      variants={slideIn("up", "spring", 0.3, 1)}
                    >
                      Hotel City View Deluxe
                    </motion.h1>
                    <motion.span
                      className={styles.leftTopSpan}
                      variants={slideIn("up", "spring", 0.4, 1)}
                    >
                      <FaMapMarkerAlt /> Ferhadija 2, 71000 Sarajevo, Bosnia and Herzegovina
                    </motion.span>
                  </div>
                  <Link href="/contact" className={styles.leftTopButton}>
                    <motion.span variants={slideIn("up", "spring", 0.45, 1)}>
                      {t("cosmoBook")}
                    </motion.span>
                  </Link>
                </motion.div>
                <div className={styles.leftBot}>
                  <motion.div
                    className={styles.pillsContainer}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amoung: 0.25 }}
                  >
                    {hotelTwoFeatures.map((feature, i) => (
                      <motion.div
                        className={styles.pill}
                        key={feature.id}
                        variants={slideIn("left", "spring", i * 0.2, 2.5)}
                      >
                        {feature.feature}
                        {feature.icon}
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    className={styles.leftBotTextContainer}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amoung: 0.25 }}
                  >
                    <motion.p variants={slideIn("left", "spring", 0.8, 1)}>
                      <b>{t("deluxeDesc")}</b>
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.85, 1)}>
                      {t("deluxeDescTwo")}
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.9, 1)}>
                      {t("deluxeDescThree")}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
              <BsArrowDownCircle className={styles.leftDownIcon} />
            </div>
            <motion.div
              className={styles.right}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              <motion.img
                variants={slideIn("right", "spring", 0.4, 1)}
                src="/img/featured/featured2.webp"
                alt="hotel City View deluxe"
                className={styles.rightImg}
              />
            </motion.div>
          </div>
          <Gallery photos={photos} t={t} />
        </div>
      </div>
    </>
  )
}

export default HotelHeccoDeluxe
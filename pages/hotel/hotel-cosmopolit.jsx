import React from "react"
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Gallery from "../../components/Gallery";
import { hotelOneFeatures } from "../../hotelOneFeatures";
import styles from "../../styles/HotelCosmopolit.module.css";
import { slideIn, staggerContainer } from "../../utils/motion";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

const HotelCosmopolit = () => {
  const { t } = useTranslation("common");

  const photos = [
    {
      id: 1,
      img: "cosmopolit/cosmopolit11.jpg"
    },
    {
      id: 2,
      img: "cosmopolit/cosmopolit12.JPG"
    },
    {
      id: 3,
      img: "cosmopolit/cosmopolit13.JPG"
    },
    {
      id: 4,
      img: "cosmopolit/cosmopolit4.jpg"
    },
    {
      id: 5,
      img: "cosmopolit/cosmopolit5.jpg"
    },
    {
      id: 6,
      img: "cosmopolit/cosmopolit6.jpg"
    },
    {
      id: 7,
      img: "cosmopolit/cosmopolit7.jpg"
    },
    {
      id: 8,
      img: "cosmopolit/cosmopolit18.JPG"
    },
  ];

  return (
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
                    Hotel Cosmopolit
                  </motion.h1>
                  <motion.span
                    className={styles.leftTopSpan}
                    variants={slideIn("up", "spring", 0.4, 1)}
                  >
                    <FaMapMarkerAlt /> Radiceva 15, 71000 Sarajevo, Bosna i Hercegovina
                  </motion.span>
                </div>
                <Link href="https://www.booking.com/hotel/ba/cosmopolit.hr.html" target="_blank" className={styles.leftTopButton}>
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
                  {hotelOneFeatures.map((feature, i) => (
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
                    <b>{t("cosmopolitDesc")}</b>
                  </motion.p>
                  <motion.p variants={slideIn("left", "spring", 0.85, 1)}>
                    {t("cosmoDescTwo")}
                  </motion.p>
                  <motion.p variants={slideIn("left", "spring", 0.9, 1)}>
                    {t("cosmoDescThree")}
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
              src="/img/featured/featured7.jpg"
              alt="hotel cosmopolit"
              className={styles.rightImg}
            />
          </motion.div>
        </div>
        <Gallery photos={photos} t={t} />
      </div>
    </div>
  )
}

export default HotelCosmopolit
import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Gallery from "../../components/Gallery";
import styles from "../../styles/HotelCosmopolit.module.css";
import { slideIn, staggerContainer } from "../../utils/motion";
import Head from "next/head";
import { hotelTwoFeatures } from "@/hotelFeatures";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

const HotelHecco = () => {
  const { t } = useTranslation("common");

  const photos = [
    {
      id: 1,
      img: "hecco/hecco3.webp"
    },
    {
      id: 2,
      img: "hecco/hecco4.webp"
    },
    {
      id: 3,
      img: "hecco/hecco5.webp"
    },
    {
      id: 4,
      img: "hecco/hecco6.webp"
    },
    {
      id: 5,
      img: "hecco/hecco7.webp"
    },
    {
      id: 6,
      img: "hecco/hecco8.webp"
    },
    {
      id: 7,
      img: "hecco/hecco9.webp"
    },
    {
      id: 8,
      img: "hecco/hecco10.webp"
    },
    {
      id: 9,
      img: "hecco/hecco11.webp"
    },
  ];

  return (
    <>
      <Head>
        <title>Hotel Hecco Sarajevo</title>
        <meta name="description" content="Experience modern comfort and exceptional hospitality at Hotel Hecco in Sarajevo. Our hotel, located near the city's cultural center, offers air-conditioned rooms with free Wi-Fi. Book your stay today and enjoy a remarkable experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
        <link rel="apple-touch-icon" href="/hotel.png" />
        <meta property="og:title" content="Hotel Hecco Sarajevo" />
        <meta property="og:description" content="Experience modern comfort and exceptional hospitality at Hotel Hecco in Sarajevo. Our hotel, located near the city's cultural center, offers air-conditioned rooms with free Wi-Fi. Book your stay today and enjoy a remarkable experience." />
        <meta property="og:image" content="/img/featured/featured6.webp" />
        <link rel="canonical" href="https://www.hecco-hotels-sarajevo.com/hotel/hotel-hecco" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Hecco Sarajevo",
              description: "Hotel Hecco Sarajevo offers modern comfort and exceptional hospitality. Located near the city's cultural center, our hotel provides air-conditioned rooms with free Wi-Fi. Experience the best of Sarajevo and book your stay at Hotel Hecco today.",
              image: "/img/featured/featured6.webp",
              url: "https://www.hecco-hotels-sarajevo.com/hotel/hotel-hecco",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Medresa 1 Street",
                addressLocality: "Sarajevo",
                postalCode: "71000",
                addressCountry: "Bosnia and Herzegovina"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.866440067632446,
                longitude: 18.432669683324896
              },
              telephone: "+38733273730",
              priceRange: "160BAM",
              acceptsReservations: "True"
            })
          }}
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <motion.div
              className={styles.left}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              <div>
                <div className={styles.leftTop}>
                  <div>
                    <motion.h1
                      className={styles.leftTopTitle}
                      variants={slideIn("up", "spring", 0.3, 1)}
                    >
                      Hotel Hecco
                    </motion.h1>
                    <motion.span
                      className={styles.leftTopSpan}
                      variants={slideIn("up", "spring", 0.35, 1)}
                    >
                      <FaMapMarkerAlt /> Medresa 1, 71000 Sarajevo, Bosnia and Herzegovina
                    </motion.span>
                  </div>
                  <Link href="/contact" className={styles.leftTopButton}>
                    <motion.span variants={slideIn("up", "spring", 0.35, 1)}>
                      {t("cosmoBook")}
                    </motion.span>
                  </Link>
                </div>
                <div className={styles.leftBot}>
                  <motion.div
                    className={styles.pillsContainer}
                    variants={slideIn("up", "spring", 0.4, 1)}
                  >
                    {hotelTwoFeatures.map((feature, i) => (
                      <div
                        className={styles.pill}
                        key={feature.id}
                      >
                        {feature.feature}
                        {feature.icon}
                      </div>
                    ))}
                  </motion.div>
                  <motion.div className={styles.leftBotTextContainer}>
                    <motion.p variants={slideIn("left", "spring", 0.45, 1)}>
                      <b>{t("hecoDesc")}</b>
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.5, 1)}>
                      {t("hecoDescTwo")}
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.55, 1)}>
                      {t("hecoDescThree")}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
              <BsArrowDownCircle className={styles.leftDownIcon} />
            </motion.div>
            <motion.div
              className={styles.right}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              <motion.img
                variants={slideIn("right", "spring", 0.4, 1)}
                src="/img/featured/heco2.webp"
                alt="hotel hecco"
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

export default HotelHecco
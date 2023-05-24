import React from "react"
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Gallery from "../../components/Gallery";
import { hotelOneFeatures } from "../../hotelFeatures";
import styles from "../../styles/HotelCosmopolit.module.css";
import { slideIn, staggerContainer } from "../../utils/motion";
import Head from "next/head";

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
      img: "cosmopolit/cosmopolit6.webp"
    },
    {
      id: 7,
      img: "cosmopolit/cosmopolit7.webp"
    },
    {
      id: 8,
      img: "cosmopolit/cosmopolit18.webp"
    },
    {
      id: 9,
      img: "cosmopolit/cosmopolit19.JPG"
    },
  ];

  return (
    <>
      <Head>
        <title>Hotel Cosmopolit Sarajevo</title>
        <meta name="description" content="Experience luxury and comfort at Hotel Cosmopolit in Sarajevo. Our hotel offers 16 luxurious rooms, exceptional amenities, and a prime location in the heart of the city. Book your stay today and enjoy a memorable experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
        <link rel="apple-touch-icon" href="/hotel.png" />
        <meta property="og:title" content="Hotel Cosmopolit Sarajevo" />
        <meta property="og:description" content="Experience luxury and comfort at Hotel Cosmopolit in Sarajevo. Our hotel offers 16 luxurious rooms, exceptional amenities, and a prime location in the heart of the city. Book your stay today and enjoy a memorable experience." />
        <meta property="og:image" content="/img/featured/featured7.webp" />
        <link rel="canonical" href="https://www.hecco-hotels-sarajevo.com/hotel/hotel-cosmopolit" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Cosmopolit Sarajevo",
              description: "Hotel Cosmopolit Sarajevo offers a perfect blend of luxury and comfort. With 16 luxurious rooms and exceptional amenities, we ensure our guests enjoy an exceptional experience during their stay. Discover the heart of the city and book your stay at Hotel Cosmopolit today.",
              image: "/img/featured/featured7.webp",
              url: "https://www.hecco-hotels-sarajevo.com/hotel/hotel-cosmopolit",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Radićeva 15 Street",
                addressLocality: "Sarajevo",
                postalCode: "71000",
                addressCountry: "Bosnia and Herzegovina"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.85781322192979,
                longitude: 18.417217999616973
              },
              telephone: "+38733251100",
              priceRange: "156BAM",
              acceptsReservations: "True"
            })
          }}
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amoung: 0.25 }}
              >
                <div className={styles.leftTop}>
                  <div>
                    <motion.h1
                      className={styles.leftTopTitle}
                      variants={slideIn("up", "spring", 0.3, 1)}
                    >
                      Hotel Cosmopolit
                    </motion.h1>
                    <motion.span
                      className={styles.leftTopSpan}
                      variants={slideIn("up", "spring", 0.35, 1)}
                    >
                      <FaMapMarkerAlt /> Radiceva 15, 71000 Sarajevo, Bosnia and Herzegovina
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
                    {hotelOneFeatures.map((feature, i) => (
                      <div
                        className={styles.pill}
                        key={feature.id}
                      >
                        {feature.feature}
                        {feature.icon}
                      </div>
                    ))}
                  </motion.div>
                  <div className={styles.leftBotTextContainer}>
                    <motion.p variants={slideIn("left", "spring", 0.45, 1)}>
                      <b>{t("cosmopolitDesc")}</b>
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.5, 1)}>
                      {t("cosmoDescTwo")}
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.55, 1)}>
                      {t("cosmoDescThree")}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
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
                src="/img/featured/featured7.webp"
                alt="hotel cosmopolit"
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

export default HotelCosmopolit
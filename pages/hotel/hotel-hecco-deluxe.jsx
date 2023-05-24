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

const HotelHeccoDeluxe = () => {
  const { t } = useTranslation("common");

  const photos = [
    {
      id: 1,
      img: "deluxe/deluxe1.jpg"
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
        <meta name="description" content="Experience breathtaking views and luxurious accommodations at Hotel City View Deluxe in Sarajevo. Our hotel, located on Ferhadija Street, offers stunning panoramic views of the entire city. Book your stay today and indulge in a remarkable experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
        <link rel="apple-touch-icon" href="/hotel.png" />
        <meta property="og:title" content="Hotel City View Deluxe Sarajevo" />
        <meta property="og:description" content="Experience breathtaking views and luxurious accommodations at Hotel City View Deluxe in Sarajevo. Our hotel, located on Ferhadija Street, offers stunning panoramic views of the entire city. Book your stay today and indulge in a remarkable experience." />
        <meta property="og:image" content="/img/featured/featured3.webp" />
        <link rel="canonical" href="https://www.hecco-hotels-sarajevo.com/hotel/hotel-hecco-deluxe" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel City View Deluxe Sarajevo",
              description: "Hotel City View Deluxe Sarajevo is renowned for its breathtaking views and luxurious accommodations. Situated on Ferhadija Street, our hotel offers panoramic views of the entire city. Discover a world of elegance and book your stay at Hotel City View Deluxe today.",
              image: "/img/featured/featured3.webp",
              url: "https://www.hecco-hotels-sarajevo.com/hotel/hotel-hecco-deluxe",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ferhadija 2 Street",
                addressLocality: "Sarajevo",
                postalCode: "71000",
                addressCountry: "Bosnia and Herzegovina"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.85868426883366,
                longitude: 18.421910579697865
              },
              telephone: "+38733559995",
              priceRange: "161BAM",
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
                      Hotel City View Deluxe
                    </motion.h1>
                    <motion.span
                      className={styles.leftTopSpan}
                      variants={slideIn("up", "spring", 0.35, 1)}
                    >
                      <FaMapMarkerAlt /> Ferhadija 2, 71000 Sarajevo, Bosnia and Herzegovina
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
                  <div className={styles.leftBotTextContainer}>
                    <motion.p variants={slideIn("left", "spring", 0.45, 1)}>
                      <b>{t("deluxeDesc")}</b>
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.5, 1)}>
                      {t("deluxeDescTwo")}
                    </motion.p>
                    <motion.p variants={slideIn("left", "spring", 0.55, 1)}>
                      {t("deluxeDescThree")}
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
                src="/img/featured/featured2.jpg"
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
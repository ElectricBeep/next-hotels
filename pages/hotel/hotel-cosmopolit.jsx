import React from "react"
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";

import Gallery from "../../components/Gallery";
import { hotelOneFeatures } from "../../hotelOneFeatures";
import styles from "../../styles/HotelCosmopolit.module.css";
import { slideIn, staggerContainer } from "../../utils/motion";

const HotelCosmopolit = () => {
  const photos = [
    {
      id: 1,
      img: "cosmopolit/cosmopolit1.jpg"
    },
    {
      id: 2,
      img: "cosmopolit/cosmopolit2.jpg"
    },
    {
      id: 3,
      img: "cosmopolit/cosmopolit3.jpg"
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
      img: "cosmopolit/cosmopolit8.jpg"
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
                    BOOK NOW
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
                    <b>Hotel se nalazi u strogom centru grada, tačnije u ulici Radićeva broj 15. Spoj je vrhunske udobnosti i kvalitete. Luksuznih 16 soba, opremljenih i dizajniranih po posljednjim svjetskim standardima, garancija su kvalitetnog i udobnog smještaja a naše gostoljubivo osoblje će dodatno upotpuniti vaš boravak u hotelu.</b>
                  </motion.p>
                  <motion.p variants={slideIn("left", "spring", 0.85, 1)}>
                    Bez obzira na razlog Vaše posjete sigurni smo da će Hotel Cosmopolit opravdati Vaš izbor kao i ukazano povjerenje.
                    Hotel u svom sastavu ima 16 soba, od kojih je 10 dvokrevetnih i 6 jednokrevetnih te iste posjeduju klimu,  LCD TV, Cable-SAT, WiFi internet konekciju koja je besplatna za goste hotela, direktnu telefonsku liniju, mini bar, sef i savremena kupatila.
                  </motion.p>
                  <motion.p variants={slideIn("left", "spring", 0.9, 1)}>
                    Hotel posjeduje vlastiti parking prostor koji se dodatno ne naplaćuje (za koji je potrebna rezervacija) a zbog svoje centralne lokacije hotel je posebno pogodan za studijska i poslovna putovanja jer se nalazi u neposrednoj blizini svih glavnih državnih institucija, poslovnih i kulturnih centara, shopping centara te svih mjesta gdje se održava većina poslovnih skupova, sajmova  i događaja zabavnog karaktera.
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
              src="/img/featured/featured6.jpg"
              alt="hotel cosmopolit"
              className={styles.rightImg}
            />
          </motion.div>
        </div>
        <Gallery photos={photos} />
      </div>
    </div>
  )
}

export default HotelCosmopolit
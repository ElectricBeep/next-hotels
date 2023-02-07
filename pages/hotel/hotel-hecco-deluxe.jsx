import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { motion } from "framer-motion";

import Gallery from "../../components/Gallery";
import styles from "../../styles/HotelCosmopolit.module.css";
import { hotelTwoFeatures } from "../../hotelTwoFeatures";
import { slideIn, staggerContainer } from "../../utils/motion";

const HotelHeccoDeluxe = () => {
  const photos = [
    {
      id: 1,
      img: "deluxe/deluxe1.jpg"
    },
    {
      id: 2,
      img: "deluxe/deluxe2.jpg"
    },
    {
      id: 3,
      img: "deluxe/deluxe3.jpg"
    },
    {
      id: 4,
      img: "deluxe/deluxe4.jpg"
    },
    {
      id: 5,
      img: "deluxe/deluxe5.jpg"
    },
    {
      id: 6,
      img: "deluxe/deluxe6.jpg"
    },
    {
      id: 7,
      img: "deluxe/deluxe7.jpg"
    },
    {
      id: 8,
      img: "deluxe/deluxe8.jpg"
    },
    {
      id: 9,
      img: "deluxe/deluxe9.jpg"
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
                    Hotel Hecco Deluxe
                  </motion.h1>
                  <motion.span
                    className={styles.leftTopSpan}
                    variants={slideIn("up", "spring", 0.4, 1)}
                  >
                    <FaMapMarkerAlt /> Ferhadija 2, 71000 Sarajevo, Bosnia and Herzegovina
                  </motion.span>
                </div>
                <Link href="https://www.booking.com/hotel/ba/hecco-deluxe.en-gb.html?aid=356980&label=gog235jc-1DCAsoEkIMaGVjY28tZGVsdXhlSDNYA2gSiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKg9PieBsACAdICJDZmN2Y4NzQ2LTZmNmEtNDZlZS1iYTk3LThlMGUyYjI4ODg4NNgCBOACAQ&sid=1ebcd1c25d8b009ffb9395189be3b58b&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&" target="_blank" className={styles.leftTopButton}>
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
                    <b>Hotel Hecco Deluxe smješten je u samom srcu Sarajeva, u ulici Ferhadija 2, na posljednja 4 sprata visoke poslovne zgrade, odakle se pruža predivan pogled na cijeli grad i okolna brda.</b>
                  </motion.p>
                  <motion.p variants={slideIn("left", "spring", 0.85, 1)}>
                    Hotel u svom sastavu ima 12 soba te iste posjeduju klimu,  LCD TV, Cable-SAT, WiFi internet konekciju koja je besplatna za goste hotela, direktnu telefonsku liniju, mini bar, sef i savremena kupatila. Sve su sobe luksuzno opremljene i dizajnirane da udovolje potrebama turističkim i poslovnim putnicima. Zgrada je smještena u živahnoj sarajevskoj pješačkoj zoni. Caffe bar na 10. spratu pruža ugodan ambijent i utočište od svakodnevnih obaveza a panoramski pogled na grad ostavlja bez daha prilikom svakog posjeta.
                  </motion.p>
                  <motion.p variants={slideIn("left", "spring", 0.9, 1)}>
                    Zbog svoje centralne lokacije hotel je posebno pogodan za studijska i poslovna putovanja jer se nalazi u neposrednoj blizini svih glavnih državnih institucija, poslovnih i kulturnih centara, shopping centara te svih mjesta gdje se održava većina poslovnih skupova, sajmova  i događaja zabavnog karaktera.
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
              src="/img/featured/featured2.jpg"
              alt="hotel hecco deluxe"
              className={styles.rightImg}
            />
          </motion.div>
        </div>
        <Gallery photos={photos} />
      </div>
    </div>
  )
}

export default HotelHeccoDeluxe
import React, { useState } from "react"
import { ImQuotesRight } from "react-icons/im";
import { motion } from "framer-motion";

import styles from "../styles/Testimonials.module.css"
import { slideIn, staggerContainer } from "../utils/motion";

const Testimonials = ({ t }) => {
  const [active, setActive] = useState("cosmopolit")

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amoung: 0.6 }}
      >
        <motion.h1
          className={styles.heading}
          variants={slideIn("down", "spring", 0.3, 1)}
        >
          {t("testiTitle")}
        </motion.h1>
        <motion.p
          className={styles.text}
          variants={slideIn("down", "spring", 0.4, 1)}
        >
          {t("testiDesc")}
        </motion.p>
        <motion.div
          className={styles.selectContainer}
          variants={slideIn("down", "spring", 0.5, 1)}
        >
          <span
            onClick={() => setActive("cosmopolit")}
            className={active === "cosmopolit" ? styles.activeSpan : styles.span}
          >
            Cosmopolit
          </span>
          <span
            onClick={() => setActive("deluxe")}
            className={active === "deluxe" ? styles.activeSpan : styles.span}
          >
            Hecco Deluxe
          </span>
          <span
            onClick={() => setActive("hecco")}
            className={active === "hecco" ? styles.activeSpan : styles.span}
          >
            Hotel Hecco
          </span>
        </motion.div>
        <motion.div
          className={styles.cardContainer}
          variants={slideIn("down", "spring", 0.8, 1)}
        >
          {active === "cosmopolit" ? (
            <>
              <div className={styles.card}>
                <div>
                  <h2>Excellent hotel</h2>
                  <div className={styles.cardTop}>
                    <ImQuotesRight className={styles.cardIcon} />
                    <div className={styles.ratingContainer}>10.0</div>
                  </div>
                  <p>
                    Room was very clean and comfortable. Hotel is in the centre, heart of Sarajevo. The staff was very professional and kind.
                  </p>
                </div>
                <div>
                  <hr className={styles.hr} />
                  <span>Jelena • Serbia</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <h2>Exceptional</h2>
                  <div className={styles.cardTop}>
                    <ImQuotesRight className={styles.cardIcon} />
                    <div className={styles.ratingContainer}>10.0</div>
                  </div>
                  <p>
                    We loved the hotel, everything was perfect. We had a parking place which is really important considering that hotel is located in city center. Stafd was really helpful.
                  </p>
                </div>
                <div>
                  <hr className={styles.hr} />
                  <span>Valentina • Italy</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <h2>Exceptional Hotel</h2>
                  <div className={styles.cardTop}>
                    <ImQuotesRight className={styles.cardIcon} />
                    <div className={styles.ratingContainer}>10.0</div>
                  </div>
                  <p>
                    Great place! Extremely friendly and helpful staff that helped me get around the Balkans and Sarajevo. The location is amazing and is in walking distance to all the sights!
                  </p>
                </div>
                <div>
                  <hr className={styles.hr} />
                  <span>Maxim • United States</span>
                </div>
              </div>
            </>
          ) : (
            active === "deluxe" ? (
              <>
                <div className={styles.card}>
                  <div>
                    <h2>Izuzetan</h2>
                    <div className={styles.cardTop}>
                      <ImQuotesRight className={styles.cardIcon} />
                      <div className={styles.ratingContainer}>10.0</div>
                    </div>
                    <p>
                      Prelijepo divna soba s pogledom na najljepsi grad, divno osoblje, cisto. Sve je za 10+
                    </p>
                  </div>
                  <div>
                    <hr className={styles.hr} />
                    <span>Merima • Sweden</span>
                  </div>
                </div>
                <div className={styles.card}>
                  <div>
                    <h2>Excellent</h2>
                    <div className={styles.cardTop}>
                      <ImQuotesRight className={styles.cardIcon} />
                      <div className={styles.ratingContainer}>8.0</div>
                    </div>
                    <p>
                      The room was clean and had a great view of the city and had blackout blinds which was great as during the day the room was very light. Reception was very helpful and location was perfect.
                    </p>
                  </div>
                  <div>
                    <hr className={styles.hr} />
                    <span>Ali • United Kingdom</span>
                  </div>
                </div>
                <div className={styles.card}>
                  <div>
                    <h2>Very Good</h2>
                    <div className={styles.cardTop}>
                      <ImQuotesRight className={styles.cardIcon} />
                      <div className={styles.ratingContainer}>9.0</div>
                    </div>
                    <p>
                      Very close to baščaršija. İncredible view of sarajevo. Nice helpful staff.
                    </p>
                  </div>
                  <div>
                    <hr className={styles.hr} />
                    <span>Mehmet • Turkey</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.card}>
                  <div>
                    <h2>Exceptional</h2>
                    <div className={styles.cardTop}>
                      <ImQuotesRight className={styles.cardIcon} />
                      <div className={styles.ratingContainer}>10.0</div>
                    </div>
                    <p>
                      Clean, cozy room and really friendly people. Just a 10 minutes walk from the old town... One can be sure - I will go back there again.
                    </p>
                  </div>
                  <div>
                    <hr className={styles.hr} />
                    <span>Svetoslav • Germany</span>
                  </div>
                </div>
                <div className={styles.card}>
                  <div>
                    <h2>Superb</h2>
                    <div className={styles.cardTop}>
                      <ImQuotesRight className={styles.cardIcon} />
                      <div className={styles.ratingContainer}>9.0</div>
                    </div>
                    <p>
                      The staff was great, very accommodating. The room was big and clean, very comfortable.
                    </p>
                  </div>
                  <div>
                    <hr className={styles.hr} />
                    <span>Palumbo • Italy</span>
                  </div>
                </div>
                <div className={styles.card}>
                  <div>
                    <h2>Good value for money!</h2>
                    <div className={styles.cardTop}>
                      <ImQuotesRight className={styles.cardIcon} />
                      <div className={styles.ratingContainer}>8.0</div>
                    </div>
                    <p>
                      We booked very last minute and were still able to get a garage parking space for free. For the price the room was absolutely okay.
                    </p>
                  </div>
                  <div>
                    <hr className={styles.hr} />
                    <span>Patricia • Austria</span>
                  </div>
                </div>
              </>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Testimonials
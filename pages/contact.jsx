import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { BsEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { slideIn, staggerContainer } from "../utils/motion";
import styles from "../styles/Contact.module.css";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

const Contact = () => {
  const { t } = useTranslation("common");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length || !email.length || !subject.length || !text.length) {
      return alert("Please fill out the form!");
    };
    setIsSending(true);
    emailjs.sendForm
      ("service_2k7e39c",
        "template_b8lsnn6",
        formRef.current,
        "SIgmEvjNXnDRUnbcf"
      )
      .then((result) => {
        setIsSending(false);
        setDone(true);
        setName("");
        setEmail("");
        setSubject("");
        setText("");
        setTimeout(() => {
          setDone(false);
        }, 4000);

      }, (error) => {
        setError(true);
        setIsSending(false);
        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  return (
    <>
      <Head>
        <title>Contact Sarajevo Hecco Hotels</title>
        <meta name="description" content="Contact Sarajevo Hecco Hotels for inquiries, reservations, or any other assistance. Get in touch with our friendly staff and we'll be happy to assist you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
        <link rel="apple-touch-icon" href="/hotel.png" />
        <meta property="og:title" content="Contact Sarajevo Hecco Hotels" />
        <meta property="og:description" content="Contact Sarajevo Hecco Hotels for inquiries, reservations, or any other assistance. Get in touch with our friendly staff and we'll be happy to assist you." />
        <meta property="og:image" content="/hotel.png" />
        <link rel="canonical" href="https://www.hecco-hotels-sarajevo.com/contact" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sarajevo Hecco Hotels",
              url: "https://www.hecco-hotels-sarajevo.com/",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+38733251100",
                  contactType: "customer support",
                  areaServed: "Bosnia and Herzegovina",
                  availableLanguage: "English, Bosnian"
                },
                {
                  "@type": "ContactPoint",
                  email: "Hotel.hecco@gmail.com",
                  contactType: "customer support",
                  areaServed: "Bosnia and Herzegovina",
                  availableLanguage: "English, Bosnian"
                }
              ]
            })
          }}
        />
      </Head>
      <div className={styles.container}>
        <motion.div
          className={styles.top}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <Image src="/img/sarajevoPanorama.jpg" alt="sarajevo" priority fill className={styles.img} />
          <div className={styles.heading}>
            <motion.h1
              className={styles.headingTitle}
              variants={slideIn("up", "spring", 0.3, 1)}
            >
              {t("contactTitle")}
            </motion.h1>
            <motion.p
              className={styles.headingSubtitle}
              variants={slideIn("up", "spring", 0.4, 1)}
            >
              {t("contactSubtitle")}
            </motion.p>
          </div>
        </motion.div>
        <div className={styles.bot}>
          <div className={styles.botContainer}>
            <motion.div
              className={styles.botLeft}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              <div>
                <motion.h2
                  className={styles.botHeading}
                  variants={slideIn("up", "spring", 0.5, 1)}
                >
                  {t("contactOurContacts")}
                </motion.h2>
                <div className={styles.botLeftAddressContainer}>
                  <motion.div
                    className={styles.addressCard}
                    variants={slideIn("left", "spring", 0.55, 3)}
                  >
                    <FaViber className={styles.icon} />
                    <span>+387 33 251 100</span>
                  </motion.div>
                  <motion.div
                    className={styles.addressCard}
                    variants={slideIn("left", "spring", 0.6, 3)}
                  >
                    <BsWhatsapp className={styles.icon} />
                    <span>+387 33 251 100</span>
                  </motion.div>
                  <motion.div
                    className={styles.addressCard}
                    variants={slideIn("left", "spring", 0.65, 3)}
                  >
                    <AiFillPhone className={styles.icon} />
                    <span>+387 33 251 100</span>
                  </motion.div>
                  <motion.div
                    className={styles.addressCard}
                    variants={slideIn("left", "spring", 0.7, 3)}
                  >
                    <BsEnvelopeFill className={styles.icon} />
                    <a href="mailto:Hotel.hecco@gmail.com" target="_blank">Hotel.hecco@gmail.com</a>
                  </motion.div>
                  <motion.div
                    className={styles.addressCard}
                    variants={slideIn("left", "spring", 0.7, 3)}
                  >
                    <BsEnvelopeFill className={styles.icon} />
                    <a href="mailto:hotel.cosmopolit.sa@gmail.com" target="_blank">hotel.cosmopolit.sa@gmail.com</a>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className={styles.socialContainer}
                variants={slideIn("left", "spring", 0.8, 3)}
              >
                <h2 className={styles.botHeading}>
                  {t("contactOurSocial")}
                </h2>
                <div className={styles.socialIconsContainer}>
                  <Link href="https://www.facebook.com/hotelcosmopolit.sarajevo/" target="_blank" rel="noreferrer" aria-label="Visit facebook page of the Cosmopolit hotel.">
                    <AiFillFacebook className={styles.socialIcon} />
                  </Link>
                  <Link href="https://www.instagram.com/heccohoteli/?hl=en" target="_blank" rel="noreferrer" aria-label="Visit instagram page of the hotel.">
                    <FaInstagramSquare className={styles.socialIcon} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.botRight}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              <motion.h2
                className={styles.botHeading}
                variants={slideIn("up", "spring", 0.5, 1)}
              >
                {t("contactRightTitle")}
              </motion.h2>
              <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                <motion.input
                  variants={slideIn("right", "spring", 0.55, 3)}
                  type="text"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder={t("contactFullName")}
                  className={styles.input}
                  required
                />
                <motion.input
                  variants={slideIn("right", "spring", 0.6, 3)}
                  type="email"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder={t("contactEmail")}
                  className={styles.input}
                  required
                />
                <motion.input
                  variants={slideIn("right", "spring", 0.65, 3)}
                  type="text"
                  name="user_subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder={t("contactSubject")}
                  className={styles.input}
                  required
                />
                <motion.textarea
                  variants={slideIn("right", "spring", 0.70, 3)}
                  name="message"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  cols="30"
                  rows="10"
                  placeholder={t("contactTextarea")}
                  className={styles.textarea}
                  required
                />
                <motion.button
                  className={styles.sendButton}
                  disabled={isSending}
                  variants={slideIn("right", "spring", 0.75, 3)}
                >
                  {isSending
                    ? <span>{t("contactSending")}</span>
                    : <span>{t("contactSend")}</span>}
                </motion.button>
                <span className={styles.alert} style={done ? { color: "green" } : { color: "transparent" }}>
                  {t("contactSuccess")}
                </span>
                <span className={styles.alert} style={error ? { color: "red" } : { color: "transparent" }}>
                  {t("contactFailure")}
                </span>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
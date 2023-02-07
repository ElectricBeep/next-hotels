import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { BsEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

import { slideIn, staggerContainer } from "../utils/motion";
import styles from "../styles/Contact.module.css";
import Head from "next/head";

const Contact = () => {
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
      ("service_64qv3ms",
        "template_i7p9sij",
        formRef.current,
        "_iGvRwWb7k8Vv93OH"
      )
      .then((result) => {
        console.log(result.text);
        setIsSending(false);
        setDone(true);
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
        <title>Sarajevo Hotels Contact</title>
        <meta name="description" content="Sarajevo Hotels Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
              Contact us Today!
            </motion.h1>
            <motion.p
              className={styles.headingSubtitle}
              variants={slideIn("up", "spring", 0.4, 1)}
            >
              Please get in touch and we will answer all your questions.
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
                <motion.h1
                  className={styles.botHeading}
                  variants={slideIn("up", "spring", 0.5, 1)}
                >
                  Our Contacts
                </motion.h1>
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
                    <span>hotel.cosmopolit.sa@gmail.com</span>
                  </motion.div>
                  <motion.div
                    className={styles.addressCard}
                    variants={slideIn("left", "spring", 0.75, 3)}
                  >
                    <FaMapMarkerAlt className={styles.icon} />
                    <span>Some Random Address</span>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className={styles.socialContainer}
                variants={slideIn("left", "spring", 0.8, 3)}
              >
                <h1 className={styles.botHeading}>
                  Our Social Media
                </h1>
                <div className={styles.socialIconsContainer}>
                  <Link href="https://www.facebook.com/hotelcosmopolit.sarajevo/" target="_blank" rel="noreferrer">
                    <AiFillFacebook className={styles.socialIcon} />
                  </Link>
                  <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">
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
              <motion.h1
                className={styles.botHeading}
                variants={slideIn("up", "spring", 0.5, 1)}
              >
                Fill the Form Below to Contact Us!
              </motion.h1>
              <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                <motion.input
                  variants={slideIn("right", "spring", 0.55, 3)}
                  type="text"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Full Name"
                  className={styles.input}
                  required
                />
                <motion.input
                  variants={slideIn("right", "spring", 0.6, 3)}
                  type="text"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Your Email"
                  className={styles.input}
                  required
                />
                <motion.input
                  variants={slideIn("right", "spring", 0.65, 3)}
                  type="text"
                  name="user_subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder="Subject"
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
                  placeholder="Your Message"
                  className={styles.textarea}
                  required
                />
                <motion.button
                  className={styles.sendButton}
                  disabled={isSending}
                  variants={slideIn("right", "spring", 0.75, 3)}
                >
                  {isSending
                    ? <span>Sending...</span>
                    : <span>SEND</span>}
                </motion.button>
                <span className={styles.alert} style={done ? { color: "green" } : { color: "transparent" }}>
                  Your Message was Sent Successfully
                </span>
                <span className={styles.alert} style={error ? { color: "red" } : { color: "transparent" }}>
                  There was an Error, Please Try Again
                </span>
              </form>
            </motion.div>
          </div >
        </div >
      </div>
    </>
  )
}

export default Contact
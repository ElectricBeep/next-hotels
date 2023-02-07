import Head from "next/head";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

import Details from "../components/Details";
import styles from "../styles/FAQ.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const handleToggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const questions = [
    {
      id: 1,
      question: "What's the best time of year to visit Sarajevo?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi."
    },
    {
      id: 2,
      question: "Do I need passport of visa to enter the country?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi."
    },
    {
      id: 3,
      question: "What are some basic facts about Sarajevo?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi."
    },
    {
      id: 4,
      question: "Where should I go in Sarajevo?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi."
    },
    {
      id: 5,
      question: "What major event happened in Sarajevo?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore incidunt sunt ex, vero vel? Placeat, incidunt atque, rerum minus laborum error eius doloremque excepturi soluta in eveniet consectetur animi."
    },
  ];

  return (
    <>
      <Head>
        <title>Sarajevo Hotels FAQ</title>
        <meta name="description" content="Sarajevo Hotels FAQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amoung: 0.25 }}
          >
            <motion.h1
              className={styles.mainTitle}
              variants={slideIn("up", "spring", 0.2, 1)}
            >
              A Few Common Questions
            </motion.h1>
          </motion.div>
          <div className={styles.contentContainer}>
            <motion.div
              className={styles.left}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              {questions.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={styles.item}
                  variants={slideIn("left", "spring", i * 0.3, 1)}
                >
                  <div className={styles.title} onClick={() => handleToggle(i)}>
                    <h3>{item.question}</h3>
                    {
                      selected === i
                        ? <IoIosArrowUp className={styles.icon} />
                        : <IoIosArrowDown className={styles.icon} />
                    }
                  </div>
                  <div className={selected === i ? `${styles.content} ${styles.show}` : styles.content}>{item.answer}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className={styles.right}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amoung: 0.25 }}
            >
              <div className={styles.imgContainer}>
                <motion.img
                  src="/img/sebilj.jpg"
                  alt="the city of Sarajevo"
                  className={styles.img}
                  variants={slideIn("right", "spring", 0.3, 1)}
                />
                <motion.div
                  className={styles.text}
                  variants={slideIn("right", "spring", 0.3, 1)}
                >
                  In 1540, the capital of Bosnia and Herzegovina received the first shopping center that still exists today, it is a bezistan.
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Details />
    </>
  )
}

export default FAQ
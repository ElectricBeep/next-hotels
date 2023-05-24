import React from "react";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

import styles from "../styles/HotelsSection.module.css";

const HotelsSection = ({ t, direction, imgOne, imgTwo, features, hotelTitle, hotelAddress, hotelDesc, linkOne, linkTwo }) => {
  return (
    <div
      className={styles.container}
      id="hotels"
    >
      {direction === "left" && (
        <h1 className={styles.heading}>
          <span>
            {t("hotelSectionHeader")}
          </span>
        </h1>
      )}
      <div className={direction === 'left' || direction === 'leftTwo' ? styles.wrapperLeft : styles.wrapperRight}>
        <div className={styles.left}>
          <img
            src={`/img/featured/${imgOne}`}
            alt="hotels sarajevo"
            className={styles.firstImage}
          />
          <img
            src={`/img/featured/${imgTwo}`}
            alt="hotels sarajevo"
            className={styles.secondImage}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.rightContainer}>
            <hr className={styles.hr} />
            <h2 className={styles.rightTitle}>
              {hotelTitle}
            </h2>
            <p className={styles.rightAddress}>
              <FaMapMarkerAlt /><span>{hotelAddress}</span>
            </p>
            <p className={styles.rightText}>
              {hotelDesc}
            </p>
            <Link href={`/hotel/${linkOne}`}>
              <button className={styles.readMoreButton}>
                {t("hotelsSectionButton")}
                <FaArrowRight className={styles.leftBottomIcon} />
              </button>
            </Link>
            <div className={styles.pillsContainer}>
              {features.map((feature) => (
                <div
                  className={styles.pill}
                  key={feature.id}
                >
                  {feature.feature}
                  {feature.icon}
                </div>
              ))}
            </div>
            <Link href={linkTwo}>
              <button className={styles.button}>
                {t("headerButton")}
              </button>
            </Link>
            <hr className={styles.hr} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsSection
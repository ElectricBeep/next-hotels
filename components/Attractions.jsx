import React from "react";
import PhotoSlider from "./PhotoSlider";

import styles from "../styles/Attractions.module.css";

const Attractions = ({ t }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          <span>
            {t("attractionsTitle")}
          </span>
        </h1>
        <hr className={styles.hr} />
        <div className={styles.contentContainer}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              {t("attractionsDescTitle")}
            </h2>
            <h2>
              <span className={styles.subtitleFirstWord}>{t("attractionsTextFirst")}</span>, <span className={styles.subtitle}>{t("attractionsTextSecond")}</span>
            </h2>
            <div className={styles.leftBottom}>
              {t("attractionsSubtitle")}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <div className={styles.cardContainer}>
                <PhotoSlider t={t} />
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
      </div>
    </div>
  )
}

export default Attractions
import React from "react";
import Link from "next/link";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaInstagramSquare, FaViber } from "react-icons/fa";

import styles from "../styles/Footer.module.css";

const Footer = ({ t }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1>{t("footerTitle")}</h1>
        <Link className={styles.topSectionAnchor} href="#hotels">
          <span>{t("headerButton")}</span>
        </Link>
      </div>
      <div className={styles.wrapperContainer}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>{t("navLogo")}</h2>
          </div>
          <div className={styles.mid}>
            <div className={styles.footerList}>
              <div className={styles.itemTitle}>{t("footerContactUs")}</div>
              <div className={styles.footerItemListContainer}>
                <div className={styles.footerItemList}>
                  <div className={styles.footerListItem}>
                    <BsFillTelephoneFill /><span>+387 33 251 100</span>
                  </div>
                  <div className={styles.footerListItem}>
                    <FaViber /><span>+387 33 251 100</span>
                  </div>
                  <div className={styles.footerListItem}>
                    <BsWhatsapp /><span>+387 33 251 100</span>
                  </div>
                </div>
                <div className={styles.footerItemList}>
                  <div className={styles.footerListItem}>
                    <BsFillEnvelopeFill /><span>hotel.cosmopolit.sa@gmail.com</span>
                  </div>
                  <div className={styles.footerListItem}>
                    <MdLocationOn /><span>Some Random Address, Sarajevo</span>
                  </div>
                </div>
              </div>
              <div className={styles.footerListIcons}>
                <Link href="https://www.facebook.com/hotelcosmopolit.sarajevo/" target="_blank" rel="noreferrer">
                  <AiFillFacebook className={styles.icon} />
                </Link>
                <FaInstagramSquare className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <p className={styles.footerBottom}>{t("footerRights")}</p>
    </div>
  )
}

export default Footer
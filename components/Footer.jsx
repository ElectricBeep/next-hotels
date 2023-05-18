import React from "react";
import Link from "next/link";
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaInstagramSquare, FaViber } from "react-icons/fa";
import { useRouter } from "next/router";

import styles from "../styles/Footer.module.css";

const Footer = ({ t }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const hotelsElement = document.getElementById("hotels");

    if (hotelsElement) {
      hotelsElement.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      router.push("/").then(() => {
        setTimeout(() => {
          const hotelsElement = document.getElementById("hotels");
          hotelsElement?.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1>{t("footerTitle")}</h1>
        <a
          className={styles.topSectionAnchor}
          href="#hotels"
          onClick={handleClick}
        >
          <span>{t("headerButtonScoll")}</span>
        </a>
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
                    <FaViber /><span>+387 62 257 471</span>
                  </div>
                  <div className={styles.footerListItem}>
                    <BsWhatsapp /><span>+387 62 257 471</span>
                  </div>
                </div>
                <div className={styles.footerItemList}>
                  <div className={styles.footerListItem}>
                    <BsFillEnvelopeFill /><a href="mailto:Hotel.hecco@gmail.com" target="_blank">Hotel.hecco@gmail.com</a>
                  </div>
                  <div className={styles.footerListItem}>
                    <MdLocationOn /><span>Radiceva 15, 71000 Sarajevo</span>
                  </div>
                </div>
              </div>
              <div className={styles.footerListIcons}>
                <Link href="https://www.facebook.com/hotelcosmopolit.sarajevo/" target="_blank" rel="noreferrer" aria-label="Visit facebook page of the Cosmopolit hotel.">
                  <AiFillFacebook className={styles.icon} />
                </Link>
                <Link href="https://www.instagram.com/heccohoteli/?hl=en" target="_blank" rel="noreferrer" aria-label="Visit instagram page of the hotel.">
                  <FaInstagramSquare className={styles.icon} />
                </Link>
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
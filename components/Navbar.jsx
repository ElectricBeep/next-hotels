import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose } from "react-icons/ai";

import styles from "../styles/Navbar.module.css";

const Navbar = ({ t }) => {
  const router = useRouter();
  const [showLanguageContainer, setShowLanguageContainer] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link href="/">
            {t("navLogo")}
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/" className={styles.navLink}>
            <span>{t("navHeader")}</span>
          </Link>
          <div
            className={styles.navMoreMenu}
            onClick={() => setShowHotels((prev) => !prev)}
          >
            <span>{t("navHotels")} {showHotels ? <AiFillCaretUp size={14} /> : <AiFillCaretDown size={14} />}</span>
            {showHotels && (
              <div className={styles.moreMenuContainer}>
                <Link href="/hotel/hotel-cosmopolit">
                  Cosmopolit
                </Link>
                <Link href="/hotel/hotel-hecco-deluxe">
                  Hecco Deluxe
                </Link>
                <Link href="/hotel/hotel-hecco">
                  Hotel Hecco
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className={styles.navLink}>
            <span>{t("navContact")}</span>
          </Link>
          <Link href="/faq" className={styles.navLink}>
            <span>{t("navFAQ")}</span>
          </Link>
          <div className={styles.selectContainer}>
            <div
              onClick={() => setShowLanguageContainer(!showLanguageContainer)}
            >
              <span>
                {router.locale === "en"
                  ? <Image src="/img/usa.png" alt="usa flag" width={30} height={30} className={styles.selectContainerImage} />
                  : <Image src="/img/bih.png" alt="bih flag" width={30} height={30} className={styles.selectContainerImage} />}
              </span>
              {showLanguageContainer && (
                <div className={styles.select}>
                  {router.locales.map(l => (
                    <Link href={router.asPath} key={l} locale={l} className={styles.selectItem} onClick={() => setShowLanguageContainer(false)}>
                      {l === "en"
                        ? <Image src="/img/usa.png" alt="usa flag" width={30} height={30} />
                        : <Image src="/img/bih.png" alt="bosnia flag" width={30} height={30} />}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <GiHamburgerMenu className={styles.moreIcon} onClick={() => setIsActive((prev) => !prev)} />
        </div>
        {isActive && (
          <div className={styles.rightMobileWrapper} onClick={() => setIsActive(false)}>
            <div className={styles.rightMobile} onClick={(e) => e.stopPropagation()}>
              <AiOutlineClose size={30} className={styles.closeIcon} onClick={() => setIsActive(false)} />
              <div className={styles.rightMobileMenu}>
                <hr />
                <Link onClick={() => setIsActive(false)} href="/">
                  {t("navHeader")}
                </Link>
                <hr />
                <Link href="/hotel/hotel-cosmopolit" onClick={() => setIsActive(false)}>
                  Cosmopolit
                </Link>
                <hr />
                <Link href="/hotel/hotel-hecco-deluxe" onClick={() => setIsActive(false)}>
                  Hecco Deluxe
                </Link>
                <hr />
                <Link href="/hotel/hotel-hecco" onClick={() => setIsActive(false)}>
                  Hotel Hecco
                </Link>
                <hr />
                <Link onClick={() => setIsActive(false)} href="/contact">
                  {t("navContact")}
                </Link>
                <hr />
                <Link onClick={() => setIsActive(false)} href="/faq">
                  {t("navFAQ")}
                </Link>
                <hr />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
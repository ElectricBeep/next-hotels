import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose } from "react-icons/ai";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const [showLanguageContainer, setShowLanguageContainer] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link href="/">
            Hoteli Sarajevo
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/" className={styles.navLink}>
            <span>Home</span>
          </Link>
          <div
            className={styles.navMoreMenu}
            onClick={() => setShowHotels((prev) => !prev)}
          >
            <span>Hotels {showHotels ? <AiFillCaretUp size={14} /> : <AiFillCaretDown size={14} />}</span>
            {showHotels && (
              <div className={styles.moreMenuContainer}>
                <Link href="/hotel/hotel-cosmopolit">
                  Cosmopolit
                </Link>
                <Link href="/hotel/hotel-hecco-deluxe">
                  Hecco Deluxe
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className={styles.navLink}>
            <span>Contact</span>
          </Link>
          <Link href="/faq" className={styles.navLink}>
            <span>FAQ</span>
          </Link>
          <div className={styles.selectContainer}>
            <div
              onMouseEnter={() => setShowLanguageContainer(true)}
              onMouseLeave={() => setShowLanguageContainer(false)}
            >
              <span>
                {router.locale === "en"
                  ? <Image src="/img/usa.png" alt="usa flag" width={30} height={30} />
                  : <Image src="/img/bih.png" alt="bih flag" width={30} height={30} />}
              </span>
              {showLanguageContainer && (
                <div className={styles.select}>
                  {/* {router.locales.map(l => (
                    <Link href={router.asPath} key={l} locale={l} className={styles.selectItem} onClick={() => setShowLanguageContainer(false)}>
                      {l === "en"
                        ? <Image src="/img/usa.png" alt="usa flag" width={30} height={30} />
                        : <Image src="/img/croatia.png" alt="croatia flag" width={30} height={30} />}
                    </Link>
                  ))} */}
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
                  Home
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
                <Link onClick={() => setIsActive(false)} href="/contact">
                  Contact
                </Link>
                <hr />
                <Link onClick={() => setIsActive(false)} href="/faq">
                  FAQ
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
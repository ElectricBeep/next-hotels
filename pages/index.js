import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import styles from '@/styles/Home.module.css'
import HotelsSection from '@/components/HotelsSection'
import { hotelOneFeatures } from '@/hotelOneFeatures'
import { hotelTwoFeatures } from '@/hotelTwoFeatures'
import Attractions from '@/components/Attractions'
import Testimonials from '@/components/Testimonials'
import HeaderNew from '@/components/HeaderNew'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Sarajevo Hotels</title>
        <meta name="description" content="Sarajevo Hotels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
      </Head>
      <main className={styles.main}>
        <HeaderNew title="SARAJEVO" t={t} />
        <HotelsSection
          t={t}
          direction={"left"}
          features={hotelOneFeatures}
          imgOne={"featured1.jpg"}
          imgTwo={"cosmopolitNew.jpg"}
          hotelTitle={"Hotel Cosmopolit"}
          hotelDesc={t("cosmopolitDesc")}
          linkOne={"hotel-cosmopolit"}
          linkTwo={"https://www.booking.com/hotel/ba/cosmopolit.hr.html"}
        />
        <HotelsSection
          t={t}
          direction={"right"}
          features={hotelTwoFeatures}
          imgOne={"featured3.jpg"}
          imgTwo={"delux1.jpg"}
          hotelTitle={"Hotel Hecco Deluxe"}
          hotelDesc={t("deluxeDesc")}
          linkOne={"hotel-hecco-deluxe"}
          linkTwo={"https://www.booking.com/hotel/ba/hecco-deluxe.en-gb.html?aid=356980&label=gog235jc-1DCAsoEkIMaGVjY28tZGVsdXhlSDNYA2gSiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKg9PieBsACAdICJDZmN2Y4NzQ2LTZmNmEtNDZlZS1iYTk3LThlMGUyYjI4ODg4NNgCBOACAQ&sid=1ebcd1c25d8b009ffb9395189be3b58b&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&"}
        />
        <Attractions t={t} />
        <Testimonials t={t} />
      </main>
    </>
  )
}

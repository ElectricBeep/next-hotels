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
import { hotelThreeFeatures } from '@/hotelThreeFeatures'

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
          linkTwo={"/contact"}
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
          linkTwo={"/contact"}
        />
        <HotelsSection
          t={t}
          direction={"leftTwo"}
          features={hotelThreeFeatures}
          imgOne={"featured6.jpg"}
          imgTwo={"heco1.jpg"}
          hotelTitle={"Hotel Hecco"}
          hotelDesc={t("hecoDesc")}
          linkOne={"hotel-hecco"}
          linkTwo={"/contact"}
        />
        <Attractions t={t} />
        <Testimonials t={t} />
      </main>
    </>
  )
}

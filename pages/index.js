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
          imgOne={"featured1.webp"}
          imgTwo={"cosmopolitNew.webp"}
          hotelTitle={"Hotel Cosmopolit"}
          hotelAddress={"Radiceva 15, 71000 Sarajevo, Bosnia and Herzegovina"}
          hotelDesc={t("cosmopolitDesc")}
          linkOne={"hotel-cosmopolit"}
          linkTwo={"/contact"}
        />
        <HotelsSection
          t={t}
          direction={"right"}
          features={hotelTwoFeatures}
          imgOne={"featured3.webp"}
          imgTwo={"delux1.jpg"}
          hotelTitle={"Hotel City View Deluxe"}
          hotelAddress={"Ferhadija 2, 71000 Sarajevo, Bosnia and Herzegovina"}
          hotelDesc={t("deluxeDesc")}
          linkOne={"hotel-hecco-deluxe"}
          linkTwo={"/contact"}
        />
        <HotelsSection
          t={t}
          direction={"leftTwo"}
          features={hotelThreeFeatures}
          imgOne={"featured6.webp"}
          imgTwo={"heco1.webp"}
          hotelTitle={"Hotel Hecco"}
          hotelAddress={"Medresa 1, 71000 Sarajevo, Bosnia and Herzegovina"}
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

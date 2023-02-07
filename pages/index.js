import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import HotelsSection from '@/components/HotelsSection'
import { hotelOneFeatures } from '@/hotelOneFeatures'
import { hotelTwoFeatures } from '@/hotelTwoFeatures'
import Attractions from '@/components/Attractions'
import Testimonials from '@/components/Testimonials'
import HeaderNew from '@/components/HeaderNew'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarajevo Hotels</title>
        <meta name="description" content="Sarajevo Hotels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderNew title="SARAJEVO" />
        <HotelsSection
          direction={"left"}
          features={hotelOneFeatures}
          imgOne={"featured1.jpg"}
          imgTwo={"cosmopolitNew.jpg"}
          hotelTitle={"Hotel Cosmopolit"}
          hotelDesc={"Hotel se nalazi u strogom centru grada, tačnije u ulici Radićeva broj 15. Spoj je vrhunske udobnosti i kvalitete. Luksuznih 16 soba, opremljenih i dizajniranih po posljednjim svjetskim standardima, garancija su kvalitetnog i udobnog smještaja a naše gostoljubivo osoblje će dodatno upotpuniti vaš boravak u hotelu."}
          linkOne={"hotel-cosmopolit"}
          linkTwo={"https://www.booking.com/hotel/ba/cosmopolit.hr.html"}
        />
        <HotelsSection
          direction={"right"}
          features={hotelTwoFeatures}
          imgOne={"featured3.jpg"}
          imgTwo={"delux1.jpg"}
          hotelTitle={"Hotel Hecco Deluxe"}
          hotelDesc={"Hotel Hecco Deluxe smješten je u samom srcu Sarajeva, u ulici Ferhadija 2, na posljednja 4 sprata visoke poslovne zgrade, odakle se pruža predivan pogled na cijeli grad i okolna brda."}
          linkOne={"hotel-hecco-deluxe"}
          linkTwo={"https://www.booking.com/hotel/ba/hecco-deluxe.en-gb.html?aid=356980&label=gog235jc-1DCAsoEkIMaGVjY28tZGVsdXhlSDNYA2gSiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuAKg9PieBsACAdICJDZmN2Y4NzQ2LTZmNmEtNDZlZS1iYTk3LThlMGUyYjI4ODg4NNgCBOACAQ&sid=1ebcd1c25d8b009ffb9395189be3b58b&dist=0&group_adults=2&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&"}
        />
        <Attractions />
        <Testimonials />
      </main>
    </>
  )
}

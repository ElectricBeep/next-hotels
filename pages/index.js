import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import styles from '@/styles/Home.module.css'
import HotelsSection from '@/components/HotelsSection'
import { hotelOneFeatures, hotelTwoFeatures, hotelThreeFeatures } from '@/hotelFeatures'
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
        <title>Sarajevo Hecco Hotels</title>
        <meta name="description" content="Discover the perfect destination for your next getaway with Hecco Hotels in Sarajevo. Our premier hotel renting service offers a variety of luxurious accommodations, including stunning city escapes and beachfront retreats. Book your dream hotel in Sarajevo today and start creating unforgettable memories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotel.png" />
        <link rel="apple-touch-icon" href="/hotel.png" />
        <meta property="og:title" content="Sarajevo Hotels" />
        <meta property="og:description" content="Discover the perfect destination for your next getaway with Hecco Hotels in Sarajevo. Our premier hotel renting service offers a variety of luxurious accommodations, including stunning city escapes and beachfront retreats. Book your dream hotel in Sarajevo today and start creating unforgettable memories." />
        <meta property="og:image" content="/hotel.png" />
        <link rel="canonical" href="https://www.hecco-hotels-sarajevo.com/" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Hotel",
                    name: "Hotel Cosmopolit",
                    description: "The hotel is situated in the heart of the city, at 15 Radićeva street. It offers a perfect blend of pristine comfort and quality. With 16 luxurious rooms, designed and equipped with the latest world standards, guests can be assured of an exceptional experience. Our hospitable staff will ensure that your stay at our hotel is even more enjoyable.",
                    image: "/img/featured/featured7.jpg",
                    url: "https://www.hecco-hotels-sarajevo.com/hotel/hotel-cosmopolit",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Radićeva 15 Street",
                      addressLocality: "Sarajevo",
                      postalCode: "71000",
                      addressCountry: "Bosnia and Herzegovina"
                    },
                    geo: {
                      "@type": "GeoCoordinates",
                      latitude: 43.85781322192979,
                      longitude: 18.417217999616973
                    },
                    telephone: "+38733251100",
                    priceRange: "156BAM",
                    acceptsReservations: "True"
                  }
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Hotel",
                    name: "Hotel City View Deluxe",
                    description: "The City View Deluxe Hotel is situated in the heart of Sarajevo, on Ferhadija Street, occupying the top four floors of a business building. From here, guests can enjoy breathtaking views of the entire city.",
                    image: "/img/featured/featured3.jpg",
                    url: "https://www.hecco-hotels-sarajevo.com/hotel/hotel-hecco-deluxe",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Ferhadija 2 Street",
                      addressLocality: "Sarajevo",
                      postalCode: "71000",
                      addressCountry: "Bosnia and Herzegovina"
                    },
                    geo: {
                      "@type": "GeoCoordinates",
                      latitude: 43.85868426883366,
                      longitude: 18.421910579697865
                    },
                    telephone: "+38733559995",
                    priceRange: "161BAM",
                    acceptsReservations: "True"
                  }
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Hotel",
                    name: "Hotel Hecco",
                    description: "Set in a modern building and renovated in 2018, just a 5-minute walk from Sarajevo’s cultural centre, Hotel Hecco provides air-conditioned rooms with free Wi-Fi. It offers a restaurant and organised tours. This hotel uses renewable energy sources only.",
                    image: "/img/featured/featured6.jpg",
                    url: "https://www.hecco-hotels-sarajevo.com/hotel/hotel-hecco",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Medresa 1 Street",
                      addressLocality: "Sarajevo",
                      postalCode: "71000",
                      addressCountry: "Bosnia and Herzegovina"
                    },
                    geo: {
                      "@type": "GeoCoordinates",
                      latitude: 43.866440067632446,
                      longitude: 18.432669683324896
                    },
                    telephone: "+38733273730",
                    priceRange: "160BAM",
                    acceptsReservations: "True"
                  }
                }
              ]
            })
          }}
        />
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
          hotelAddress={"Radiceva 15, 71000 Sarajevo, Bosnia and Herzegovina"}
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
          imgOne={"featured6.jpg"}
          imgTwo={"heco1.jpg"}
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

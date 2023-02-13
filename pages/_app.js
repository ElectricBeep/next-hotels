import { appWithTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@/components/Layout";
import "@/styles/globals.css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

const App = ({ Component, pageProps }) => {
  const { t } = useTranslation("common");
  return (
    <Layout t={t}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App);
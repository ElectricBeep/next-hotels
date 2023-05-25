import React from "react";
import { LazyMotion, domAnimation } from "framer-motion"

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, t }) => {
  return (
    <>
      <Navbar t={t} />
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
      <Footer t={t} />
    </>
  )
}

export default Layout
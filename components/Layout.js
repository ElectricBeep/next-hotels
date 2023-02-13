import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, t }) => {
  return (
    <>
      <Navbar t={t} />
      {children}
      <Footer t={t} />
    </>
  )
}

export default Layout
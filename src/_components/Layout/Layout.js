import React from "react";
import Navbar from "./../Header/HomeHeader/Navbar";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";


export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <span id="back-to-top-anchor" />
      <div style={{minHeight:'50vh'}}>
      {children}
      </div>
      <Footer />
      <BackToTop/>
    </div>
  );
}

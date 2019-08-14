import React, { Component } from "react";
import Header from "../components/HeaderVer2";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default class contactContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    );
  }
}

import React, { Component } from "react";
import "../styles/App.css";
import Header from "../components/Header";
import Collection from "../components/Collection";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import OurStore from "../components/OurStore";
import Footer from "../components/Footer";

export default class mainContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Categories />
        <Collection />
        <OurStore />
        <Footer />
      </>
    );
  }
}

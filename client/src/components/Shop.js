import React, { Component } from "react";
import Header from "./HeaderVer2";
import EaringContainer from "../containers/earingContainer";
import NecklaceContainer from "../containers/necklaceContainer";
import RingContainer from "../containers/ringContainer";
import Footer from "../components/Footer";

export default class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <Header />
        <div id="earing" className="shop__box">
          <div className="shop__box--text">
            <h4>Earings</h4>
            <h5 id="view">View Collection</h5>
          </div>
          <a className="shop__box--img" href="/collections/earings">
            <img
              alt="earing"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/earrings_1950x.jpg?v=1543981431"
            />
          </a>
        </div>
        <EaringContainer />
        <div className="shop__box">
          <div className="shop__box--text">
            <h4>Necklaces</h4>
            <h5 id="view">View Collection</h5>
          </div>
          <a className="shop__box--img" href="/collections/necklaces">
            <img
              alt="second"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/necklaces_1950x.jpg?v=1543981732"
            />
          </a>
        </div>
        <NecklaceContainer />
        <div className="shop__box">
          <div className="shop__box--text">
            <h4>Rings</h4>
            <h5 id="view">View Collection</h5>
          </div>
          <a className="shop__box--img" href="/collections/rings">
            <img
              alt="rings"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/rings_1950x.jpg?v=1543980851"
            />
          </a>
        </div>
        <RingContainer />
        <Footer />
      </div>
    );
  }
}

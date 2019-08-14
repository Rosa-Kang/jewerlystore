import React, { Component } from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import instaScr from "../assets/icons/instaScr.png";
import searchScr from "../assets/icons/searchScr.png";
import cartScr from "../assets/icons/cartScr.png";
import pintScr from "../assets/icons/pintScr.png";
import effortScr from "../assets/icons/sc-effort.png";

export default class HeaderVer2 extends Component {
  render() {
    return (
      <StickyHeader
        header={
          <div className="start" style={{ backgroundColor: "#fff" }}>
            <div className="start__header">
              <div className="start__header__logos">
                <a
                  className="start__header__logos--insta"
                  href="https://www.instagram.com/wolf_circus/"
                >
                  <img id="icon" src={instaScr} alt="instagram" />
                </a>
                <a
                  className="start__header__logos--pinterest"
                  href="https://www.pinterest.ca/wolfcircus/"
                >
                  <img id="icon" src={pintScr} alt="pinterest" />
                </a>
              </div>
              <a href="/" className="start__header__title">
                <img src={effortScr} alt="icon" />
              </a>
              <div className="start__header__right">
                <div className="start__header__right--search">
                  <img id="icon" src={searchScr} alt="search" />
                </div>
                <div className="start__header__right--cart">
                  <img id="icon" src={cartScr} alt="cart" />
                </div>
              </div>
            </div>
            <div className="start__nav">
              <ul className="start__nav__list">
                <li>
                  <a href="/" style={{ color: "#545454" }}>
                    Home
                  </a>
                </li>
                <li className="start__nav__list--shop">
                  <a href="shop" className="btn" style={{ color: "#545454" }}>
                    Shop
                  </a>
                  <div className="start__nav__list--shop--dropDown">
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--picture"
                    >
                      <h3 id="text-top">Shop Spring</h3>
                      <h4 id="text-bottom">SPRING COLLECTION</h4>
                    </div>
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--earings"
                    >
                      <h3>Earings</h3>
                      <h5>All Earings</h5>
                      <h5>Gold</h5>
                      <h5>Silver</h5>
                    </div>
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--necklaces"
                    >
                      <h3>Necklaces</h3>
                      <h5>All Necklaces</h5>
                      <h5>Gold</h5>
                      <h5>Silver</h5>
                    </div>
                    <div
                      id="menu"
                      className="start__nav__list--shop--dropDown--rings"
                    >
                      <h3>Rings</h3>
                      <h5>All Rings</h5>
                      <h5>Gold</h5>
                      <h5>Silver</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="news" style={{ color: "#545454" }}>
                    News
                  </a>
                </li>
                <li>
                  <a href="contact" style={{ color: "#545454" }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    );
  }
}

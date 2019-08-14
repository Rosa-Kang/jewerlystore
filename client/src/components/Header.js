import React, { Component } from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import insta from "../assets/icons/insta.png";
import instaScr from "../assets/icons/instaScr.png";
import search from "../assets/icons/search.png";
import searchScr from "../assets/icons/searchScr.png";
import cart from "../assets/icons/cart.png";
import cartScr from "../assets/icons/cartScr.png";
import pinterest from "../assets/icons/pinterest.png";
import pintScr from "../assets/icons/pintScr.png";
import effortless from "../assets/icons/effortless.png";
import effortScr from "../assets/icons/sc-effort.png";

export default class Header extends Component {
  state = {
    backgroundColor: "transparent",
    color: "#fff",
    insta: insta,
    search: search,
    cart: cart,
    pinterest: pinterest,
    effortless: effortless
  };

  listenScrollEvent = e => {
    if (window.scrollY > 80) {
      this.setState({ backgroundColor: "#fff" });
      this.setState({ color: "#545454" });
      this.setState({ insta: instaScr });
      this.setState({ search: searchScr });
      this.setState({ cart: cartScr });
      this.setState({ pinterest: pintScr });
      this.setState({ effortless: effortScr });
    } else {
      this.setState({ backgroundColor: "transparent" });
      this.setState({ color: "#fff" });
      this.setState({ insta: insta });
      this.setState({ search: search });
      this.setState({ cart: cart });
      this.setState({ pinterest: pinterest });
      this.setState({ effortless: effortless });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <StickyHeader
        header={
          <div
            className="start"
            style={{ backgroundColor: this.state.backgroundColor }}
          >
            <div className="start__header">
              <div className="start__header__logos">
                <a
                  className="start__header__logos--insta"
                  href="https://www.instagram.com/wolf_circus/"
                >
                  <img id="icon" src={this.state.insta} alt="instagram" />
                </a>
                <a
                  className="start__header__logos--pinterest"
                  href="https://www.pinterest.ca/wolfcircus/"
                >
                  <img id="icon" src={this.state.pinterest} alt="pinterest" />
                </a>
              </div>
              <a href="/" className="start__header__title">
                <img src={this.state.effortless} alt="icon" />
              </a>
              <div className="start__header__right">
                <div className="start__header__right--search">
                  <img id="icon" src={this.state.search} alt="search" />
                </div>
                <div className="start__header__right--cart">
                  <img id="icon" src={this.state.cart} alt="cart" />
                </div>
              </div>
            </div>
            <div className="start__nav">
              <ul className="start__nav__list">
                <li>
                  <a href="/" style={{ color: this.state.color }}>
                    Home
                  </a>
                </li>
                <li className="start__nav__list--shop">
                  <a
                    href="shop"
                    className="btn"
                    style={{ color: this.state.color }}
                  >
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
                  <a href="news" style={{ color: this.state.color }}>
                    News
                  </a>
                </li>
                <li>
                  <a href="contact" style={{ color: this.state.color }}>
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

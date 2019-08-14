import React, { Component } from "react";
import Logo from "../assets/icons/sc-effort.png";
import Insta from "../assets/icons/instaScr.png";
import Pinterest from "../assets/icons/pintScr.png";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__myfooter">
          <div className="footer__myfooter--logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <h1 className="footer__myfooter--title">Get In Touch</h1>
          <div className="footer__myfooter--images">
            <a href="https://www.instagram.com/wolf_circus/">
              <img src={Insta} alt="insta" />
            </a>
            <a href="https://www.pinterest.ca/wolfcircus/">
              <img src={Pinterest} alt="pinterest" />
            </a>
          </div>
        </div>

        <div className="footer__text">
          <div className="footer__text--left">
            <div id="thick">
              Richard Rovner
              <br />
              The Bees Knees Management
            </div>
            <div id="slim">
              460 King Street West
              <br />
              Toronto, Ontario M5V 1L7
            </div>
            <div id="slim">
              <a href="mailto:therosessom@gmail.com"> info@thebeesknees.com</a>
            </div>
          </div>
          <div className="footer__text--mid">
            <div id="thick">
              Marsha Vlasic
              <br />
              Artist Group International
            </div>
            <div id="slim">
              Booking Agent for
              <br />
              US / South America / Japan
            </div>
            <div id="slim">
              <a href="mailto:therosessom@gmail.com">
                marsha.vlasic@artistgrp.com
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright The Bees Knees © 2018 All Rights Reserved
        </div>
      </footer>
    );
  }
}

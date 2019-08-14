import React, { Component } from "react";

export default class Catagories extends Component {
  render() {
    return (
      <div className="categories">
        <div className="categories__box">
          <a className="categories__box--img" href="/collections/earings">
            <img
              alt="earinginct"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/earrings_1950x.jpg?v=1543981431"
            />
          </a>
          <div className="categories__box--text">
            <h3>Earings</h3>
          </div>
        </div>
        <div className="categories__box">
          <a className="categories__box--img" href="/collections/necklaces">
            <img
              alt="neckct"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/necklaces_1950x.jpg?v=1543981732"
            />
          </a>
          <div className="categories__box--text">
            <h3>Necklaces</h3>
          </div>
        </div>
        <div className="categories__box">
          <a className="categories__box--img" href="/collections/rings">
            <img
              alt="ringinct"
              src="https://cdn.shopify.com/s/files/1/0081/5654/5088/collections/rings_1950x.jpg?v=1543980851"
            />
          </a>
          <div className="categories__box--text">
            <h3>Rings</h3>
          </div>
        </div>
      </div>
    );
  }
}

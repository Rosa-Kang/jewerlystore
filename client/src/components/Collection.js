import React, { Component } from "react";
import play from "../assets/icons/play.png";

export default class Collection extends Component {
  render() {
    return (
      <div className="collection">
        <div className="collection__One">
          <div className="collection__One--text">
            <div className="collection__One--text--type">
              <h2>Winter Collection</h2>
              <p>Check out the latest winter collection</p>
            </div>
          </div>
          <div className="collection__One--link">
            <a
              href="https://www.youtube.com/watch?v=sHdF7M-RV-8"
              className="collection__One--link--type"
            >
              <span>Winter Vibe</span>
              <img alt="playkey" src={play} />
            </a>
          </div>
        </div>
        <div className="collection__Two">
          <div className="collection__Two—-text">
            <div className="collection__Two—-text--type">
              <h2>Check the goods</h2>
              <p>Don't take our word for it, see for yourself</p>
            </div>
          </div>
          <div className="collection__Two—-link">
            <a className="collection__Two—-link--type" href="/collections">
              <span>Shop Now</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

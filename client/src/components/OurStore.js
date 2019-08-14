import React, { Component } from "react";
import MapContainer from "../containers/MapContainer";

export default class OurStore extends Component {
  render() {
    return (
      <div className="our">
        <div className="our__store">
          <h5>Our store</h5>
          <h5>Coal Harbour</h5>
          <h5>Vancouver, Canada</h5>
          <h5>Mon - Fri, 10am - 9pm</h5>
          <h5>Weekends, 11am - 4pm</h5>
        </div>
        <div className="our__map">
          <MapContainer />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial">
        <div className="testimonial__left--thumb">
          <img id="thumb" src={this.props.thumb} alt="thumb" />
        </div>
        <div className="testimonial__left--title">
          <h4>{this.props.title}</h4>
        </div>
        <div className="testimonial__right">
          <div className="testimonial__right--review">{this.props.review}</div>
          <div className="testimonial__right--profile">
            <div className="testimonial__right--profile--image">
              {this.props.image}
            </div>
            <div className="testimonial__right--profile--id">
              {this.props.id}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

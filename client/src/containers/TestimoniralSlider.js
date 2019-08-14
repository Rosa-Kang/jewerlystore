import React, { Component } from "react";
import Testimonial from "../components/Testimonial";

const Url = ``;

export default class TestimoniralSlider extends Component {
  state = {
    testimonials: []
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(Url).then(test => {
      const newTestimonial = test.data.map(testList => {
        return {
          id: testList.id,
          thumb: testList.thumb,
          title: testList.title,
          image: testList.image,
          review: testList.review
        };
      });
      this.setState({
        testimonials: newTestimonial
      });
    });
    console.log(this.state.testimonial);
  }

  render() {
    return (
      <>
        {this.state.testimonials.map(testimonial => (
          <Testimonial
            id={testimonial.id}
            title={testimonial.title}
            thumb={testimonial.thumb}
            image={testimonial.image}
            model={testimonial.model}
            review={testimonial.review}
          />
        ))}
      </>
    );
  }
}

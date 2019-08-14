import React, { Component } from "react";
import Header from "../components/HeaderVer2";
import News from "../components/News";
import data from "../model/newsList";
import Footer from "../components/Footer";

export default class newContainer extends Component {
  state = {
    newsLists: []
  };

  componentDidMount() {
    const newLists = data.map(list => {
      return {
        id: list.id,
        title: list.title,
        thumb: list.thumb,
        meta: list.meta,
        summary: list.summary,
        author: list.author,
        description: list.description
      };
    });

    this.setState({
      newsLists: newLists
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="newsNav">
          <h1 className="newsNav--title">News</h1>
          <ul className="newsNav--list">
            <li>
              <a href="all-article">All</a>
            </li>
            <li>
              <a href="process">Our Process</a>
            </li>
            <li>
              <a href="sustaining">Sustainability</a>
            </li>
            <li>
              <a href="travel">Travel</a>
            </li>
          </ul>
        </div>
        <div className="news">
          {this.state.newsLists.map(newsList => (
            <News
              id={newsList.id}
              title={newsList.title}
              meta={newsList.meta}
              thumb={newsList.thumb}
              author={newsList.author}
              description={newsList.description}
              summary={newsList.summary}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

import React, { Component } from "react";
import NewsItem from "../components/NewsItem";
import {DummyData} from "../data-source/news";
import {fetchNews} from "../services/news.service";

export class News extends Component {
  articles = DummyData;
  constructor() {
    super();
    // console.log("Hello I'm Vishal");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let data = await fetchNews();
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  
  handlePrevClick = async () => {
    const page = this.state.page > 0 ? this.state.page -1: 0;
    let data = await fetchNews(page);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    const page = this.state.page + 1;
    let data = await fetchNews(page);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsHeadlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

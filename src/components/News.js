import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }
  update=async()=>{
    console.log("update running")
    this.setState({loading:true})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2805dbedb56f41e586314e1eab4b3fbb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  fetching = async () => {

    console.log("fetching running")
   this.setState({
      page:this.state.page+1
   });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2805dbedb56f41e586314e1eab4b3fbb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    console.log("cdm running")
    this.update();
}

  render() {
    return (
      <>
        <h1 className="text-center my-5" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={this.state.articles.length}
          next={this.fetching}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Loader />}
        >
            <div className="container">
            <div className="row">
             
              {this.state.articles.map((element,index) => {
                return (
                   
                  <div className="col-md-4 my-3" key={index}>
                
                    <NewsItem
                      title={!element.title? "No title": element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      sourceUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      
      </>
    );
  }
}

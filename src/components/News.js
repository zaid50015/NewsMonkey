import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5, 
    category: 'science',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2805dbedb56f41e586314e1eab4b3fbb&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults,loading:false});
  }

  handlePrevClick = async ()=>{
 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2805dbedb56f41e586314e1eab4b3fbb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);  
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
       loading:false
    })

}

 handleNextClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2805dbedb56f41e586314e1eab4b3fbb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
}
  render() {
    return (
     
      <div className="container my-3">
        <h1 className="my-4 text-center"> Today's Top news</h1>
        {this.state.loading && <Loader/>}
        <div className="row">
          {!this.state.loading &&  this.state.articles.map((element) => {
          
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  sourceUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-5">
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
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)?true:false}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

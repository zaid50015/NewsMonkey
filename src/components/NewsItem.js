import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description,imgUrl,sourceUrl} = this.props;
    return (
      <div>
        <div className="card">
        <img src={!imgUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcements/-476x249w4/gsmarena_00.jpg":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">
                 {description}..
            </p>
            <a href={sourceUrl} target="_blank" rel="noreferrer" className="btn  btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

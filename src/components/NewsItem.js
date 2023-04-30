import React, { Component } from "react";
import noImgUrl from "./images/Noimage.jpg";
export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, sourceUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img
            src={!imgUrl ? noImgUrl : imgUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="btn  btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

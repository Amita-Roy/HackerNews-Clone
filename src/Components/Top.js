import React, { Component } from "react";
import Pluralize from "pluralize";
import moment from "moment";
import { Link } from "react-router-dom";

import "./sharedStyle.css";

class Top extends Component {
  render() {
    const { title, by, score, time, descendants, id } = this.props.data;
    const pluralizePoints = Pluralize("point", score, true);
    const pluralizeComments = Pluralize("comment", descendants, true);
    return (
      <div className="display">
        <div>
          <a href={`/item?id=${id}`} target="blank" className="title">
            {title}
          </a>
          <p className="detail">
            {pluralizePoints} by <Link to={`/user?id=${by}`}>{by}</Link>{" "}
            <Link to={`/item?id=${id}`}>{moment.unix(time).fromNow()}</Link>{" "}
            <span className="divider"></span>
            <a href={`https://www.google.com/search?q=${title}`}>web</a>
            <span className="divider"></span>
            <a href={`https://hn.algolia.com/?query=${title}`}>past</a>
            <span className="divider"></span>
            <Link to={`/item?id=${id}`}>discuss</Link>
            <span className={descendants ? "divider" : null}></span>{" "}
            {descendants ? (
              <Link to={`/item?id=${id}`}>{pluralizeComments}</Link>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default Top;

import React, { Component } from "react";
import * as api from "../api";

export default class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({
        article: article
      });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        <h3>Title: {article.title}</h3>
        <p>Article: #{article.article_id}</p>
        <p id="body">{article.body} </p>
      </div>
    );
  }
}

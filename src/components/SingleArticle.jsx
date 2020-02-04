import React, { Component } from "react";
import * as api from "../api";

export default class SingleArticle extends Component {
  state = {
    article_id: 0,
    title: "",
    body: "",
    topic: "",
    author: "",
    created_at: "",
    comment_count: 0,
    votes: 0,
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({
        ...article,
        isLoading: false
      });
    });
  };

  render() {
    const { article_id, title, body, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading</p>;
    } else {
      return (
        <article>
          <h3>{title}</h3>
          <p>Article {article_id}</p>
          <p id="body">{body} </p>
        </article>
      );
    }
  }
}

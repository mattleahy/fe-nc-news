import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

export default class SingleArticle extends Component {
  state = {
    article: {},
    err: null,
    isLoading: true
  };

  componentDidMount() {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        this.setState({
          article: article,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ isLoading: false, err: err });
      });
  }

  render() {
    const { article, err, isLoading } = this.state;
    if (err) return <ErrorPage err={err.response} />;
    else if (isLoading) return <Loading />;
    else
      return (
        <div>
          <h3>Title: {article.title}</h3>
          <p>Article: #{article.article_id}</p>
          <p id="body">{article.body} </p>
        </div>
      );
  }
}

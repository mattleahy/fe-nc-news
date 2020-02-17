import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import CommentsList from "./CommentsList";
import styles from "../CSS/SingleArticle.module.css";

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
        <section className={styles.article}>
          <h3 className={styles.title}>Title: {article.title}</h3>
          <p className={styles.text} id="body">
            {article.body}{" "}
          </p>
          <CommentsList
            user={this.props.user}
            article_id={article.article_id}
          />
        </section>
      );
  }
}

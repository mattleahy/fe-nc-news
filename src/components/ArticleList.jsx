import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import styles from "../CSS/ArticleList.module.css";

export default class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: null,
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sort_by, order } = this.state;
    const topicChange = prevProps.topic !== topic;
    const orderChange = order !== prevState.order;
    const sortByChange = sort_by !== prevState.sort_by;
    if (topicChange || orderChange || sortByChange) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic, author } = this.props;
    const { sort_by, order } = this.state;
    api
      .getAllArticles(topic, author, sort_by, order)
      .then(articles => {
        this.setState({
          articles: articles,
          isLoading: false,
          err: false
        });
      })
      .catch(err => {
        this.setState({ isLoading: false, err: true });
      });
  };

  sortList = (sort_by, order) => {
    this.setState({ sort_by, order });
  };

  render() {
    const { articles, err, isLoading } = this.state;
    if (err) return <ErrorPage err={err} />;
    else if (isLoading) return <Loading />;
    else
      return (
        <main className={styles.listMain}>
          <h2 className={styles.text}>{this.props.topic} articles</h2>
          <ArticleSorter className={styles.sorter} sortList={this.sortList} />
          <section className={styles.list}>
            <ul>
              {articles.map(article => {
                return (
                  <ArticleCard article={article} key={article.article_id} />
                );
              })}
            </ul>
          </section>
        </main>
      );
  }
}

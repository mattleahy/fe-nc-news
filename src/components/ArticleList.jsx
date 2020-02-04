import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";

export default class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: null
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
    api.getAllArticles(topic, author, sort_by, order).then(articles => {
      this.setState({
        articles: articles
      });
    });
  };

  sortList = (sort_by, order) => {
    this.setState({ sort_by, order });
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <ArticleSorter sortList={this.sortList} />
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }
}

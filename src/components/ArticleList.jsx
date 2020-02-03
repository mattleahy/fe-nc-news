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

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
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

  render() {
    const { articles } = this.state;
    return (
      <div>
        <ArticleSorter />
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }
}

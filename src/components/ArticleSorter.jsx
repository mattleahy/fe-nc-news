import React, { Component } from "react";
import styles from "../CSS/ArticleSorter.module.css";

export default class ArticleSorter extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };

  handleClick = ({ target }) => {
    this.setState({ [target.name]: target.id });
  };

  handleSubmit = event => {
    const { sort_by, order } = this.state;
    const { sortList } = this.props;
    event.preventDefault();
    sortList(sort_by, order);
  };

  render() {
    const { sort_by, order } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <p>Sort By:</p>
        <section id="sort">
          <button
            type="button"
            onClick={this.handleClick}
            name="sort_by"
            id="created_at"
            className={
              sort_by === "created_at" ? styles.selected : styles.unselected
            }
          >
            Date
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            name="sort_by"
            id="votes"
            className={
              sort_by === "votes" ? styles.selected : styles.unselected
            }
          >
            Votes
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            name="sort_by"
            id="comment_count"
            className={
              sort_by === "comment_count" ? styles.selected : styles.unselected
            }
          >
            Comments
          </button>
        </section>
        <p>Order:</p>
        <section id="order">
          <button
            type="button"
            onClick={this.handleClick}
            name="order"
            id="desc"
            className={order === "desc" ? styles.selected : styles.unselected}
          >
            Descending
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            name="order"
            id="asc"
            className={order === "asc" ? styles.selected : styles.unselected}
          >
            Ascending
          </button>
        </section>
        <button type="submit" className={styles.unselected}>
          Submit
        </button>
      </form>
    );
  }
}

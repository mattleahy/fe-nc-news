import React, { Component } from "react";
import styles from "../CSS/ArticleSorter.module.css";

export default class ArticleSorter extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    const { sortList } = this.props;
    const diffSort_by = sort_by !== prevState.sort_by;
    const diffOrder = order !== prevState.order;
    if (diffSort_by || diffOrder) {
      sortList(sort_by, order);
    }
  }

  render() {
    return (
      <section className={styles.sorter}>
        <p className={styles.label}>Sort By:</p>
        <select
          className={styles.sortDropdown}
          onChange={({ target: { value } }) =>
            this.setState({ sort_by: value })
          }
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
        <p className={styles.label}>Order:</p>
        <select
          className={styles.orderDropdown}
          onChange={({ target: { value } }) => this.setState({ order: value })}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </section>
    );
  }
}

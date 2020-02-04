import React, { Component } from "react";

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
      <form className="Article-sort-form" onSubmit={this.handleSubmit}>
        <p>Sort By:</p>
        <section id="sort">
          <button
            type="button"
            onClick={this.handleClick}
            name="sort_by"
            id="created_at"
            className={sort_by === "created_at" ? "selected" : "unselected"}
          >
            Date
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            name="sort_by"
            id="votes"
            className={sort_by === "votes" ? "selected" : "unselected"}
          >
            Votes
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            name="sort_by"
            id="comment_count"
            className={sort_by === "comment_count" ? "selected" : "unselected"}
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
            className={order === "desc" ? "selected" : "unselected"}
          >
            Descending
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            name="order"
            id="asc"
            className={order === "asc" ? "selected" : "unselected"}
          >
            Ascending
          </button>
        </section>
        <button type="submit" className="unselected">
          Submit
        </button>
      </form>
    );
  }
}

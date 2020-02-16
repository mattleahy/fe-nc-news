import React, { Component } from "react";
import * as api from "../api";
import styles from "../CSS/CommentAdder.module.css";

export default class CommentAdder extends Component {
  state = {
    body: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, user } = this.props;
    const { body } = this.state;
    api
      .postCommentByArticleId(article_id, { username: user, body })
      .then(comment => {
        this.props.addComment(comment);
        this.setState({ body: "" });
      });
  };

  render() {
    return (
      <section className={styles.commentAdder}>
        <h4>Comments</h4>
        <label>
          Post comment:
          <form onSubmit={this.handleSubmit}>
            <textarea
              rows="5"
              cols="100"
              placeholder=" Enter comment here..."
              className={styles.textInput}
              required
              onChange={this.handleInput}
              value={this.state.body}
              name="body"
            />
            <br />
            <button className={styles.postButton} type="submit">
              Post
            </button>
          </form>
        </label>
      </section>
    );
  }
}

import React, { Component } from "react";
import * as api from "../api";

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
      <div>
        <label>
          Post comment:
          <form onSubmit={this.handleSubmit}>
            <input
              required
              type="text"
              onChange={this.handleInput}
              value={this.state.body}
              name="body"
            />
            <button type="submit">Post</button>
          </form>
        </label>
      </div>
    );
  }
}

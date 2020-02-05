import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../api";

export default class CommentsList extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    api.getCommentsByArticleId(this.props.article_id).then(comments => {
      this.setState({ comments: comments });
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h3>Comments:</h3>
        <ul id="comment-list">
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </div>
    );
  }
}

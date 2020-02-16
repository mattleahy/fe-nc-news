import React, { Component } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
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

  addComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  deleteComment = id => {
    api.deleteCommentByCommentId(id).then(() => {
      this.setState(({ comments }) => {
        return {
          comments: comments.filter(comment => comment.comment_id !== id)
        };
      });
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <section>
        <CommentAdder
          article_id={this.props.article_id}
          user={this.props.user}
          addComment={this.addComment}
        />
        <ul id="comment-list">
          {comments.map(comment => {
            return (
              <CommentCard
                user={this.props.user}
                key={comment.comment_id}
                deleteComment={this.deleteComment}
                comment={comment}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

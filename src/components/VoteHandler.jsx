import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";
import styles from "../CSS/VoteHandler.module.css";

export default class VoteHandler extends Component {
  state = {
    voteChange: 0,
    disabled: false,
    err: null
  };

  handleClick = voteDifference => {
    const { comment_id, article_id } = this.props;
    this.setState(currentState => {
      return {
        voteChange: currentState.voteChange + voteDifference,
        disabled: true
      };
    });
    if (!article_id) api.patchVotesByCommentId(comment_id, voteDifference);
    else api.patchVotesByArticleId(article_id, voteDifference);
  };

  render() {
    const { votes } = this.props;
    const { voteChange, err } = this.state;
    const up = voteChange === 1;
    const down = voteChange === -1;
    return (
      <section className={styles.VoteHandler}>
        <i
          className={`fas fa-caret-up${up ? "up" : ""}`}
          onClick={() => this.handleClick(1)}
        ></i>
        <p>{votes + voteChange}</p>
        <i
          className={`fas fa-caret-down${down ? "down" : ""}`}
          onClick={() => this.handleClick(-1)}
        ></i>
        {err && <ErrorPage err={err} />}
      </section>
    );
  }
}

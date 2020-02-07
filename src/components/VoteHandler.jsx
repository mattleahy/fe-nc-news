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
    return (
      <section className={styles.VoteHandler}>
        <button disabled={voteChange === 1} onClick={() => this.handleClick(1)}>
          Up
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button
          disabled={voteChange === -1}
          onClick={() => this.handleClick(-1)}
        >
          Down
        </button>
        {err && <ErrorPage err={err} />}
      </section>
    );
  }
}

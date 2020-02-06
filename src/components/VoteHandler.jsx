import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

export default class VoteHandler extends Component {
  state = {
    voteChange: 0,
    disabled: false,
    err: null
  };

  handleClick = voteDifference => {
    const { comment_id, article_id } = this.props;
    this.setState({ disabled: true });
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + voteDifference };
    });
    if (!article_id) api.patchVotesByCommentId(comment_id, voteDifference);
    else api.patchVotesByArticleId(article_id, voteDifference);
  };

  render() {
    const { votes } = this.props;
    const { voteChange, err } = this.state;
    return (
      <section>
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

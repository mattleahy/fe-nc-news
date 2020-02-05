import React, { Component } from "react";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

export default class VoteHandler extends Component {
  state = {
    voteChange: 0,
    err: null
  };

  handleClick = voteDifference => {
    const { article_id } = this.props;
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + voteDifference };
    });
    api.patchVotes(article_id, voteDifference).catch(err => {
      this.setState(currentState => {
        return {
          err: err.response,
          voteChange: currentState.voteChange - voteDifference
        };
      });
    });
  };

  render() {
    const { votes } = this.props;
    const { voteChange, err } = this.state;
    return (
      <section>
        <button onClick={() => this.handleClick(1)}>Up</button>
        <p>Votes: {votes + voteChange}</p>
        <button onClick={() => this.handleClick(-1)}>Down</button>
        {err && <ErrorPage err={err} />}
      </section>
    );
  }
}

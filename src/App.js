import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import TopicPage from "./components/TopicPage";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

export default class App extends React.Component {
  state = {
    user: "jessjelly",
    users: ["jessjelly", "weegembump", "cooljmessy", "tickle122"]
  };
  selectUser = user => {
    this.setState({ user: user });
  };
  render() {
    const { users, user } = this.state;
    return (
      <div className="App">
        <Header selectUser={this.selectUser} user={user} users={users} />
        <Router>
          <HomePage user={user} path="/*" />
          <TopicPage user={user} path="/topics/:topic" />
          <SingleArticle user={user} path="/articles/:article_id" />
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}

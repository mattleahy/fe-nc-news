import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import TopicPage from "./components/TopicPage";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/*" />
        <TopicPage path="/topics/:topic" />
        <SingleArticle path="/articles/:article_id" />
        <ErrorPage default />
      </Router>
    </div>
  );
}

export default App;

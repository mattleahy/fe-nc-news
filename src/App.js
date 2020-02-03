import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import TopicPage from "./components/TopicPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <TopicPage path="/articles/:topic" />
      </Router>
    </div>
  );
}

export default App;

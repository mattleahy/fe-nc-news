import React from "react";
import ArticleList from "./ArticleList";

export default function TopicPage({ topic }) {
  return (
    <main>
      <ArticleList topic={topic} />
    </main>
  );
}

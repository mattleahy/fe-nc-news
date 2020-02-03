import React from "react";
import ArticleList from "./ArticleList";

export default function TopicPage({ topic }) {
  return (
    <div>
      <h3> Articles about {topic} . . .</h3>
      <ArticleList topic={topic} />
    </div>
  );
}

import React from "react";
import { navigate } from "@reach/router";

const handleClick = event => {
  if (event.target.value !== "topic") {
    navigate(`/articles/${event.target.value}`);
  } else navigate(`/articles`);
};

export default function Header() {
  return (
    <div>
      <h1>NC NEWS</h1>
      <select onClick={handleClick} id="topicDropdown">
        <option value="topic">Topic</option>
        <option value="all">All</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
        <option value="football">Football</option>
      </select>
    </div>
  );
}

import React from "react";
import { Link, navigate } from "@reach/router";
import NCLogo from "../nc-logo.png";

const handleClick = event => {
  if (event.target.value !== "topic") {
    navigate(`/topics/${event.target.value}`);
  }
};

export default function Header() {
  return (
    <div className="App-header">
      <Link to="/articles">
        <img
          src={NCLogo}
          className="App-header-logo-image"
          alt="Northcoders Logo"
        />
      </Link>

      <h1>NC NEWS</h1>

      <select onClick={handleClick} id="topicDropdown">
        <option value="topic">Topic</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
        <option value="football">Football</option>
      </select>
    </div>
  );
}

import React from "react";
import { Link, navigate } from "@reach/router";
import NCLogo from "../nc-logo.png";
import styles from "../CSS/Header.module.css";

const handleChange = event => {
  if (event.target.value !== "topic") {
    navigate(`/topics/${event.target.value}`);
  }
};

export default function Header({ user, users, selectUser }) {
  return (
    <div className={styles.header}>
      <Link to="/articles">
        <img src={NCLogo} className={styles.logoImage} alt="Northcoders Logo" />
      </Link>

      <h1>NC NEWS</h1>

      <select onChange={handleChange} id="topicDropdown">
        <option value="topic">Topic</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
        <option value="football">Football</option>
      </select>

      <p>Logged in as : {user}</p>
      <div>
        <p>Select User:</p>
        <div>
          {users.map(user => {
            return (
              <button
                key={user}
                onClick={() => {
                  selectUser(user);
                }}
              >
                {user}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

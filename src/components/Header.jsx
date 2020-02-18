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
    <header className={styles.header}>
      <Link to="/articles">
        <img src={NCLogo} className={styles.logoImage} alt="Northcoders Logo" />
      </Link>

      <h1 className={styles.headerName}>NC NEWS</h1>

      <section className={styles.topicDropdown}>
        <select onChange={handleChange} id="topicDropdown">
          <option value="topic">Topic</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
          <option value="football">Football</option>
        </select>
      </section>

      <section className={styles.loggedInUser}>
        <p>Logged in : {user}</p>
      </section>

      <section className={styles.userSelect}>
        <p>Select User:</p>
        <select
          className={styles.userDropdown}
          onChange={({ target: { value } }) => selectUser(value)}
        >
          {users.map(user => {
            return <option key={user}>{user}</option>;
          })}
        </select>
      </section>
    </header>
  );
}

import React from "react";
import { Link } from "@reach/router";
import dateFormat from "../utils/utils";
import VoteHandler from "./VoteHandler";
import styles from "../CSS/ArticleCard.module.css";

export default function StudentCard(props) {
  const path = `/articles/${props.article.article_id}`;
  return (
    <section className={styles.card}>
      <li className={styles.list}>
        <Link to={path}>
          <label>Title: {props.article.title}</label>
        </Link>
        <br />
        <label>Topic: {props.article.topic}</label>
        <br />
        <label>Author: {props.article.author}</label>
        <br />
        <label>Date: {dateFormat(props.article.created_at)}</label>
        <br />
        <label>Comments: {props.article.comment_count}</label>
        <br />
      </li>
      <VoteHandler
        className={styles.VoteHandler}
        article_id={props.article.article_id}
        votes={props.article.votes}
      />
    </section>
  );
}

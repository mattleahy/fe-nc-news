import React from "react";
import { Link } from "@reach/router";
import dateFormat from "../utils/utils";
import VoteHandler from "./VoteHandler";
import styles from "../CSS/ArticleCard.module.css";

export default function ArticleCard(props) {
  const path = `/articles/${props.article.article_id}`;
  return (
    <li className={styles.card}>
      <section className={styles.sidebar}>
        <section className={styles.voter}>
          <VoteHandler
            article_id={props.article.article_id}
            votes={props.article.votes}
            disabled={props.user === props.article.author}
          />
        </section>
        <section>
          <i className="fas fa-comments article-card-comments"></i>
          <br />
          <label>{props.article.comment_count}</label>
        </section>
      </section>

      <label className={styles.topic}>{props.article.topic}</label>

      <Link to={path} className={styles.title}>
        <label className={styles.linkTitle}>{props.article.title}</label>
      </Link>

      <section className={styles.info}>
        <p className={styles.infoText}>author: {props.article.author}</p>
        <p className={styles.infoText}>
          date: {dateFormat(props.article.created_at)}
        </p>
      </section>
    </li>
  );
}

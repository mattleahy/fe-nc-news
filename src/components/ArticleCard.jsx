import React from "react";
import dateFormat from "../utils/utils";
import VoteHandler from "./VoteHandler";

export default function StudentCard(props) {
  return (
    <section>
      <li>
        <label>Title: {props.article.title}</label>
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
        article_id={props.article.article_id}
        votes={props.article.votes}
      />
    </section>
  );
}

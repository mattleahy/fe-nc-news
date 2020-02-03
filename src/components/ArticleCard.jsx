import React from "react";

export default function StudentCard(props) {
  return (
    <li>
      <label>Title: {props.article.title}</label>
      <br />
      <label>Topic: {props.article.topic}</label>
      <br />
      <label>Author: {props.article.author}</label>
      <br />
      <label>Created_at: {props.article.created_at}</label>
    </li>
  );
}

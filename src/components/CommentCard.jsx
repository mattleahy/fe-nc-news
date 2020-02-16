import React from "react";
import dateFormat from "../utils/utils";
import VoteHandler from "./VoteHandler";
import styles from "../CSS/CommentCard.module.css";

export default function CommentCard({ comment, deleteComment, user }) {
  return (
    <section className={styles.card}>
      <li className={styles.cardList}>
        <VoteHandler comment_id={comment.comment_id} votes={comment.votes} />
        <p className={styles.text}>{comment.body}</p>
        <p className={styles.user}>User: {comment.author} </p>
        <p className={styles.date}>Date: {dateFormat(comment.created_at)}</p>
        <button
          className={styles.delete}
          onClick={() => {
            deleteComment(comment.comment_id);
          }}
          disabled={comment.author !== user}
        >
          Delete
        </button>
      </li>
    </section>
  );
}

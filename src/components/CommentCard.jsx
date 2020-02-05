import React from "react";
import dateFormat from "../utils/utils";
import VoteHandler from "./VoteHandler";

export default function CommentCard({ comment }) {
  return (
    <li>
      <VoteHandler comment_id={comment.comment_id} votes={comment.votes} />
      <p>User: {comment.author} </p>
      <p>Date: {dateFormat(comment.created_at)}</p>
      <p>{comment.body}</p>
    </li>
  );
}

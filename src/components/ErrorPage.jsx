import React from "react";

export default function ErrorPage({ err }) {
  return (
    <div>
      <h2>Something went wrong. Status: {err.status}</h2>
    </div>
  );
}

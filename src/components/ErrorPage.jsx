import React from "react";

export default function ErrorPage({ err }) {
  return (
    <div>
      <h2>
        Something went wrong. Status: {err.status}: {err.data.msg}
      </h2>
    </div>
  );
}

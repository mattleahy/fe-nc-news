import React from "react";
import styles from "../CSS/ErrorPage.module.css";

export default function ErrorPage({ err }) {
  return (
    <section className={styles.errorSection}>
      <h2 className={styles.errorHeader}>Something went wrong!</h2>
      <p className={styles.status}>Status: {err.status}</p>
      <p className={styles.message}>{err.data.msg}</p>
    </section>
  );
}

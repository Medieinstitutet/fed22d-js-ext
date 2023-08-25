"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((todos) => console.log(todos));

    fetch("/api/todos/10")
      .then((response) => response.json())
      .then((id) => console.log(id));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
    </main>
  );
}

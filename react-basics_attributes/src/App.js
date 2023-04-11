import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Article Title</h2>
      <label htmlFor="input">Label</label>
      <input name="input"></input>
      <a
        className="article__link"
        href="https://unsplash.com/de/s/fotos/cute-dog"
      >
        Click for cute dogs
      </a>
    </article>
  );
}

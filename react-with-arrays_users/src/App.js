import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

// 1. Use `Array.map` to create a card for each user in the `USERS` array. Make sure to add a unique key to each card.

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((USER, id) => {
          return <Card key={id} user={USER} />;
        })}

        {/* <Card user={USERS[0]} /> */}
      </div>
    </main>
  );
}

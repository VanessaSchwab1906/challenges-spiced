import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

// - In the `App` component, write a `handleAddTag` function which receives one parameter, e.g. `newTag`.
// - Call the state setter function and add the new tag to the current state.
// - Pass `handleAddTag` to the `Form` component using the correct prop name.

// - In the `App` component, write a `handleDeleteTag` function which receives one parameter, e.g. `tagToDelete`.
// - Call the state setter function and remove the tag from the current state.
// - Pass `handleDeleteTag` to the `List` component using the correct prop name.

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  function handleDeleteTag(tagToDelete) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }
  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List onDeleteTag={handleDeleteTag} tags={tags} />
    </main>
  );
}

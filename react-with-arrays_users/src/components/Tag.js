import "./Tag.css";

// 3. At last, refactor the `Tag` component: it should receive an additional class called 'Tag--highlight' if the `tag` prop equals the string 'admin' (compare the `Tag.css` file).

export default function Tag({ tag }) {
  let tagClass = "tag";
  if (tag === "admin") tagClass = "tag tag--highlight";
  return <li className={tagClass}>{tag}</li>;
}

import "./EntryForm.css";
import Button from "../Button";

// - Update this component's function declaration to accept a new prop, like `onAddEntry`. The prop should be used for an event that you trigger when a new journal entry should be added.

// - Write a function `handleSubmit` and pass it as the `onSubmit` attribute of the `form` JSX tag.
// - In `handleSubmit` gather the values of all input fields. (Hint: you can use `new FormData()` for this.)
// - Don't forget to prevent the default form behavior when submitting.
// - In `handleSubmit` create an object with the keys `motto` and `notes` containing the fields' values.
// - Call `onAddEntry` and pass the object.
// - Make sure to reset the form after submitting.

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEntry(data);
    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}

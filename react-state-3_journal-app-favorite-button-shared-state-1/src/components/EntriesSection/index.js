import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

// Locate the component that renders the list of all entries. Here it's `EntrySection`.

// - Accept the prop `onToggleFavorite`.
// - Adjust the integration of the `Entry` component to pass the `onToggleFavorite` prop.
// - In addition pass each entry's `id` and `isFavorite` information to the `Entry` component as prop.

export default function EntriesSection({ entries, onToggleFavorite }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              id={entry.id}
              isFavorite={entry.isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

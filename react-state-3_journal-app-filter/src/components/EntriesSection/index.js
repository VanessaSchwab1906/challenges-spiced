import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

// The component having both buttons needs to expose two events - one event for each button.

// - Add two new props to the function declaration of this component: `onShowAllEntries` and `onShowFavoriteEntries`
// - Pass the respective prop to the `onClick` prop on the filter buttons

// Both buttons are now able to inform their parent component when they are clicked! 🚀

export default function EntriesSection({
  entries,
  filter,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active onClick={onShowAllEntries}>
          All Entries{" "}
          <Badge isActive={filter === "all" ? true : false}>
            {allEntriesCount}
          </Badge>
        </Tab>
        <Tab onClick={onShowFavoriteEntries}>
          Favorites{" "}
          <Badge isActive={filter === "favorites" ? true : false}>
            {favoriteEntriesCount}
          </Badge>
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
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

// Locate the component with the favorite button. Here it's called `FavoriteButton`.

// The component has an `isFavorite` boolean variable. This variable is used to determine if the star icon should be filled in or not.

// - Make `isFavorite` a state variable.
// - This state variable needs to be toggled when the user clicks the favorite button.

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
        setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

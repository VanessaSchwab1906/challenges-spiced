console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

// And now it's your turn: delete the value `null` and write code such that the variables have a value corresponding to their name. Use `filter` to achieve this goal.

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});

// console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});

// console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked === false;
});

// console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    (card.isBookmarked === true && card.tags.includes("js")) ||
    cards.tags.includes("html")
  );
});

// console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};

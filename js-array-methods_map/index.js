// And now it's your turn: delete the value `null` and write code such that the variables have a value corresponding to their name. Use `map` to achieve this goal.

// You will find some hints as comments.

console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
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
    tags: ["js", "next", "advanced"],
  },
];

// ['as often as you like.', ...]
const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});

console.log(lowerCaseAnswers);

// ["How often can I use <header>? - As often as you like.", ...]
const questionsAndAnswersTogether = cards.map((card) => {
  return `${card.question} - ${card.answer}`;
});

console.log(questionsAndAnswersTogether);

// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
const questionAndAnswer = cards.map((card) => {
  return `{${card.question} , ${card.answer}}`;
});

console.log(questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

// This page shows an example of a social media post. Your task is to replicate the social media post with JavaScript. Use document.createElement() to generate all HTML elements separately.

// Don't use .innerHTML to create the HTML in one instance, but use multiple calls of document.createElement() instead.

// The index.html demonstrates the required HTML tags, structure and class names.

// Append the second social media post to the body. Don't forget to add the event listener to the like button. You can use the function handleLikeButtonClick for the event listener.

console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
document.body.append(article);
article.classList.add("post");

const paragraph = document.createElement("p");
article.append(paragraph);
paragraph.classList.add("post__content");
paragraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
article.append(footer);
footer.classList.add("post__footer");

const span = document.createElement("span");
footer.append(span);
span.classList.add("post__username");
span.textContent = "@username";

const button = document.createElement("button");
footer.append(button);
button.classList.add("post__button");
button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button");
button.textContent = "♥ Like";

button.addEventListener("click", handleLikeButtonClick);

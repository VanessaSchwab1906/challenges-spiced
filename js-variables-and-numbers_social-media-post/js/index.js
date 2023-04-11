console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Social Media Post";
const text = "This is a Social Media Post";
let numberOfLikes = 100;
const user = "Vanessa1906";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("Title:", title);
console.log("Text:", text);
console.log("Number of Likes:", numberOfLikes);
console.log("User:", user);
console.log("Is reported:", isReported);

numberOfLikes += 1;
console.log("Number of likes increased by 1: ", numberOfLikes);

numberOfLikes += 1;
console.log("Number of likes increased by 1: ", numberOfLikes);

// --^-- write your code here --^--

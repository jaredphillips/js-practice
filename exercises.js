// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var children = 1;
var jobTitle = "programmer";
var geoLocation = "New York";
var partner = "Rachel";

var future = ("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with " + children + " kids.")
console.log(future)

// Forgot how old you are? Calculate it!

// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate your 2 possible ages based on the stored values.
// Output them to the screen like so: "You are either NN or NN", substituting the values.

var currentYear = 2013;
var birthdayYear = 1978;

var age = currentYear - birthdayYear;
var possible = age - 1;

var answerToAge = ("You are either " + age + " or " + possible)
console.log(answerToAge)
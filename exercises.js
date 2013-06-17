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

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var favouriteSnack = "Fruit Roll-Ups"
var currentAge = 35;
var maximumAge = 99;
var amountPerDay = 2;
var lifeTimeSupplyCalculated = (maximumAge - currentAge) * (365 * amountPerDay);

var lifeTimeSupply = ("You will need " + lifeTimeSupplyCalculated + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge )
console.log(lifeTimeSupply)

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren, partnerName, location, jobTitle) {
  console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids.")
}

tellFortune(4, "Rachel", "New York", "Programmer")
tellFortune(1, "Suzy", "Los Angeles", "Movie Star")
tellFortune(10, "Kim Kardashinon", "New York", "Programmer")

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear) {
	var age = (currentYear - birthYear)
	var alsoPossible = (age - 1)
	console.log("You are either " + age + " or " + alsoPossible )
}

calculateAge(1978, 2013)
calculateAge(1953, 2013)
calculateAge(1995, 2013)




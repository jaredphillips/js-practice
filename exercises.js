// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// var children = 1;
// var jobTitle = "programmer";
// var geoLocation = "New York";
// var partner = "Rachel";

// var future = ("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with " + children + " kids.")
// console.log(future)

// Forgot how old you are? Calculate it!

// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate your 2 possible ages based on the stored values.
// Output them to the screen like so: "You are either NN or NN", substituting the values.

// var currentYear = 2013;
// var birthdayYear = 1978;

// var age = currentYear - birthdayYear;
// var possible = age - 1;

// var answerToAge = ("You are either " + age + " or " + possible)
// console.log(answerToAge)

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// var favouriteSnack = "Fruit Roll-Ups"
// var currentAge = 35;
// var maximumAge = 99;
// var amountPerDay = 2;
// var lifeTimeSupplyCalculated = (maximumAge - currentAge) * (365 * amountPerDay);

// var lifeTimeSupply = ("You will need " + lifeTimeSupplyCalculated + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge )
// console.log(lifeTimeSupply)

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// function tellFortune(numChildren, partnerName, location, jobTitle) {
//   console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids.")
// }

// tellFortune(4, "Rachel", "New York", "Programmer")
// tellFortune(1, "Suzy", "Los Angeles", "Movie Star")
// tellFortune(10, "Kim Kardashinon", "New York", "Programmer")

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// function calculateAge(birthYear, currentYear) {
// 	var age = (currentYear - birthYear)
// 	var alsoPossible = (age - 1)
// 	console.log("You are either " + age + " or " + alsoPossible )
// }

// calculateAge(1978, 2013)
// calculateAge(1953, 2013)
// calculateAge(1995, 2013)

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// function lifeTimeSupply(age, amountPerDay) {
// 	var maxAge = 99;
// 	var calculation = ((maxAge - age) * (amountPerDay * 365));
// 	console.log("You will need " + calculation + " to last you until the ripe old age of " + maxAge);
// }

// lifeTimeSupply(56, 3)
// lifeTimeSupply(26, 10)
// lifeTimeSupply(42, 2)

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works 
// (e.g. "The greater number of 5 and 10 is 10.").

// function greaterNum (num1, num2) {
// 	if (num1 > num2) {
// 		console.log(num1);
// 	} else {
// 		console.log(num2);
// 	}
// }

// greaterNum(5, 10)
// greaterNum(10, 20)
// greaterNum(1, 2)

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. 
// It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// function helloWorld(languageCode) {
// 	if (languageCode == "es") {
// 		console.log("Hello, world - es");
// 	} else if (languageCode == "de") {
// 		console.log("Hello, world - de");
// 	}	else if (languageCode == "en") {
// 		console.log("Hello, world - en");
// 	} else {
// 		console.log("Hello, world - en");
// 	}
// }

// helloWorld("es")
// helloWorld("en")
// helloWorld("de")
// helloWorld("en")


// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function assignGrade(score) {
// 	if (score > 90) {
// 		return 'A';
// 	} else if (score > 80) {
// 		return 'B';
// 	} else if (score > 70) {
// 		return 'C';
// 	} else if (score > 60) {
// 		return 'D';
// 	} else {
// 		return 'F'
// 	}
// }

// assignGrade(67)
// assignGrade(63)
// assignGrade(91)
// assignGrade(87)
// assignGrade(45)


// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese"


// function pluralize(noun, number) {
//     if (number != 1 && noun != 'sheep' && noun != 'geese') {
//         return number + ' ' + noun + 's';
//     } else {
//         return number + ' ' + noun;
//     }
// }

// console.log('I have ' + pluralize('cat', 0));
// console.log('I have ' + pluralize('cat', 1));
// console.log('I have ' + pluralize('cat', 2));

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if 
// the current number is even or odd, and report that to the screen (e.g. "2 is even").

// for (var i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' is even');
//   } else {
//     console.log(i + ' is odd');
//   }
// }


// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 
// 1 to 10 (100 results total).

// for (var i = 0; i <= 10; i++) {
// 	console.log(i  + " * 9 = " + i * 9)
// }

// Check the results of assignGrade function from the conditionals 
// exercise for every value from 60 to 100 - 
// so your log should show "For 89, you got a B. For 90, you got an A.", etc.

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }

// for (var i = 60; i <= 100; i++) {
//   console.log('For ' + i + ', you got a ' + assignGrade(i));
// }






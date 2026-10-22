//Ex 1: prompt color, output with template literal//
var favoriteColor = prompt("What is your favorite color?");
console.log(`Your favorite color is ${favoriteColor}.`);
//Ex 2: prompt name and birth year, output literals, types, operators//
var userName = prompt("What is your name?");
var userBirthYear = Number(prompt("In what year were you born?"));
//Need current year to autocalc age without prompting for current year//
//Were instructions underspecified or just sneaky?//
const thisYear = new Date().getFullYear();
console.log(`${userName}, you are ${thisYear - userBirthYear} years old.`);
//Output will undercount age by a year while current MMDD < birth MMDD//
//Ex 3: prompt, literals, type, operators, toFixed()//
var hourlyWage = Number(prompt("What is your hourly wage?")).toFixed(2);
var hoursWorked = Number(prompt("How many hours did you work this week?")).toFixed(0);
//Hours toFixed(0) rounds, so is inaccurate for fractional hours//
//Need way to round or truncate to nearest hour fraction, e.g., 15 minutes//
console.log(`Your gross pay this week was $${(hourlyWage * hoursWorked).toFixed(2)}.`);
//How to format currency with thousand comma separators?//
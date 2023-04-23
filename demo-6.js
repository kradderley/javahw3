/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

// 2. Create today's date
console.log(Date());
console.log(Date.now());

// 3. Get the current timestamp (using a static method of Date)
const today = new Date();
console.log(today);

// 4. Create a date to represent next Christmas Day

const christmas = new Date(1735081200 * 1000);
console.log(christmas + 1);

// 5. Work out how many days it is until christmas
// Get difference between now and xmas
// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
// Math.floor for whole days; Math.ceil to include today

let difference = christmas.getTime() - today.getTime();
console.log(difference);

let totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
console.log(totalDays);

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

// Response:
if (date1 > date2) {
  console.log(`Date 1 is later date`);
} else {
  console.log(`Date 2 is the later date.`);
}

// 7. How do I test if a date is valid? ****

console.log(typeof today);
// or
console.log(today instanceof Date);

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object
const today1 = new Date();

arrMonth = ["01", "02", "03", "04", "05"];
const month = today1.getMonth();
const day = today1.getDate();
const year = today1.getFullYear();

console.log(`${arrMonth[month]} - ${day} - ${year}`);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')
console.log(today1.toLocaleDateString("en-GB"));
console.log(today1.toLocaleDateString("de-DE"));

// 10. Output the current time in hours, mins & seconds
console.log(today.getHours(), today.getMinutes(), today.getSeconds());

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.
const future = Date.now() + 100;
console.log(future.toLocaleString());

// setInterval(function (){
//   const now = Date.now();
//   console.log(now + future)
// }, 1)

// 12. Create a copy of today

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now
const anotherDate = new Date();
anotherDate.setTime(anotherDate.getTime() + 86400 * 1000);
anotherDate.setMonth(5);
anotherDate.setFullYear(2026);

console.log(anotherDate.toLocaleString());

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)
const todaysDate = new Date();
console.log(todaysDate.getTimezoneOffset() / -60);

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
};

const when = new Date();

const sydneyDate = new Intl.DateTimeFormat("en-AU", options);

console.log(sydneyDate.format(when));

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.
// function msDate() {
//   console.log(Date())
// }

// msDate(); 
// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

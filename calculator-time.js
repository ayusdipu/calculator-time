// Calculator Time

// Calling the variable time now
// Level 0
let today = new Date();
console.log("Today's date is " + today);

var day = 1000 * 3600 * 24;

// Level 1
// Different time format

var isodate = new Date("2015-03-25");
console.log("This is isodate " + isodate);

var shortdate = new Date("03/25/2015");
console.log("This is shortdate " + shortdate);

var longdate = new Date("Mar 25 2015");
console.log("This is longdate " + longdate);


// Calculating Yesterday, Tomorrow
// Level 2
var yesterday = new Date();
yesterday.setTime(today.getTime() - 1*day);
console.log("Yesterday date is " + yesterday);

var tomorrow = new Date();
tomorrow.setTime(today.getTime() + 1*day);
console.log("Tomorrow date is " + tomorrow);


// level 3
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[today.getDay()];
console.log("Today is " + n)


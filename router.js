/**
 * File contains the routes for the HTTP request using a handler for each route
 * Hello Route is handled by Hello Handler
 * Not Found Route is handled by Not Found Handler
 */

// Load the time module
const getHourAndMinute = require("./time");

// Define the handler
let handler = {};

// Define and store all the greetings for different part of the day
const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];

// Handler hello
handler.hello = (query, callback) => {
  // get the username from the query
  let username =
    typeof query.username !== "undefined" ? query.username : "World";

  // Get hour and minute store in time variable as an object
  let time = getHourAndMinute();

  // select the correct greeting based on the time of the day
  let chosenGreeting =
    time.hour < 12 && time.hour == 0
      ? greetings[0]
      : time.hour > 12 && time.hour < 18
        ? greetings[1]
        : greetings[2];

  // Store the hello object
  let hello = {
    greetings: chosenGreeting,
    username: username,
    time: time
  };

  callback(200, hello);
};

// Handler notFound
handler.notFound = (query, callback) => {
  callback(404, "Unknown Path");
};

// Define the router
let router = {
  hello: handler.hello,
  notFound: handler.notFound
};

// Export Router
module.exports = router;

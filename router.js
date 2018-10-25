/**
 * File contains the routes for the HTTP request using a handler for each route
 * Hello Route is handled by Hello Handler
 * Not Found Route is handled by Not Found Handler
 */

// Load the time and language module
const getHourAndMinute = require("./time");
const { greetings, salam, salutations } = require("./languages");

// Define the handler
let handler = {};

// Handler hello
handler.hello = (query, callback) => {
  // get the username from the query, set world as default
  let username =
    typeof query.username !== "undefined" ? query.username : "World";

  // get the language of choice, set English as default
  let language = typeof query.language !== "undefined" ? query.language : "en";

  // get the chosen greeting based on the language
  const chosenGreetings =
    language == "en" ? greetings : language == "in" ? salam : salutations;

  // Get hour and minute store in time variable as an object
  let time = getHourAndMinute();

  // select the correct greeting based on the time of the day
  let greeting =
    time.hour < 12 && time.hour >= 00
      ? chosenGreetings[0]
      : time.hour >= 12 && time.hour <= 18
        ? chosenGreetings[1]
        : chosenGreetings[2];

  // Store the hello object
  let helloPacket = {
    greetings: greeting,
    username: username,
    time: time
  };

  callback(200, helloPacket);
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

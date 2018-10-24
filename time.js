/**
 * Module that returns the time of the day
 * Including : Hour and Minute
 */

// Define get time function
const getTime = () => {
  // Get time of the day
  let date = new Date();

  // Get the hour of the day and add zero if less than 2 digits
  let hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  // Get the minute of the day and add zero if less than 2 digits
  let minute = date.getMinutes();
  minute = (minute < 10 ? "0" : "") + minute;

  // Return as object
  return {
    hour: hour,
    minute: minute
  };
};

// Export the function
module.exports = getTime;

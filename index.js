/**
 * Primary file for the API
 * Create server and server listens to port 3000
 * URL and Query are parsed and trimmed
 */

// Load all the dependencies
const http = require("http");
const url = require("url");
const router = require("./router");

// Create the server
const server = http.createServer((req, res) => {
  // get URL and parse it
  let parsedURL = url.parse(req.url, true);

  // get the path from the URL
  let path = parsedURL.pathname;

  // Trim the path without slashes
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get the query
  let query = parsedURL.query;

  // Get the correct handler
  let chosenHandler =
    typeof router[trimmedPath] !== "undefined"
      ? router[trimmedPath]
      : router.notFound;

  // Run the chosen handler
  chosenHandler(query, (statusCode, data) => {
    res.setHeader("content-type", "application/json");
    res.writeHead(statusCode);
    let dataJSON = JSON.stringify(data);
    res.end(dataJSON);
  });
});

// Run server listen to port 3000
server.listen(3000, () => {
  console.log("Server listen to port 3000");
});

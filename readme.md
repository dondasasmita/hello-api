# Hello API

This is the first assignment in node masterclass course by pirple.

This program is a simple "Hello World" API. It is a RESTful JSON API that listens to port 3000. When someone make a GET request to the route /hello, it will return a greeting, based on the time of the day, and time in JSON format.

## Getting Started

In order to use this program, you need to have node installed and get this repository in your machine

## Run the program

Run the node program by typing the following command in your terminal:

```
node index.js
```

You should see in the console:

```
Server listen to port 3000
```

Type the following URL in your browser or postman and insert your name:

```
localhost:3000/hello?username=[ENTER YOUR NAME]
```

You should be getting a JSON object as follow:

```
{
    greeting: "",
    username: "",
    time: {
        hour: "",
        minute: ""
    }
}
```

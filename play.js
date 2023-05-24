const {connect} = require("./client.js")

const net = require("net");

//handle user input to terminate program if user uses control + c
const handleUserInput = function (key) {
  if (key == '\u0003') {
    process.exit();
  }  
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");

//calling the functions to run 
connect();
setupInput();
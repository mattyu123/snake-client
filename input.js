//get the required key
const {movementKeys} = require("./constants.js")

//stores the active TCP object 
let connection;

//handle user input to terminate program if user uses control + c, and console.logs whatever key is passed through the program 
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }  

  //checks for the key in the input, and writes the approproate value to the server
  if(key) {
    connection.write(movementKeys[key]);
  }
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
}


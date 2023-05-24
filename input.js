let conn 

//handle user input to terminate program if user uses control + c, and console.logs whatever key is passed through the program 
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }  
  if (key === 'w') {
    console.log("You moved up")
  }
  if (key === 'd') {
    console.log("You moved right")
  }
  if (key === 's') {
    console.log("You moved down")
  }
  if (key === 'a') {
    console.log("You moved left")
  }
};

// setup interface to handle user input from stdin
const setupInput = function (connection) {
  const conn = connection;
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


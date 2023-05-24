//stores the active TCP object 
let connection;

//handle user input to terminate program if user uses control + c, and console.logs whatever key is passed through the program 
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }  
  if (key === 'w') {
    connection.write("Move: up")
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down")
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


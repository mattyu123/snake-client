const net = require("net");
const {IP,PORT} = require("./constants.js");

//Establish a connection with the server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //Interpret incoming data as text
  conn.setEncoding("utf8");

  //Lets the client side know that they have successfully connected to the server
  conn.on("connect", () => {
    console.log("A successful connection has been made to the server");
  });

  //Name for the snake is shown on the server and moves the snake up one spot on the board
  conn.on("connect", () => {
    conn.write("Name: M.Y");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = {
  connect,
};
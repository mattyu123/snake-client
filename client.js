const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
  })

  //Lets the client side know that they have successfully connected to the server 
  conn.on("connect", () => {
    console.log("A successful connection has been made to the server")
  })

  //Name for the snake is shown on the server and moves the snake up one spot on the board
  conn.on("connect", () => {
    conn.write("Name: M.Y");
    // conn.write("Move: up");
  });

  //Name for the snake is shown on the server and moves the snake up one spot on the board
  // conn.on("connect", () => {
  //   setTimeout(() => conn.write("Move: left"), 50); 
  //   });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
}

module.exports = {
  connect,
};
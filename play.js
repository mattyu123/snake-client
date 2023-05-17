const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 3000
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
}

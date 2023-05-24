const {connect} = require("./client.js")
const {setupInput} = require("./input.js")

const net = require("net");


console.log("Connecting ...");

//calling the functions to run 
const conn = connect()
setupInput(conn);
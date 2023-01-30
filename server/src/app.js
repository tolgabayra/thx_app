const express = require("express");
const app = express()
const morgan = require("morgan")



app.use(morgan("combined"))
app.use(express.json())



app.listen(8000, () => {
  console.log("Server Is Running...");
})
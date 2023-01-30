const express = require("express");
const app = express()
const morgan = require("morgan")
const processRoutes = require("../routes/process-routes")


app.use(morgan("combined"))
app.use(express.json())


app.use("/api", processRoutes)


app.listen(8000, () => {
  console.log("Server Is Running...");
})
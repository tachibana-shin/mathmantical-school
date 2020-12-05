const express = require("express")
const app = express()
const fs = require("fs")

app.use(require("cors")())

app.route("/api/get-subject/:name").get((req, res) => {
  let data
  
  try {
    data = require("./" + req.params.name)
  } catch(e) {}
  
  res.json(data)
})
app.listen(3000, () => console.log(`App is running in port 3000`))
const fs = require("fs")
const path = require("path")

fs.readdirSync("./").forEach(item => {
  if ( fs.lstatSync(item).isDirection()) {
    fs.readdirSync(item).forEach((item, index) => {
      fs.renameSync(item, path.dirname(item) + "/" + (index + 1) + ".png")
    })
  }
})
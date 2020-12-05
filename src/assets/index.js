const fs = require("fs")
const path = require("path")

fs.readdirSync(__dirname).forEach(item => {
  if ( fs.lstatSync(item).isDirectory()) {
    fs.readdirSync(item).forEach((itm, index) => {
      fs.readdirSync(item + "/" + itm).forEach((it, index) => {
        const pathReal = `${__dirname}/${item}/${itm}/${it}`
        fs.renameSync(pathReal, path.dirname(pathReal) + "/" + (index + 1) + ".png")
      })
      return 
      fs.renameSync(__dirname + "/" + item + "/" + itm, path.resolve(__dirname + "/" + item + "/" + itm) + "/" + (index + 1) + ".png")
    })
  }
})
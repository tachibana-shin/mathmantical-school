const fs = require("fs")
const path = require("path")
const Module = require("module")
const pug = require("pug")

function trim(string) {
  return (string + "").replace(/^\s|\s$/g, "")
}

function jsMeToObject(jsme) {
  jsme = jsme.split("\n")
  const object = {}
  let lastKey

  jsme.forEach(item => {
    item = item.split(":")
    const key = trim(item[0])

    value = item.slice(1).join(":")
    if (!!trim(value)) {
      object[key] = key == "items" ? eval(trim(value)) : (key == "question" ? "p.grey--text.text--darken-2 " : "") + trim(value)
      lastKey = key
    } else {
      object[lastKey] += "\n" + (lastKey == "question" ? "p.text-h5.text-center " : "") + key
    }
  })

  return object
}

Module._extensions[".jsme"] = function(module, fn) {
  const data = trim(fs.readFileSync(fn)).replace(/\r/g, "").split(/\n[\t ]{0,}\n/).map(jsMeToObject)
  
  module.exports = {
    ...(data[0].about ? data[0] : {}),
    questions: data.slice(data[0].about ? 1 : 0)
  }
}

const data = []

fs.readdirSync(__dirname).forEach(item => {
  if (fs.lstatSync(path.resolve(item = __dirname + "/" + item)).isDirectory()) {
    fs.readdirSync(item).forEach(item2 => {
      const lesson = require(`${item}/${item2}`)

      lesson.questions = lesson.questions.map(item3 => {
        try {
          item3.question = item3.type == "dragdrop-group" ? item3.question : pug.render(item3.question)
        } catch (e) {
          console.log(e)
          console.log(item3)
          console.error(`in ${item}/${item2}`)
        }
        return item3
      })
      data.push(lesson)
    })
  }
})

module.exports = data
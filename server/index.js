const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
const Module = require("module")
const pug = require("pug")
const lessonAbout = require(__dirname + "/lesson-about/index.js")
const serveStatic = require('serve-static');
const port = process.env.PORT || 3000

app.use(serveStatic(__dirname + "/../dist"));
require("dotenv").config()
app.use(require("cors")())

app.route("/api/get-subject/class-:class/week-:week").get((req, res) => {
  let data
  const uriDocument = __dirname + `/data/Class-${req.params.class}_T${req.params.week}.js`

  try {
    if (fs.existsSync(uriDocument)) {
      let dataLesson = lessonAbout.find(item => item.class == req.params.class)

      if (dataLesson) {
        dataLesson = dataLesson.items[req.params.week]
      }


      data = {
        statusCode: 200,
        data: {
          title: dataLesson.name,
          items: require(uriDocument).map(item => ({
            ...item,
            question: item.type == "dragdrop-group" ? item.question : pug.render(item.question)

          }))
        }
      }
    } else {
      data = {
        statusCode: 404,
        message: "Can't find this a document."
      }
    }
  } catch (e) {
    console.log(e)
    data = {
      statusCode: 403,
      message: "This document error!"
    }
  }

  res.status(data.statusCode).json(data)
})

app.route("/api/get-about-subject/class-:class/week-:week").get((req, res) => {

  let dataLesson = lessonAbout.find(item => item.class == req.params.class)

  if (dataLesson) {
    dataLesson = dataLesson.items[req.params.week]
  }
  if (!dataLesson) {
    res.status(404).json({
      statusCode: 404
    })
  } else {
    res.json({
      statusCode: 200,
      data: dataLesson
    })
  }
})
app.route("/api/get-subject").get((req, res) => {
  res.json({
    statusCode: 200,
    data: lessonAbout.map(item => ({
      class: item.class,
      items: item.items.map(({ path, name, image, type }) => ({ path, name, image, type }))
    }))
  })
})
app.route("/api/resources/assets/*").get((req, res) => {
  const itPath = `${__dirname}/assets/${req.params[0].replace("..", "")}`

  if (fs.existsSync(itPath)) {
    res.sendFile(itPath)
  } else {
    res.status(404).send("Not Found")
  }
})

app.listen(port, () => console.log(`App is running in port ${port}`));

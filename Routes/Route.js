const ExpressApi = require("../API/Api")
const route = require("express").Router()

route.get("/api/main",ExpressApi)

module.exports = route
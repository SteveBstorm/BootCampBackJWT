const express = require("express")
const router = express.Router()

const routerEmployees = require("./employees.router")
const routerAuth = require("./auth.router")

router.use("/auth", routerAuth)
router.use("/employees", routerEmployees)

module.exports = router
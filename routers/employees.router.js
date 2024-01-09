const routerEmployees = require("express").Router()
const employeesController = require("../controllers/employees.controller")
const { authJwt } = require("../middlewares/auth.middleware")

routerEmployees
    .route("/")
        .get(authJwt("admin"), employeesController.getAll)

routerEmployees.route("/:id").get(authJwt("admin"), employeesController.getOne)

module.exports = routerEmployees

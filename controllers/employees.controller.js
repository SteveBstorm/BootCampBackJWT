const employeesService = require("../services/employees.service")

const employeesController = {

    getAll : async (req, res) => {
        let allEmployees = await employeesService.getAll()
        res.json(allEmployees)
    }
}

module.exports = employeesController
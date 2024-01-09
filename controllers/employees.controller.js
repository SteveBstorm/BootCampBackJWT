const employeesService = require("../services/employees.service")

const employeesController = {

    getAll : async (req, res) => {
        let allEmployees = await employeesService.getAll()
        res.json(allEmployees)
    },

    getOne : async(req, res) => {
        console.log(req.params)
        res.json(await employeesService.getOne(req.params.id))
    }
}

module.exports = employeesController
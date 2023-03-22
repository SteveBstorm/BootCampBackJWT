const employeesModels = require("../models/employees.models")

const employeesService = {
  
    getAll : async () => {
        return await employeesModels.getAll()
    }
}


module.exports = employeesService
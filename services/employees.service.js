const employeesModels = require("../models/employees.models")

const employeesService = {
  
    getAll : async () => {
        return await employeesModels.getAll()
    },

    getOne : async (id) =>  {
        return await employeesModels.getOne(id)
    }
}


module.exports = employeesService
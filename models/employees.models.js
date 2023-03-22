const employees = require("../datas/employees.json")

const employeesModels = {
    getAll : () => {
        return [...employees]
    },
}


module.exports = employeesModels
const employees = require("../datas/employees.json")

const employeesModels = {
    getAll : () => {
        return [...employees]
    },
    getOne : (id) => {
        return employees.find(x => x.id == id)
    }
}


module.exports = employeesModels
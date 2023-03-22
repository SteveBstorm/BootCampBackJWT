const users = require("../datas/users.json")

const usersModels = {

    getAll : () => {
        return [...users]
    },

    getOne : (id) => {
        return users.find(user => user.id == id)
    },

    create : (newUser) => {

        newUser.id = users.length+1
        users.push(newUser)
        let userCreated = users.find(user => user.id == users.length)
        return userCreated
    },


    getOneByLogin : (login) => {
        return users.find(user => user.login == login)
    }
}


module.exports = {
    usersModels
}
const { usersModels } = require("../models/users.models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authService = {
  
    getOne : async (id) => {
        let oneUser = await usersModels.getOne(id)

        if(oneUser != undefined)
            return oneUser
        else
            return { errorMessage : `Le user numéro : ${id} n'existe pas` }
    },


    create : async (newUser) => {
        const saltRounds = 10;
        newUser.pwd = await bcrypt.hash(newUser.pwd, saltRounds)
        let userIdCreated = await usersModels.create(newUser)
        
        return userIdCreated
    },

    getOneByLogin : async (login) => {

        let oneUser =  await usersModels.getOneByLogin(login)

        if(oneUser != undefined)
            return oneUser
        else
            return { errorMessage : `Le user portant le login : ${login} n'existe pas` }
    }
}


module.exports = {authService}
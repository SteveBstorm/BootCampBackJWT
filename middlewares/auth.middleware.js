const { authService } = require("../services/auth.service")
const { verifyToken } = require("../utils/jwt.utils")


const authJwt = (role = "user") => {

    //gestion des roles non présente dans cette demo
    return async (req, res, next) => {
        
        let finalJwt = req.headers["authorization"]

        if(finalJwt != undefined)
        {
            finalJwt = finalJwt.split(" ")[1]

            try{
                let decodeJwt = await verifyToken(finalJwt)
                let userOk = await authService.getOneByLogin(decodeJwt.login)
                next()
            }
            catch(error) {
                return res.sendStatus(403)
            }
        }
        else
            return res.sendStatus(403)
    }

    
}

module.exports = {
    authJwt
}
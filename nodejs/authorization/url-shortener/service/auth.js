const jwt = require('jsonwebtoken')
const SECRETKEY = 'Utkarsh$2345@'

function setUser(user){

    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, SECRETKEY)
}

function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token, SECRETKEY)
    } catch (error) {
        console.log("getUser Failed: " + error)
    }

}

module.exports = {
    setUser,
    getUser
}
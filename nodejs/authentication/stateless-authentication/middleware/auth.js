const {getUser} = require('../service/auth')

exports.restrictToLoggedInUserOnly = async(req, res, next) => {

    const userToken = req.cookies.myToken;
    console.log(req)

    if(!userToken){
        return res.redirect('/login')
    }

    const user = getUser(userToken);
    
    if(!user){
        return res.redirect('/login')
    }

    req.user = user;
    next();
}

exports.checkAuth = async(req, res, next) => {

    const userToken = req.cookies.myToken;
    console.log(req)
    const user = getUser(userToken);
    req.user = user;
    next();
}
const {getUser} = require('../service/auth')

// Authentication
exports.checkForAuthentication = (req, res, next) => {
    const tokenCookie = req.cookies?.myToken;
    console.log("Tokencookie: ", tokenCookie)
    req.user = null; 

    if(!tokenCookie){
        return next()
    }

    const user = getUser(tokenCookie);
    console.log("USER: ", user)

    req.user = user;
    console.log("USER: ", req.user)
    next()

}

// Authorization
exports.restrictTo = (roles = []) => {  

    return function(req, res, next) {
        console.log(req.user)
        if(!req.user) return res.redirect('/login')
        if(!roles.includes(req.user.role)){
            return res.end('Unauthorized');   
        }

        return next()
    };

}
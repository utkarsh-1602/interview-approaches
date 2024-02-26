const {getUser} = require('../service/auth')

exports.restrictToLoggedInUserOnly = async(req, res, next) => {

    const userUid = req.cookies.myCookie;
    console.log(req)

    if(!userUid){
        return res.redirect('/login')
    }

    const user = getUser(userUid);
    
    if(!user){
        return res.redirect('/login')
    }

    req.user = user;
    next();
}
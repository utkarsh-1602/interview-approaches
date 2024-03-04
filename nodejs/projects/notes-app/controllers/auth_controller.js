import Usermodel from '../models/User';

exports.signup = async(req, res) => {
    try {
        let errors = [];
        const {name, email, password, confirm_password} = req.body;
        
        if(password != confirm_password){
            errors.push({
                text: "Passwords do not match."
            });
        }

        if(password.length < 6){
            errors.push({
                text: "Passwords must be at least 6 characters."
            });
        }

        if(errors.length > 0){
            return res.render('auth/signup', {
                errors,
                email,
                password,
                confirm_password
            });
        }

        // unique email verification
        const userFound = Usermodel.findOne({
            email: email
        })

    } catch (error) {
        console.log(error);
    }

}
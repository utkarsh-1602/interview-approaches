const User = require("../models/user");

exports.userRegistration = async (req, res) => {

    let { username, password } = req.body;

    try {
        if (!username) {
            return res.status(400).json({
                msg: "username is required",
                status: false
            });
        }

        if (!password) {
            return res.status(400).json({
                msg: "password is required",
                status: false
            });
        }


        const newUser = await User.create({
            username: username,
            password: password,
            _id: undefined,

        })

        console.log(newUser)

        return res.status(200).json({ msg: 'User registered successfully' });
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ error: `Server error ${error}` });
    }
}


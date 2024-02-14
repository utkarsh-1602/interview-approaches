exports.studentInfo = async(req, res) => {

    try {
        const {email, password, address, address2, city, zip} = req.body;
        
        if(!email || !password){
            res.status(403).json({
                message: "Email and password are required",
                status: false
            })
        }

        const formData = {
            email: email,
            password: password,
            address: address,
            address2: address2,
            city: city,
            zip: zip
        }

        console.log(formData)

        return res.status(200).json({
            message: "Student Successfully created",
            formData: formData
        })

    } catch (error) {
        console.error("Error: " + error)
    }

}
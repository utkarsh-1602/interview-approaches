const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const PORT = 8000

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueFIleName = Date.now() + '-' + Math.round(Math.random() * 1E9)
        return cb(null, uniqueFIleName + '-' + file.originalname)
      }
    
})

const upload = multer({ storage: storage })


app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    return res.render("homepage")
})

app.post('/upload',upload.single('profileImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file)

    return res.redirect('/')
})

app.listen(PORT, () => {
    console.log("listening on port " + PORT)
})
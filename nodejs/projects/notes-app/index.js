import dotenv from 'dotenv';
dotenv.config();
import app from './app.js'

const PORT = process.env.PORT || 5000; 

(async () => {
    
    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    })

})()

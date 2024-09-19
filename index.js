require('dotenv').config();
// get the express package
const express = require('express');
// executing express function in app constant
const app = express();
// e use the value of the environment variable created in the '.env'
const PORT = process.env.PORT || 3000; 


// road leading to a message displayed on the screen
app.get('/' , (request, response) =>{
    response.send('Hello tout le monde !')
})

// we listen to our server
app.listen(PORT, () =>{
    console.log(`App running at http://localhost:${PORT}`);
})



















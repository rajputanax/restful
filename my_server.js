const express = require('express');  //require express after installation
const app = express();      // assign express in a variable

require('dotenv').config() // require dotenv after installation
const PORT = process.env.PORT || 5000;

const pro = require('./routes/product')  // creating a route

const connectDb = require('./db/connect')      // connect mongodb


// simple method for getting a res on localhost
app.get('/', (_req, res) => {
    res.send('yes I am Live')
});    

app.use('/api/org', pro);   //middleware

const start = async () => {
    
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(PORT, () => console.log(`${PORT} is connected`))
    } catch (error) {
        console.error(error)
    }
}

start();
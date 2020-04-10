const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
// APP
const app = express()
app.use(express.json())
// Database
mongoose.connect('mongodb://localhost:27017/apinode', {
    useNewUrlParser: true
})

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load models
const Clients = require('./models/clients')

// Load routes
const Routes = require('./routes/routes')
app.use('/api', Routes)

module.exports = app
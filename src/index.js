const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");


const {Airplane}=require('./models/index');

const {db}=require('./models/index');//for syncing

const ApiRoutes = require('./routes/index');


const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes)

    app.listen(process.env.PORT, async() => {
        console.log(`Server started at ${process.env.PORT}`);
       //direct insertion
        await Airplane.create({
            modelNumber:'Apnaplane',
            capacity:7
        })
     });
}
setupAndStartServer();
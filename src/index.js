const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");

// const db=require('./models/index');
const {City}=require('./models/index');
// const { PORT } = require('./config/serverconfig');
const CityRepository = require('./repository/city_repo');

const setupAndStartServer = async () => {
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(process.env.PORT, async() => {
        console.log(`Server started at ${process.env.PORT}`);
        console.log(City);
        // await City.create({
        //     name:"Patna",
        // })
    });
}
setupAndStartServer();
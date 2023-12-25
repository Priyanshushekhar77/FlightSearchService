const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");


//   const {Airport,City}=require('./models/index');
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
    //  1. query -> to get details of airports including city
    // 2.query -> to get details of all the airports from the cityid is known
    // if(process.env.SYNC_DB){
    //     db.sequelize.sync({alter:true});
    // }
     });
}
setupAndStartServer();
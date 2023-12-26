const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async(req,res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:'successfully created a flight'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'not able to created a flight'
        });
    }
}

module.exports = {
    create,
}
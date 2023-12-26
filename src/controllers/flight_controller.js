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

const getFlight = async(req,res) => {
    try{
        const response = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:'successfully fetched a flight'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'not able to fetched a flight'
        });
    }
}

const getAllFlight = async(req,res) => {
    try{
        console.log(req.query);
    const response = await flightService.getAllFlight(req.query);
    return res.status(201).json({
        data:response,
        success:true,
        err:{},
        message:'successfully fetched a flight'
    });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'not able to fetched a flight'
        });
    }
}
const updateFlight = async(req,res) => {
    try{
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:'successfully updated a flight'
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            err:error,
            message:'not able to updated a flight'
        });
    }
}

module.exports = {
    create,
    getFlight,
    getAllFlight,
    updateFlight
}
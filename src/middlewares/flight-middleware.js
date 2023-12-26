const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.DepartureTime ||
        !req.body.price
    ){
        return res.status(400),json({
            data:{},
            success:false,
            message:'Invalid request body dor create a flight',
            err:'All items mandatory to field'
        });
    }

    next();
}

module.exports={
    validateCreateFlight,
}
const {Flight} = require('../models/index');
const {Op} = require('sequelize')
class FlightRepository{

     #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        let pricefilter=[];
        if(data.minprice){
            pricefilter.push({price:{[Op.gte]:data.minprice}})
        }
        if(data.maxprice){
            pricefilter.push({price:{[Op.lte]:data.maxprice}})
        }
        Object.assign(filter,{[Op.and]:pricefilter})
        return filter;
     }

    async createFlight(data) {
        try{
            const flight=await Flight.create(data);
            return flight;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw{error};
        }
    }

    async getFlight(flightId) {
        try{
            const flight=await Flight.findByPk(flightId);
            return flight;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw{error};
        }
    }

    async getAllFlight(filter) {
        try{
            const filterobject = this.#createFilter(filter);
            const flight=await Flight.findAll({
                where:filterobject
            });
            return flight;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw{error};
        }
    }
}

module.exports= FlightRepository;
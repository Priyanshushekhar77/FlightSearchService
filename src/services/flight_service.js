const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try{
            //access airplane
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats:(airplane.capacity-5)//5 seats for emergency purpose
            });//insertion by destructuring method
            return flight;
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error:'arrival time cannot be less than a departure time'}
            }
        }
        catch(error){
            console.log("something wrong in the service layer");
            throw{error};
        }
    }
}

module.exports = FlightService;


// flightNumber
// airplaneId
// departureAirportId
// arrivalAirportId
// arrivalTime
// DepartureTime
// price
// totalSeat->airplaneId

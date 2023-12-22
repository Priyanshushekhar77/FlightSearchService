// const city = require('../models/city')
// repository layer work is going to be interact with models and the database;
const {City} = require('../models/index')//returns all corresponding model

class cityRepository {
    async createCity({name}) {
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
             throw {error};
        }
    }

    async deleteCity({cityId}) {
        try{
           await City.destroy({
            where:{
                id:cityId
            }
           });
        }
        catch(error){

        }
    }

    async updateCity({newname}){
        try{
            const newcity=await City.update({newname});
            return newcity;
        }
        catch(error){
             throw{error};
        }
    }
}
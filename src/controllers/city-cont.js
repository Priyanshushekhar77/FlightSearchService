const { cityService} = require('../services/index');

const CityService = new cityService();

const create = async(req,res) => {
    try{
        const city = await CityService.createCity(req.body);
    return res.status(201).json({
        data:city,
        success:true,
        message:'Successfully created a city',

    });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to crate a city',
            err:error
        });
    }
}

    //DELETE->cityId

    const destroy= async(req,res) => {
        try{
            const response = await CityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully deleted a city',
    
        });
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                data:{},
                success:false,
                message:'Not able to delete a city',
                err:error
            });
        }
    }

    // Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await CityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}


    
// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await CityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

    //getallcities->filter data

    const getAllCity = async (req, res) => {
        try {
            const cities = await CityService.getAllCity(req.query);
            return res.status(200).json({
                data: cities,
                success: true,
                message: 'Successfully fetched all cities',
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to fetch the cities',
                err: error
            });
        }
    }

    module.exports = {
        create,
        destroy,
        update,
        get,
        getAllCity,
    }



const {getTemperApiDb} = require('../adapter/Temper');

class Tempers{
    async getTemper(req,res,next){
        try {
            const tempers = await getTemperApiDb();
            if(tempers){
                res.status(200).json(tempers);
            }else{
                throw {status:404,message:"Error en traer los datos"};
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Tempers;
const {getDogApi,getDogApiName,getDogDB,getDogDBName,getDogApiId} = require('../adapter/Dog');

class Dog{
    async getDog(req,res,next){
        const {name} = req.query;
        let data;
        try {
            if(name){
                const dataDB =await getDogDBName(name);
                const dataApi =await getDogApiName(name);
                if(dataDB)
                data = dataDB;
                if (dataApi) {
                    data = [...data,...dataApi];
                };
                res.status(200).json(data);
            }else{
                const dataDB =await getDogDB();
                const dataApi =await getDogApi();
                if(dataDB)
                data = dataDB;
                if (dataApi) {
                    data = [...data,...dataApi];
                };
                res.status(200).json(data);
            }
        } catch (error) {
            next(error);
        }
    };
    async getDogId(req,res,next){
        const {id} = req.params;
        try {
            const dataApi = await getDogApiId(id);
            res.status(200).json(dataApi);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = Dog;
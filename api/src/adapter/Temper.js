require('dotenv').config();
const axios = require("axios");
const {Temper} = require('../db');
const {API_KEY} = process.env;

async function getTemperApiDb(){
    let temper = new Set();
    let temperDef = [];
    try {
        const {data} = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const tempersApi = Object.values(data);
        const onlyTempers=tempersApi.map(({temperament})=>temperament?.split(",")).flat().map(element=>element?.trim());
        onlyTempers.forEach(element => temper.add(element));
        temper.delete(undefined);
        for(let temperSet of temper.values()){
            let aux = {name:temperSet};
            temperDef = [...temperDef,aux];
        };
        const temperDb = await Temper.bulkCreate(temperDef);
        return temperDb;
    } catch (error) {
        throw {status:404,message:error};
    }

};

module.exports = {getTemperApiDb};
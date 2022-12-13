require("dotenv").config();
const axios = require("axios");
const { Temper, Dog } = require("../db");
const { API_KEY } = process.env;
const { Op } = require("sequelize");

async function getDogApi() {
  try {
    const { data: dataApi } = await axios(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const dogsApi = Object.values(dataApi).map(
      ({
        id,
        name,
        image: { url: backgroudImage },
        temperament,
        weight: { metric: weight },
      }) => ({ id, name, backgroudImage, temperament, weight })
    );
    return dogsApi;
  } catch (error) {
    throw { status: 404, message: error };
  }
}
async function getDogDB() {
  try {
    const dogsDB = await Dog.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "height", "life_span"],
      },
      include: {
        model: Temper,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    return dogsDB;
  } catch (error) {
    throw { status: 500, message: error };
  }
}
async function getDogApiName(nameDog) {
  try {
    const { data: dataApi } = await axios(
      `https://api.thedogapi.com/v1/breeds/search?q=${nameDog}&&api_key=${API_KEY}`
    );
    const dogsApi = dataApi.map(
      ({
        id,
        name,
        reference_image_id,
        temperament,
        weight: { metric: weight },
      }) => ({
        id,
        name,
        backgroudImage: `"https://cdn2.thedogapi.com/images/${reference_image_id}.jpg"`,
        temperament,
        weight,
      })
    );
    return dogsApi;
  } catch (error) {
    throw { status: 404, message: error };
  }
}
async function getDogDBName(nameDog) {
  try {
    const dogsDB = await Dog.findAll({
      where: { name: { [Op.like]: `%${nameDog}%` } },
      attributes: {
        exclude: ["createdAt", "updatedAt", "height", "life_span"],
      },
      include: {
        model: Temper,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
    return dogsDB;
  } catch (error) {
    throw { status: 500, message: error };
  }
}
async function getDogApiId(idDog) {
  try {
    const { data: dataApi } = await axios(
      `https://api.thedogapi.com/v1/breeds/${idDog}?apiKey=${API_KEY}`
    );
    const {
      id,
      name,
      reference_image_id,
      temperament,
      weight: { metric: weight },
      height: { metric: height },
      life_span,
    } = dataApi;
    return {
      id,
      name,
      backgroudImage: `"https://cdn2.thedogapi.com/images/${reference_image_id}.jpg"`,
      temperament,
      weight,
      height,
      life_span,
    };
  } catch (error) {
    throw { status: error.status ?? 404, message: error };
  }
}

module.exports = {
  getDogApi,
  getDogDB,
  getDogApiName,
  getDogDBName,
  getDogApiId,
};

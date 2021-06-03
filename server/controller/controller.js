const { default: axios } = require("axios");

exports.getApi = (req, res) => {
    try {
        res.status(200).json("Acesso ok")
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getDrinkByName = async(req, res) => {
    try {
        const apiResponse = await requestDrinkByName(req);
        res.status(200).send(apiResponse.data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getDrinkByLetter = async (req, res) => {
    try {
        const apiResponse = await requestDrinkByLetter(req);
        res.status(200).send(apiResponse.data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const requestDrinkByName = async(req) => {
    const name = req.query.name;
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    return response;
};

const requestDrinkByLetter = async(req) => {
    const letter = req.query.letter;
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    return response;
};
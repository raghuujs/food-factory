const foodsmodel = require('../model/foods');

const getFoods = async () => {
    const foods = await foodsmodel.find()
    return {message: 'data retrived', data: foods, statusCode: 200};
}

const insertFood = async ({
    body = {}
}) => {
    const {foodName, price, qty} = body;
    const foods = await foodsmodel.create({foodName, price, qty})
    return {message: 'insert successfully', data: foods, statusCode: 200};
}

const updateFood = async ({
    body = {}
}) => {
    const {foodName, price, qty, _id} = body;
    const foods = await foodsmodel.updateOne({
        _id: _id
    }, {foodName, price, qty})
    return {message: 'update successfully', data: foods, statusCode: 200};
}

module.exports = {
    updateFood,
    insertFood,
    getFoods
}

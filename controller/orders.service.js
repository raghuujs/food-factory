const ordersmodel = require('../model/orders');
const foodModel = require('../model/foods');
const userModel = require('../model/user');

const getOrders = async () => {
    const orders = await ordersmodel.find({});
    const foods = await foodModel.find({});
    const users = await userModel.find({});

    const responses = orders.map((order) => {
        const food = foods.find((food) => food._id == order.foodId);
        const customer = users.find((user) => user._id == order.userId);
        const hotel = users.find((user) => user._id == order.hotelId);

        return {hotelName: hotel.name, foodName: food.foodName, customerName: customer.name}
    })

    return {message: 'data retrived', data: responses, statusCode: 200}
}
const insertOrders = async ({
    body = {}
}) => {
    const {userId, foodId, hotelId} = body;
    const orders = await ordersmodel.create({userId: userId, foodId: foodId, hotelId: hotelId})
    return {message: 'Insert Successfully', data: orders, statusCode: 200};
}
const updateOrders = async ({
    body = {}
}) => {
    const {userId, foodsId, hotelId, _id} = body;
    const orders = await ordersmodel.updateOne({
        _id: _id
    }, {
        userId: userId,
        foodsId: foodsId,
        hotelId: hotelId
    })

    return {message: 'update successfully', data: orders, statusCode: 200};
}
module.exports = {
    getOrders,
    insertOrders,
    updateOrders
}

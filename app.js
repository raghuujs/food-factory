require('./config')
const express = require('express')
const app = express()
app.use(express.json());

const {getUsers, insertUser, updateUser,verifyUsers} = require('./controller/user.service');
const {updateFood, insertFood, getFoods} = require('./controller/food.service');
const {getOrders, insertOrders, updateOrders} = require('./controller/orders.service');

app.get('/user', function (req, res, next) {
    getUsers(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});

app.get('/verify', function (req, res, next) {
    verifyUsers(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});

app.post('/user', function (req, res, next) {
    insertUser(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});

app.put('/user', function (req, res, next) {
    updateUser(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});


app.get('/food', function (req, res, next) {
    getFoods(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});


app.post('/food', function (req, res, next) {
    insertFood(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});

app.put('/food', function (req, res, next) {
    updateFood(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});


app.get('/orders', function (req, res, next) {
    getOrders(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });

});

app.post('/orders', function (req, res, next) {
    insertOrders(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)
    });
});

app.put('/orders', function (req, res, next) {
    updateOrders(req).then(({data, statusCode, message}) => {
        res.status(statusCode).send({message, data})
    }).catch((err) => {
        next(err)

    });


})


app.listen(3000)

const usermodel = require('../model/user');

const getUsers = async () => {
    const user = await usermodel.find()
    return {message: 'data retrived', data: user, statusCode: 200}
}

const insertUser = async ({
    body = {}
}) => {
    const {name, mobile, email, passWord} = body;
    const user = await usermodel.create({name, mobile, email, passWord})
    return {message: 'Insert Successfully', data: user, statusCode: 200};
}

const updateUser = async ({
    body = {}
}) => {
    const {
        name,
        mobile,
        email,
        passWord,
        _id
    } = body;
    const user = await usermodel.updateOne({
        _id: _id
    }, {name, mobile, email, passWord});

    return {message: 'update successfully', data: user, statusCode: 200};
}

const verifyUsers = async ({query}) => {
    const {name, passWord} = query;
    const user = await usermodel.findOne({name, passWord});
    if (! user) {
        throw new Error("Invalid user name,password")
    }
    return {message: 'user verify', data: user, statusCode: 200}
}

module.exports = {
    getUsers,
    insertUser,
    updateUser,
    verifyUsers
}

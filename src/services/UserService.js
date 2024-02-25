import { Op } from 'sequelize';
import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

// LOGIN
const postLoginUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password } = data;
            const user = await db.User.findOne({
                where: { email: email }
            })
            if (!user) {
                resolve({
                    status: 'ERR',
                    message: 'Wrong email or password!'
                })
            } else {
                const isCorrect = bcrypt.compareSync(password, user.password);
                if (!isCorrect) {
                    resolve({
                        status: 'ERR',
                        message: 'Wrong email or password!'
                    })
                } else {
                    resolve({
                        status: 'OK',
                        message: 'Login to system!'
                    })
                }
            }
        } catch (error) {
            reject(error);
        }
    })
}
// REGISTER
const postRegister = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, username, password } = data;
            const user = await db.User.findOne({
                where: {
                    [ Op.or ]: [
                        { email: email },
                        { username: username }
                    ]
                }
            })
            if (user) {
                resolve({
                    status: 'ERR',
                    message: 'The user are duplicated!'
                })
            } else {
                const hashedPassword = handleHash(password);
                await db.User.create({
                    email: email,
                    username: username,
                    password: hashedPassword
                })
                resolve({
                    status: 'OK',
                    message: 'User has been created!'
                })
            }
        } catch (error) {
            reject(error);
        }
    })
}
const handleHash = (password) => {
    return new Promise((resolve, reject) => {
        try {
            const hashed = bcrypt.hashSync(password, salt);
            resolve(hashed);
        } catch (error) {
            reject(error);
        }
    })
}


module.exports = {
    postLoginUser: postLoginUser,
    postRegister: postRegister
}
import UserService from '../services/UserService';

// LOGIN
const postLoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Missing required inputs'
            })
        }
        const response = await UserService.postLoginUser(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
// REGISTER
const postRegister = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!email || !username || !password) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Missing required inputs'
            })
        }
        const response = await UserService.postRegister(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

module.exports = {
    postLoginUser: postLoginUser,
    postRegister: postRegister
}
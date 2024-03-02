import UserService from '../services/UserService';

// LOGIN
const postLoginUser = async (req, res) => {
    try {
        const { valueLogin, password } = req.body;
        if (!valueLogin || !password) {
            return res.status(200).json({
                EM: 'Missing required inputs',
                EC: 1,
                DT: ''
            })
        }
        const response = await UserService.postLoginUser(req.body);
        const { token, ...others } = response.DT;
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        })
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: ''
        })
    }
}
// REGISTER
const postRegister = async (req, res) => {
    try {
        const { email, username, password, phone } = req.body;
        if (!email || !phone || !password) {
            return res.status(200).json({
                EM: 'Missing required parameters',
                EC: 1,
                DT: ''
            });
        }
        if (password && password.length < 4) {
            return res.status(200).json({
                EM: 'Password must have more than 3 letters!',
                EC: 1,
                DT: ''
            })
        }
        const response = await UserService.postRegister(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: ''
        })
    }
}
// LOGOUT
const handleLogout = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({
            EM: 'Error from server',
            EC: -1,
            DT: ''
        })
    }
}
// READ - CREATE - UPDATE - DELETE
const readAllUsers = async (req, res) => {
    try {
        console.log('req.user', req.user);
        const { page, limit } = req.query;
        if (page && limit) {
            const response = await UserService.getUserPanigate(+page, +limit);
            return res.status(200).json(response);
        } else {
            const response = await UserService.readAllUsers();
            return res.status(200).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server...',
            EC: -1,
            DT: ''
        })
    }
}
const createUser = async (req, res) => {
    try {
        const response = await UserService.createUser(req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server...',
            EC: -1,
            DT: ''
        })
    }
}
const updateUser = async (req, res) => {
    try {
        const response = await UserService.updateUser(req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server...',
            EC: -1,
            DT: ''
        })
    }
}
const deleteUser = async (req, res) => {
    try {
        const userId = req.query.id;
        const response = await UserService.deleteUser(userId);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server...',
            EC: -1,
            DT: ''
        })
    }
}
module.exports = {
    postLoginUser: postLoginUser,
    postRegister: postRegister,
    handleLogout: handleLogout,
    readAllUsers: readAllUsers,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}
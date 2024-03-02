import jwt from 'jsonwebtoken';
require('dotenv').config();
const createAccessToken = (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN, { expiresIn: process.env.EXPIRES_ACCESS });
    return access_token;
}

const createRefreshToken = (payload) => {
    const refresh_token = jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN, { expiresIn: process.env.EXPIRES_REFRESH });
    return refresh_token;
}

const verifyToken = (token) => {
    let keyToken = process.env.ACCESS_TOKEN;
    let decoded = null;
    try {
        decoded = jwt.verify(token, keyToken);
    } catch (error) {
        console.log(error);
    }
    return decoded;
}

const checkUserJWT = (req, res, next) => {
    let cookies = req.cookies;
    if (cookies && cookies.token) {
        let token = cookies.token;
        let decoded = verifyToken(token);
        if (decoded) {
            let user = decoded;
            req.user = user;
            next();
        } else {
            return res.status(401).json({
                EM: 'Not authenticated the user!',
                EC: -1,
                DT: ''
            })
        }
    } else {
        return res.status(401).json({
            EM: 'Not authenticated the user!',
            EC: -1,
            DT: ''
        })
    }
}

const checkUserPermission = (req, res, next) => {
    if (req.user) {
        let email = req.user.email;
        let roles = req.user.groupWithRoles.Roles;
        let currentUrl = req.path;
        if (!roles || roles.length === 0) {
            // Người dùng chưa được phân quyền nên 403
            return res.status(403).json({
                EM: `You don't have permission to access this resource`,
                EC: -1,
                DT: ''
            })
        }
        let canAccess = roles.some(item => item.url.includes(currentUrl));
        if (canAccess === true) {
            next();
        } else {
            return res.status(403).json({
                EM: `You don't have permission to access this resource`,
                EC: -1,
                DT: ''
            })
        }


    } else {
        return res.status(401).json({
            EM: 'Not authenticated the user!',
            EC: -1,
            DT: ''
        })
    }
}
module.exports = {
    createAccessToken,
    createRefreshToken,
    verifyToken,
    checkUserJWT,
    checkUserPermission
}
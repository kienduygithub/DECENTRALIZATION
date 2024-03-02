import express from 'express';
import {
    postLoginUser, postRegister, handleLogout,
    readAllUsers, createUser, updateUser, deleteUser
} from '../controllers/UserController';
import {
    checkUserJWT, checkUserPermission
} from '../middleware/jwtActions';
const Router = express.Router();

// const checkUserLogin = (req, res, next) => {
//     const nonSecurePaths = [ '/login', '/register', '/logout' ];
//     console.log('req.path', req.path);
//     if (nonSecurePaths.includes(req.path)) return next();

//     if (user) {
//         next();
//     } else {
//         next();
//     }
// }

Router.post('/login', postLoginUser);
Router.post('/register', postRegister);
Router.get('/logout', handleLogout);

Router.get('/read', checkUserJWT, checkUserPermission, readAllUsers);
Router.post('/create', createUser);
Router.put('/update', updateUser);
Router.delete('/delete', deleteUser)
module.exports = Router;
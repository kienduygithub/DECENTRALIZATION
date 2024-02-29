import express from 'express';
import {
    postLoginUser, postRegister, handleLogout,
    readAllUsers, createUser, updateUser, deleteUser
} from '../controllers/UserController';
const Router = express.Router();

Router.post('/login', postLoginUser);
Router.post('/register', postRegister);
Router.get('/logout', handleLogout);

Router.get('/read', readAllUsers);
Router.post('/create', createUser);
Router.put('/update', updateUser);
Router.delete('/delete', deleteUser)
module.exports = Router;
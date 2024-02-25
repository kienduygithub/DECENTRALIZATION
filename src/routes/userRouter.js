import express from 'express';
import {
    postLoginUser, postRegister
} from '../controllers/UserController';
const Router = express.Router();

Router.post('/login', postLoginUser)
Router.post('/register', postRegister)
module.exports = Router;
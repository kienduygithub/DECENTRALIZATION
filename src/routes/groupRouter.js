import express from "express";
import GroupController from '../controllers/GroupController';
const Router = express.Router();

Router.get('/read', GroupController.readAllGroups)

module.exports = Router;
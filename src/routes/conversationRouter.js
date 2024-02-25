import express from 'express';
import ConversationController from '../controllers/ConversationController';
const Router = express.Router();

// new conversation
Router.post('/', ConversationController.postNewConversation)
// get conversation of a user
Router.get('/', ConversationController.getConversationSingleUser);

module.exports = Router;
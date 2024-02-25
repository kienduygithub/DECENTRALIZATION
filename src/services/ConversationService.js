import db from '../models/index';

// CREATE NEW CONVERSATION
const postNewConversation = (userIds) => {
    return new Promise(async (resolve, reject) => {
        try {
            const promises = userIds.length > 0 && userIds.map((userId) => {

            })
        } catch (error) {
            reject(error);
        }
    })
}
// GET CONVERSATION OF A USER
const getConversationSingleUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {

        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    postNewConversation: postNewConversation,
    getConversationSingleUser: getConversationSingleUser
}
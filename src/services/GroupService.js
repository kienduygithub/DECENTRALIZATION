import db from "../models";

const readAllGroups = async (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const groupList = await db.Group.findAll({
                attributes: [ 'id', 'name', 'description' ]
            });
            if (groupList.length > 0) {
                groupList.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })
            }
            resolve({
                EM: 'Get group list!',
                EC: 0,
                DT: groupList.length > 0 ? groupList : []
            })
        } catch (error) {
            reject({
                EM: 'Something wrongs with service...',
                EC: -2,
                DT: ''
            })
        }
    })
}

module.exports = {
    readAllGroups: readAllGroups,
}
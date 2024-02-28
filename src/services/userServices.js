import customAxios from '../customize/axios';

export const getAllUsers = async (page, limit) => {
    try {
        const response = await customAxios.get(`/user/read?page=${ page }&limit=${ limit }`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await customAxios.delete(`/user/delete?id=${ userId }`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
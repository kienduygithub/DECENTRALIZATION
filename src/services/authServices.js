import axios from "axios";

export const handleLogin = async (data) => {
    try {
        const response = await axios.post(`${ process.env.REACT_APP_SERVER_URL }/user/login`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const handleRegister = async (data) => {
    try {
        const response = await axios.post(`${ process.env.REACT_APP_SERVER_URL }/user/register`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const handleLogout = async () => {
    try {
        const response = await axios.get(`${ process.env.REACT_APP_SERVER_URL }/user/logout`, {
            withCredentials: true
        })
    } catch (error) {
        console.log(error);
    }
}
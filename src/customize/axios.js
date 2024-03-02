import axios from "axios";
import { toast } from "react-toastify";

const customAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true
})

customAxios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

customAxios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        const status = err && err.response && err.response.status || 500;
        // we can handle global errors here
        switch (status) {
            // authentication (token related issues)
            case 401: {
                toast.error('Unauthorized the user. Please login...');
                // window.location.href = '/login';
                return Promise.reject(err);
            }

            // forbidden (permission related issues)
            case 403: {
                toast.error(err.response.data.EM)
                return Promise.reject(err);
            }

            // bad request
            case 400: {
                return Promise.reject(err);
            }

            // not found
            case 404: {
                return Promise.reject(err);
            }

            // conflict
            case 409: {
                return Promise.reject(err);
            }

            // unprocessable
            case 422: {
                return Promise.reject(err);
            }

            // generic api error (server related) unexpected
            default: {
                return Promise.reject(err);
            }
        }
    }
)

export default customAxios;
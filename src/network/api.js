import axios from 'axios';
import { errorMessage } from '../utils';
import { baseURL } from './site'
// import user from '../helper/localStorage'
import { readCookie } from '../helper/cookieUser';
import Cookies from 'js-cookie';

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}
const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {

    }
    return request
}


const errorHandler = (error) => {
    if (!error.response) {
        // noti('error', 'Error', 'Connection Time Out !')
    }
    else if (isHandlerEnabled(error.config)) {
        // noti('error', 'Error', errorMessage[error.response.status])
    }
    return Promise.reject({ ...error })
}

const successHandler = (response, onSuccess, onError) => {
    if (isHandlerEnabled(response.config)) {
        // Handle responses
        if (response.data.message && response.data.message.includes("expired")) {
            // user.signOut(history.location.pathname);
        }
    }
    return response.data
}


export default function getapi() {
    // let userData = { token: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IlNVUEVSX0FETUlOIn1dLCJpYXQiOjE2MjYxNDU1MzN9.h_E8wUcNafAdcYZHVPoSQUCaWxgoYjUaOyFaawZVtQM" }
    let userData = { token: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IlNVUEVSX0FETUlOIn1dLCJpYXQiOjE2MzAwNDEzMTF9.4L7775er93KaoGJ7_Fqh9SgTvv4qVVUeKHJWNjHauNI" }
   
    // const data = JSON.parse(Cookies.get("usr"));

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers: {
            // 'X-AUTH-TOKEN': userData.token,
            "Access-Control-Allow-Origin": "*",
            
        }
    });

    axiosInstance.interceptors.request.use(
        request => requestHandler(request)
    );

    axiosInstance.interceptors.response.use(
        response => successHandler(response),
        error => errorHandler(error)
    );
    return axiosInstance;
}



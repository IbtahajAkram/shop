// https://fakestoreapi.com/

import axios from "axios";

const api = axios.create({
    baseURL:"https://fakestoreapi.com/"
});

api.interceptors.request.use(
    (config)=>{
        return config;
    },(err)=>{
        Promise.reject(err+ 'Error While request send!');
        return err
    }
);

api.interceptors.response.use(
    (response)=>{
        return response
    },(error)=>{
        return error
    }
)

export default api
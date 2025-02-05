import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"1a02a3b2d4d5415db2d245aafe8e32c5"
    }
});

interface ApiResponse<T> {
    count:number;
    results: T[];
}


class APIClient {
    endpoint:string;

    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = <T>(confObj?:AxiosRequestConfig) => {
        return axiosInstance.get<ApiResponse<T>>(this.endpoint,confObj).then(response => response.data);
    }

    get = <T>(id:number) => {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`)
    }
}


export default APIClient;

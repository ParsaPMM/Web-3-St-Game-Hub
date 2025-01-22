import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"cc610a1f0ed247409083aff5c24baa62"
    }
});

interface ApiResponse<T> {
    count:number;
    results: T[]
}


class APIClient {
    endpoint:string;

    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = <T>() => {
        return axiosInstance.get<ApiResponse<T>>(this.endpoint).then(response => response.data);
    }

    get = <T>(id:number) => {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`)
    }
}


export default APIClient;

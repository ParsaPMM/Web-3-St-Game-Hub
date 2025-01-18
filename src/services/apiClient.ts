import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://jsonplaceholder.typicode.com"
});

class APIClient {
    endpoint:string;

    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = <T>() => {
        return axiosInstance.get<[T]>(this.endpoint).then(response => response.data);
    }
}


const t = new APIClient("/posts");

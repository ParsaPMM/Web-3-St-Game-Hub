import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface Todo {
    id:number;
    title:string;
    compeleted:boolean;
}

const useTodos = () => (
    useQuery({
        queryKey:["todos"],
        queryFn:() => axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then(response => response.data),
        staleTime:1000*60*60*24*30 // 30days
        })
)

export default useTodos;
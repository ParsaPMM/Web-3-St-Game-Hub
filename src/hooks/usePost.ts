
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Post {
    id:number;
    title:string;
    body:string;
}




const usePost = (postId:number) => (
    useQuery({
        queryKey:["posts",postId],
        queryFn:() => axios.get<Post>("/posts/" + postId).then(response => response.data),
        staleTime:1000*60*60*5
    })
)


export default usePost;
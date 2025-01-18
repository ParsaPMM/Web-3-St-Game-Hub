
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"

interface Post {
    id:number;
    title:string;
    body:string;
}

// Post
// 1...100

// 0 - 9
// 20 - 21

// page = 2
// 1 * limit = 10
// 2 * 10 = 20


const usePosts = (pageSize = 30) => (
    useInfiniteQuery({
        queryKey:["posts"],
        queryFn:({ pageParam }) => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
            params:{
                _start: (pageParam - 1) * pageSize,
                _limit: pageSize,
            }
        }).then(response => response.data),
        initialPageParam: 1,
        getNextPageParam:(lastPage,allPages) => {
            console.log(allPages);
            // console.log(lastPage);
            
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        } ,
    })
)

// useInfiniteQuery({
//     queryKey:["posts",page],
//     queryFn:() => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts",{
//         params:{
//             _start: (page - 1) * pageSize,
//             _limit: pageSize,
//         }
//     }).then(response => response.data)
// })

export default usePosts;
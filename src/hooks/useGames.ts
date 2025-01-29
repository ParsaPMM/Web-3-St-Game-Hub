
import {useInfiniteQuery } from "@tanstack/react-query"
import APIClient from "@/services/apiClient";
import { Game } from "@/types/Game";

const apiClient  = new APIClient("/games")



const useGames = (genreId:number,pageSize:number) => (
    useInfiniteQuery({
        queryKey:["games",genreId],
        queryFn: ({pageParam}) => apiClient.getAll<Game>({
                    params:{
                        genres:genreId,
                        page:pageParam,
                        page_size:pageSize,
                    }
                }),
                initialPageParam:1,
                getNextPageParam:(lastPage,allPages) => {
                   return lastPage.results.length > 0 ? allPages.length + 1 : undefined 
                }
    }) 
);

// useQuery({
//     queryKey:["games",genreId,pagePara],
//     queryFn:() => apiClient.getAll<Game>({
//         params:{
//             genres:genreId,
//             page:pagePara,
//             page_size:pageSize,
//         }
//     }),
//     staleTime:1000 * 60 * 60 * 24 // 1day
// })
export default useGames;

import {useQuery } from "@tanstack/react-query"
import APIClient from "@/services/apiClient";
import { Game } from "@/types/Game";

const apiClient  = new APIClient("/games")



const useGames = (genreId:number) => (
    useQuery({
        queryKey:["games",genreId],
        queryFn:() => apiClient.getAll<Game>({
            params:{
                genres:genreId
            }
        }),
        staleTime:1000 * 60 * 60 * 24 // 1day
    })
)


export default useGames;
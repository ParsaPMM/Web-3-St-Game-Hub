
import {useQuery } from "@tanstack/react-query"
import APIClient from "@/services/apiClient";

const apiClient  = new APIClient("/games")

interface Game {
    id: number,
    slug: string,
    name: string,
    background_image:string;
    released:string;
}


const useGames = () => (
    useQuery({
        queryKey:["games"],
        queryFn:apiClient.getAll<Game>
    })
)


export default useGames;
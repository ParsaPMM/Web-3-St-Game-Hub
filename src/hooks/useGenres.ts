import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/genres");

interface Genre {
    id:number;
    name:string;
    image_background:string;
}


const useGenres = () => (
    useQuery({
        queryKey:["genres"],
        queryFn:apiClient.getAll<Genre>,
        staleTime:1000 * 60 * 60
    })
)

export default useGenres;
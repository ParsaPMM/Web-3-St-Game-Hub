import useGenres from "@/hooks/useGenres"
import { VStack,Text } from "@chakra-ui/react"
import { Spinner } from "@chakra-ui/react"
import { FaExclamation } from "react-icons/fa";
import GenreItem from "./GenreItem";
import GenreListSkeleton from "./SkeletonComponents/GenreListSkeleton";

interface Props {
  selectedGenreId:number | null;
  handleOnGenreClick:(genreId:number) => void;
}

const GenreList = ({selectedGenreId,handleOnGenreClick}:Props) => {

  const {data,isPending,isError} = useGenres()
  

  if(isPending){
    return <GenreListSkeleton />
  }

  if(isError) {
    return <Text display={"flex"} paddingBottom={10} justifyContent={"center"}
    alignItems={"center"} >
        Something went wrong
        <FaExclamation  />
    </Text>
  }

  return (
    <VStack alignItems={"start"} >
        {data?.results.map(genre => (
            <GenreItem selected={selectedGenreId === genre.id} handleOnSelect={(selectedGenreId) => handleOnGenreClick(selectedGenreId)} key={genre.id} genre={genre} />
        ))}
    </VStack>
  )
}

export default GenreList
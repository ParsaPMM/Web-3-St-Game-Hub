import useGenres from "@/hooks/useGenres"
import { HStack, Image, VStack,Text } from "@chakra-ui/react"
import { Spinner } from "@chakra-ui/react"
import { FaExclamation } from "react-icons/fa";
import GenreItem from "./GenreItem";

const GenreList = () => {

  const {data,isPending,isError} = useGenres()

  if(isPending){
    return <Spinner />
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
            <GenreItem key={genre.id} genre={genre} />
        ))}
    </VStack>
  )
}

export default GenreList
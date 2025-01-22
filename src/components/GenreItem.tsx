import { HStack,Text,Image } from "@chakra-ui/react"

interface Genre {
    id:number;
    name:string;
    image_background:string;
}


interface Props {
    genre:Genre;
}

const GenreItem = ({genre}:Props) => {
  return (
    <HStack key={genre.id}>
        <Image width={"40px"} height={"40px"} rounded={"2xl"} src={genre.image_background} />
        <Text>
         {genre.name}
        </Text>
    </HStack>
  )
}

export default GenreItem
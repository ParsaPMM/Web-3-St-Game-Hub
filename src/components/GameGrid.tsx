import useGames from "@/hooks/useGames"
import { GridItem, SimpleGrid } from "@chakra-ui/react"
import { Button, Card, Image, Text } from "@chakra-ui/react"


const GameGrid = () => {

    const {data} = useGames();

  return (
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4}}>
        {data?.results.map(game => (
            <GridItem colSpan={{base:1}}>
                    <Card.Root maxW="sm" overflow="hidden">
                <Image
                src={game.background_image}
                alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2">
                <Card.Title>{game.name}</Card.Title>
                <Card.Description>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces.
                </Card.Description>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    $450
                </Text>
                </Card.Body>
                <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
                </Card.Footer>
            </Card.Root>
            </GridItem>
        ))}
    </SimpleGrid>
  )
}

export default GameGrid
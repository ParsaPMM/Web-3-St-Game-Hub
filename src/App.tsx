import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react"
import GameList from "./components/GamesTest"
import GenreList from "./components/GenreList"
import Header from "./components/Header"
import GameGrid from "./components/GameGrid"

function App() {
  
  return (
    <SimpleGrid columns={{base:1,md:4}}>
      <GridItem colSpan={{base:4}}>
        <Header />
      </GridItem>
      <GridItem bgColor={"gray.800"} mt={10} paddingLeft={3} colSpan={{base:1}}>
        <Heading my={5} textAlign={"center"} as={"h2"}>
          Genre List
        </Heading>
        <GenreList />
      </GridItem>
      <GridItem mt={10} colSpan={{base:3}}>
            <GameGrid />
      </GridItem>
    </SimpleGrid>
  )
}

export default App

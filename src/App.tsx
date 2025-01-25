import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import { useState } from "react";

// #030712 - background
// #1F2937 - card body
// #A855F7 - pink
//
// #111827 - header color

function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(null);

  return (
    <Grid
      templateColumns={{
        base: `"1fr"`,
        md: `"300px 1fr 1fr 1fr"`,
      }}
      className="background-color"
    >
      <GridItem colSpan={{ base: 4 }}>
        <Header />
      </GridItem>
      <GridItem className="header-color" colSpan={{ base: 1 }}>
        <Box position={"sticky"} py={5} top={"0"}>
          <Heading mb={5} textAlign={"center"} as={"h2"}>
            Genre List
          </Heading>
          <GenreList
            selectedGenreId={selectedGenreId}
            handleOnGenreClick={(genreId) => setSelectedGenreId(genreId)}
          />
        </Box>
      </GridItem>
      <GridItem px={10} mt={10} colSpan={{ base: 3 }}>
        <GameGrid selectedGenreId={selectedGenreId} />
      </GridItem>
    </Grid>
  );
}

export default App;

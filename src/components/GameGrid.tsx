import useGames from "@/hooks/useGames";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";


interface Props {
  selectedGenreId:number;
}

const GameGrid = ({selectedGenreId}:Props) => {
  const { data } = useGames(selectedGenreId);
  console.log(data);
  
  
  return (
    <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3 }}>
      {data?.results.map((game) => (
        <GridItem colSpan={{ base: 1 }}>
            <GameCard game={game} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

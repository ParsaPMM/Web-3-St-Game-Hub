import useGames from "@/hooks/useGames";
import { GridItem, SimpleGrid, Spinner, VStack, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCardSkeleton from "./SkeletonComponents/GameCardSkeleton";

interface Props {
  selectedGenreId: number;
}

const GameGrid = ({ selectedGenreId }: Props) => {
  const { data, fetchNextPage,hasNextPage, isPending } = useGames(selectedGenreId, 10);
  
  const fetchedGamesCount = data?.pages.reduce((acc,page) => acc + page.results.length,0) || 0;

  if (isPending) {
    const list = [1,2,3,4,5,6]
    return <SimpleGrid width={"100%"} gap={5} columns={{ base: 1, md: 2, lg: 3 }}>
    {list.map(value => (
      <GridItem key={value} colSpan={{ base: 1}}>
        <GameCardSkeleton  />
      </GridItem>
    ))}
  </SimpleGrid>
  }

  return (
    <InfiniteScroll
    next={fetchNextPage}
    dataLength={fetchedGamesCount}
    hasMore={hasNextPage}
    loader={<VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color={"colorPalette.600"}>Loading...</Text>
    </VStack>}
    >
      <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 3 }}>
        {data?.pages.map((page) =>
          page.results.map((game) => (
            <GridItem colSpan={{ base: 1 }}>
              <GameCard game={game} />
            </GridItem>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;

import { Game } from "@/types/Game";
import { Badge, Card, Flex, Image, Text } from "@chakra-ui/react";
import { IoPeople, IoCalendarNumber } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import GameCardPlatforms from "./GameCardPlatforms";
import { IconType } from "react-icons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const isSinglePlayer = game.tags.find((tag) => tag.id === 31);
  const isMultiPlayer = game.tags.find((tag) => tag.id === 7);

  let gamePlayForm = "";

  if ((isSinglePlayer || isMultiPlayer) && !(isSinglePlayer && isMultiPlayer)) {
    if (isSinglePlayer) {
      gamePlayForm = "Single-player";
    } else {
      gamePlayForm = "Multi-player";
    }
  } else if (isMultiPlayer && isSinglePlayer) {
    gamePlayForm = "Single/Multi-player";
  }

  // Mapping
  const gamePlayFormIcon:{[key:string]:IconType} = {
    "Multi-player": IoPeople,
    "Single/Multi-player": IoPeople,
    "Single-player": IoMdPerson,
  };
  const IconComponent = gamePlayFormIcon[gamePlayForm];

  return (
    <Card.Root rounded={"xl"} className="card-color" overflow="hidden">
      <Image
        src={game.background_image}
        width={"100%"}
        height={"300px"}
        objectFit={"cover"}
        display={"block"}
        alt="Green double couch with wooden legs"
      />

      <Card.Body gap="2">
        <Card.Title display={"flex"} alignItems={"center"}  justifyContent={"space-between"}>
          {game.name}
          <Flex
            bgColor={"gray.800"}
            p={1}
            width={"fit-content"}
            rounded={"xl"}
            gap={1}
            align={"center"}
          >
            <FaStar color="gold" /> {game.rating_top}
          </Flex>
        </Card.Title>
        <Card.Description display={"flex"} flexWrap={"wrap"} gap={1}>
          {game.genres.map((genre) => (
            <Badge key={genre.id} colorPalette="purple">
              {genre.name}
            </Badge>
          ))}
        </Card.Description>
        <Text
          color={"gray.400"}
          mt="2"
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          {<IconComponent />} {gamePlayForm}
        </Text>
        <Text
          color={"gray.400"}
          mt="2"
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <MdAccessTime /> +{game.playtime} hours
        </Text>
        <Text
          color={"gray.400"}
          mt="2"
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <IoCalendarNumber /> {game.released}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
          <GameCardPlatforms platforms={game.parent_platforms.map(obj => obj.platform)} />
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;

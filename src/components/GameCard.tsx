import { Game } from "@/types/Game";
import { Badge, Button, Card, Image, Text } from "@chakra-ui/react";
import { IoPeople } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";

interface Props {
    game:Game;
}

const GameCard = ({game}:Props) => {

    const isSinglePlayer = game.tags.find(tag => tag.id === 31);
    const isMultiPlayer = game.tags.find(tag => tag.id === 7);

    let gamePlayForm = ""

    if ((isSinglePlayer || isMultiPlayer) && !(isSinglePlayer && isMultiPlayer)) {
        if (isSinglePlayer) {
            gamePlayForm = "Single-player"
        } else {
            gamePlayForm = "Multi-player"
        }
    } else if (isMultiPlayer && isSinglePlayer) {
        gamePlayForm = "Single/Multi-player"
    }

    // Mapping
    const gamePlayFormIcon = {
        "Multi-player": IoPeople,
        "Single/Multi-player": IoPeople,
        "Single-player":IoMdPerson
    }
    const IconComponent = gamePlayFormIcon[gamePlayForm];
    
  return (
    <Card.Root rounded={"xl"} className="card-color"  overflow="hidden">
            <Image
              src={game.background_image}
              width={"100%"}
              height={"300px"}
              objectFit={"cover"}
              display={"block"}
              alt="Green double couch with wooden legs"
            />
            <Card.Body  gap="2">
              <Card.Title>{game.name}</Card.Title>
              <Card.Description display={"flex"} flexWrap={"wrap"} gap={1}>
                {game.genres.map(genre => (
                    <Badge key={genre.id} colorPalette="purple">{genre.name}</Badge>
                ))}
              </Card.Description>
              <Text
                color={"gray.400"}
                mt="2"
                display={"flex"} alignItems={"center"} gap={1}
              >
               {<IconComponent />} {gamePlayForm}  
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid">Buy now</Button>
              <Button variant="ghost">Add to cart</Button>
            </Card.Footer>
          </Card.Root>
  )
}

export default GameCard
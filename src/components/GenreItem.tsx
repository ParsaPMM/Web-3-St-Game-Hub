import { HStack, Text, Image } from "@chakra-ui/react";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  genre: Genre;
  selected: boolean;
  handleOnSelect: (genreId: number) => void;
}

const GenreItem = ({ genre, selected, handleOnSelect }: Props) => {
  return (
    <HStack
      cursor={"pointer"}
      key={genre.id}
      width={"100%"}
      className={selected ? "card-color" : ""}
      onClick={() => {
        handleOnSelect(genre.id);
      }}
      paddingLeft={3}
    >
      <Image
        width={"40px"}
        height={"40px"}
        rounded={"2xl"}
        src={genre.image_background}
      />
      <Text fontWeight={selected ? "bold" : "normal"}>{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;

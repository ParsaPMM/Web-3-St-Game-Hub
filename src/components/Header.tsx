import { Box, HStack, Input, Heading, Text, Flex } from "@chakra-ui/react";
import { LuTowerControl } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { FaSearch } from "react-icons/fa";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <Box as={"header"} borderBottom={"1px"} borderColor={"var(--card-color)"} borderBottomStyle={"solid"} className="header-color" py={4}>
      <HStack>
        <Flex paddingLeft={3} gap={1} align={"center"} width={"20%"}>
          <Text fontSize={"4xl"} style={{ color: "var(--pink-color)" }}>
            <LuTowerControl />
          </Text>
          <Heading>GameVault</Heading>
        </Flex>
        <Box width={"70%"}>
          <InputGroup width={"100%"} flex="1" startElement={<FaSearch />}>
            <Input
              rounded={"3xl"}
              padding={5}
              className="card-color"
              placeholder="Search"
            />
          </InputGroup>
        </Box>
        <Box width={"10%"} display={"flex"} justifyContent={"center"}>
          <ThemeToggler />
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;

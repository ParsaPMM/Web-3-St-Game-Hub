import { Box, HStack, Input, Image  } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { InputGroup } from "./ui/input-group"
import logoImage from "./../assets/logo.webp"
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header>
        <HStack>
            <Box width={"7%"}>
                <Image src={logoImage} width={"100%"} />
            </Box>
            <Box width={"80%"}>
                <InputGroup width={"100%"} flex="1" startElement={<CiSearch />}>
                    <Input rounded={"3xl"}
                    padding={5}
                    bgColor={"gray.800"}
                    placeholder="Search" />
                </InputGroup>
            </Box>
            <Box width={"10%"} display={"flex"} justifyContent={"center"} >
                <ThemeToggler  />
            </Box>
        </HStack>
    </header>
  )
}



export default Header
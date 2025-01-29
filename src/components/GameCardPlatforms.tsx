import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
  FaRegQuestionCircle 
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../types/Platform";
import { IconType } from "react-icons";
import { Box, Badge } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const GameCardPlatforms = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <Box display={"flex"} gap={1} flexWrap={"wrap"}>
      {platforms.map((platform) => {
        const icon = iconMap[platform.slug] || FaRegQuestionCircle
        return (
            <Badge key={platform.id} bgColor={"gray.800"}>
                <Icon as={icon} />
                {platform.name}
            </Badge>
        );
      })}
    </Box>
  );
};

export default GameCardPlatforms;

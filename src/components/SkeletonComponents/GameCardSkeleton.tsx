import { HStack, Stack, Skeleton } from "@chakra-ui/react"
import { SkeletonCircle } from "../ui/skeleton"
import { SkeletonText } from "@/components/ui/skeleton"


const GameCardSkeleton = () => {
  return (
    <Stack gap="6" width={"100%"} >
      <Skeleton width={"100%"} bgColor={"var(--card-color)"} rounded={"xl"} height="300px" />
      <HStack width="full">
        
        <SkeletonText bgColor={"var(--card-color)"} noOfLines={3} />
      </HStack>
    </Stack>
  )
}

export default GameCardSkeleton
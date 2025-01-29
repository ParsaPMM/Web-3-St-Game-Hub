import { HStack, Stack, VStack } from "@chakra-ui/react"
import { Skeleton, SkeletonCircle } from "@/components/ui/skeleton"
const GenreListSkeleton = () => {

    const list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  return (
    <VStack>
      {list.map((value) => (
          <HStack key={value} gap="2" mt={5} width={"250px"} px={3}
           >
          <SkeletonCircle bgColor={"var(--card-color)"} size="8" />
          <Stack flex="1">
            <Skeleton bgColor={"var(--card-color)"} height="5" />
          </Stack>
        </HStack>
      ))}
    </VStack>
  )
}

export default GenreListSkeleton
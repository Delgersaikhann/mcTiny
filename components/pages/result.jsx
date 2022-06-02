import { Heading, VStack , Text, Center} from "@chakra-ui/react"


const Result = () => {
    return(
        <VStack h="100%" w="100%" bg="white" p={7}>
            <Center w="100%" h="30%">

            <Heading  textTransform="uppercase" >
            Result
            </Heading>
            </Center>
           
        </VStack>
    )
}

export default Result
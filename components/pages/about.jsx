import { Heading, VStack , Text, Center} from "@chakra-ui/react"


const About = () => {
    return(
        <VStack h="100%" w="100%" bg="white" p={7}>
            <Center w="100%" h="30%">

            <Heading  textTransform="uppercase" >
                About
            </Heading>
            </Center>
            <Text>
                Hello @Todo!
            </Text>
            <Text flexGrow={1} textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque cras potenti aliquam. Ut aliquam ipsum sapien semper at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </Text>
        </VStack>
    )
}

export default About
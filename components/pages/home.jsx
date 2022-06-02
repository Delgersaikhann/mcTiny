import { Center, Image, VStack, Text, Box } from "@chakra-ui/react"


const Home = () => {
    return(
        <Center h="100%" w="100%" backgroundImage="url('/bg.png')" bgRepeat="no-repeat" bgPos="center" bgSize="cover" pos="relative">
            <Center bg="linear-gradient(to top, #E8518C,#7A52A1)" h="100%" w="100%" pos="absolute" opacity="0.9">

            </Center>
            <Image src="/tiny.png" pos="relative" loading="lazy"/>
            <VStack pos="absolute" zIndex={2} bottom="20px" color="white" spacing={0}>
                <Text fontWeight={600} textTransform="uppercase" fontSize="2xl">Let's start</Text>
                <Text opacity={0.7}>scroll down</Text>


                <Image src="/arrow.gif" h="60px" w="auto"/>

            </VStack>
        </Center>
    )
}

export default Home
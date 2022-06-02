import { Center, Image } from "@chakra-ui/react"


const Home = () => {
    return(
        <Center h="100%" w="100%" backgroundImage="url('/bg.png')" bgRepeat="no-repeat" bgPos="center" bgSize="cover" pos="relative">
            <Center bg="linear-gradient(#E8518C,#7A52A1)" h="100%" w="100%" pos="absolute" opacity="0.9">

            </Center>
            <Image src="/logo.png" pos="relative" loading="lazy"/>
        </Center>
    )
}

export default Home
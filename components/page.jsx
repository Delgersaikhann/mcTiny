import { Center, Box, VStack, Image} from "@chakra-ui/react";

export const Page = ({children, showLogo = false}) => {

    return <VStack w="100%"  pos="relative">
        <Center pos="relative"  h="100vh"  w="100%" > 
 


 {children}

</Center>
{showLogo && <Image src="/logo_pink.svg" h={["20px", "30px", "40px"]} pos="absolute" bottom="30px" zIndex={5}/>}

    </VStack>
   
}

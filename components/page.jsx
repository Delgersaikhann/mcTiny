import { Center, Box, VStack} from "@chakra-ui/react";

export const Page = ({children}) => {

    return <VStack w="100%" >
        <Center pos="relative"  h="100vh"  w="100%" > 
 


 {children}

</Center>

    </VStack>
   
}

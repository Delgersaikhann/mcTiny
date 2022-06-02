import { Center, Image, VStack, Text, Box, HStack, Heading } from "@chakra-ui/react"
import Slider from "react-slick"
import { settings } from "../Config"
import { Page } from "../page"

const menu = [{
    label : "curriculum",
    idx : 2,
},
{
    label : "personalized",
    idx : 2,
},{
    label : "ai teachers",
    idx : 2,
},
{
    label : "comunity",
    idx : 2,
},
{
    label : "reward",
    idx : 2,
},{
    label : "result",
    idx : 2,
},
{
    label : "partner schools",
    idx : 2,
}]


const Features = () => {


  
  

    return(<Box w="100%" h="100%" overflow="hidden">

        <Slider {...settings}>
            <Page showLogo={false}>
            <Center w="100%" h="30%" pos="absolute">

<Heading  textTransform="uppercase" color="#9E329E" >
Features
</Heading>
</Center>
            <VStack bg="white" h="100%" w="100%" justifyContent="center" pb="40%">
                <h1 style={{opacity : 0}}>Main features</h1>
                <HStack w="100%" spacing={-1} justifyContent="flex-end">
                    <Box bg="#E8518C" boxSize={["20px", "30px"]} borderRadius="50%" />
                    <Box w="50%" h="2px" bg="#E8518C"/>
                </HStack>
            </VStack>
            </Page>
            <Page showLogo={false}>
                <HStack bg="white" h="100%" w="100%" spacing={0} alignItems="flex-end" pb="40%">

            <VStack  justifyContent="center" flexGrow={[0.2,0.5,1]} h="100%">
                <h1 style={{opacity : 0}}>Main features</h1>
                <HStack w="100%" spacing={-1} justifyContent="flex-start">
                   
                    <Box w="100%" h="2px" bg="#E8518C"/>
                </HStack>

            </VStack>
            <VStack flexGrow={1}  alignItems="flex-start"  h="50%">
                <VStack borderLeft="3px solid #E8518C" alignItems="flex-start" justifyContent="flex-start" mt={2} spacing={3}>

                {menu.map((el,idx)=> <HStack key={el.label}> <Box bg="#E8518C" boxSize={["20px", "30px"]} borderRadius="50%" ml={["-10px","-15px"]}/> <Text textTransform={"uppercase"} cursor="pointer" fontSize={["12px", "16px"]}>{el.label}</Text></HStack>)}
                </VStack>

            </VStack>
                </HStack>
            </Page>
          
        </Slider>
        Hi
    </Box>
    )
}

export default Features
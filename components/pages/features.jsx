import { Center, Image, VStack, Text, Box, HStack } from "@chakra-ui/react"
import Slider from "react-slick"
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

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width : "100%",
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

const Features = () => {


  
  

    return(<Box w="100%" h="100%" overflow="hidden">

        <Slider {...settings} nextArrow={<SampleNextArrow />}>
            <Page>
            <VStack bg="white" h="100%" w="100%" justifyContent="center" pb="40%">
                <h1>Main features</h1>
                <HStack w="100%" spacing={-1} justifyContent="flex-end">
                    <Box bg="#55C595" boxSize={["20px", "30px"]} borderRadius="50%" />
                    <Box w="50%" h="2px" bg="#55C595"/>
                </HStack>
            </VStack>
            </Page>
            <Page>
                <HStack bg="white" h="100%" w="100%" spacing={0} alignItems="flex-end" pb="40%">

            <VStack  justifyContent="center" flexGrow={1} h="100%">
                <h1 style={{opacity : 0}}>Main features</h1>
                <HStack w="100%" spacing={-1} justifyContent="flex-start">
                   
                    <Box w="100%" h="2px" bg="#55C595"/>
                </HStack>

            </VStack>
            <VStack flexGrow={1}  alignItems="flex-start"  h="50%">
                <VStack borderLeft="3px solid #55C595" alignItems="flex-start" justifyContent="flex-start" mt={2} spacing={3}>

                {menu.map((el,idx)=> <HStack key={el.label}> <Box bg="#55C595" boxSize={["20px", "30px"]} borderRadius="50%" ml={["-10px","-15px"]}/> <Text textTransform={"uppercase"} cursor="pointer">{el.label}</Text></HStack>)}
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
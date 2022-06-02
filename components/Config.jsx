import { Box, Image } from "@chakra-ui/react";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        style={{ ...style, display: "block",  zIndex: 5, position : "absolute", right: 0 }}
        onClick={onClick}
        boxSize={["60px", "80px","100px"]}
      >
      <Image src="/right.svg" h="100px"/>
      </Box>
    );
  }
  
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        style={{ ...style, display: "block" , zIndex: 5, position : "absolute", left: "0"}}
        onClick={onClick}
        boxSize={["60px", "80px","100px"]}
      >
          <Image src="/left.svg" h="100px"/>
          </Box>
    );
  }


export const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width : "100%",
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    appendDots: dots => <ul>{dots}</ul>,
  };
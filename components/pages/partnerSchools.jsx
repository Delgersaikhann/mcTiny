import { Heading, VStack, Text, Center, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const data = [
  {
    title: "Partner Schools",
    image:
      <Center flexGrow={1.5}>
        <Image src="/schools.png" h="250px" alt="play" />
      </Center>
    ,
    text:
      <Text textAlign="justify" flexGrow={1}>
        As soon as people hear a curriculum, they think of a long text and
        paragraphs. However, the most important thing for people is the outcome
        of the curriculum. If that outcome is not felt in a short period of
        time, most people become discouraged.
      </Text>
    ,
  },
  {
    title: "tomujin alternative school",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/school1.png" h="320px" alt="play" />
      </Center>
    ,
    text: <Text textAlign="justify" flexGrow={1}></Text>,
  },
  {
    title: "tomujin academy",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/school2.png" h="320px" alt="learn" />
      </Center>
    ,
    text: <Text textAlign="justify" flexGrow={1}></Text>,
  },
  {
    title: "ecoger kindergarten",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/school3.png" h="320px" alt="earn" />
      </Center>
    ,
    text: <Text textAlign="justify" flexGrow={1}></Text>,
  },
  {
    title: "human international school",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/school4.png" h="320px" alt="earn" />
      </Center>
    ,
    text: <Text textAlign="justify" flexGrow={1}></Text>,
  },
];

const Partner = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Slider {...settings}>
        {data.map((el, idx) => (
          <Page>
            <VStack
              h="100%"
              w="100%"
              bg="white"
              p={7}
              justifyContent="space-evenly"
            >
              <Center w="100%" flexGrow={1}>
                <Heading
                  textTransform="uppercase"
                  color={idx === 0 ? "#9E329E" : "#E8518C"}
                >
                  {el.title}
                </Heading>
              </Center>
              {el.image}
              {el.text}
            </VStack>
          </Page>
        ))}
      </Slider>
    </Box>
  );
};

export default Partner;

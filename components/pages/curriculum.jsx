import { Heading, VStack, Text, Center, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const data = [
  {
    title: "Curriculum",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/curriculum.png" w="320px" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1} fontSize="xs">
        As soon as people hear a{" "}
        <span style={{ color: "#E8518C" }}>curriculum</span>, they think of a
        long text and paragraphs. However, the most important thing for people
        is the outcome of the{" "}
        <span style={{ color: "#E8518C" }}>curriculum</span>. If that outcome is
        not felt in a short period of time, most people become discouraged.
      </Text>
    ),
  },
  {
    title: "Tiny",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/curriculum3.png" w="320px" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1} fontSize="xs">
        Let’s make a <span style={{ color: "#E8518C" }}>giant curriculum</span>{" "}
        into tiny tasks and make the outcomes come in a short period of time.
      </Text>
    ),
  },
  {
    title: "Role play game",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/curriculum4.png" w="320px" alt="learn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1} fontSize="xs">
        The lessons’ programs will be delivered in a form of games that will
        give the{" "}
        <span style={{ color: "#E8518C" }}>most realistic feelings</span> in
        order to gain{" "}
        <span style={{ color: "#E8518C" }}>real-life experience</span>.
      </Text>
    ),
  },
  {
    title: "Interactive assessment",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/curriculum5.png" w="300px" alt="earn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1} fontSize="xs">
        The results will be evaluated in an{" "}
        <span style={{ color: "#E8518C" }}> interesting, interactive way </span>
        , not by filling out a test on paper. It’s also the time to beat the big
        BOSS, not the fear of taking a final exam.
      </Text>
    ),
  },
];

const Curriculum = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Slider {...settings}>
        {data.map((el, idx) => (
          <Page key={el.title}>
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

export default Curriculum;

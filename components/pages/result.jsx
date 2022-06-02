import { Heading, VStack, Text, Center, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const data = [
  {
    title: "Result",
    image: (
      <Center flexGrow={1.5}>
        <Image src="/graph.png" h="200px" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        Through your learning journey, the most important thing is the{" "}
        <span style={{ color: "#E8518C" }}>results</span>. If our learners
        persistently achieve growth and satisfactory{" "}
        <span style={{ color: "#E8518C" }}>results</span> and become capable of
        using what they have learned in real-life situations, then our ultimate
        goal is achieved.
      </Text>
    ),
  },
  {
    title: "Data tracking",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/curriculum2.png" h="100px" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        Informative <span style={{ color: "#E8518C" }}>datas</span> about the
        learners’ actual learning process will be sent directly to the school
        and parents. This will make school and parents activities more effective
        and support the learning process of our learners.
      </Text>
    ),
  },
  {
    title: "BlockChain",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/dao.png" h="100px" alt="learn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        On the <span style={{ color: "#E8518C" }}> blockchain </span>, We will
        store the informative datas of what games, contents, and courses our
        learners are playing, watching, and taking on the{" "}
        <span style={{ color: "#E8518C" }}> blockchain </span>.
      </Text>
    ),
  },
  {
    title: "NFt Diplom",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/diplom.png" h="100px" alt="earn" />
      </Center>
    ),
    text: (
      <VStack>
        <Text textAlign="justify" flexGrow={1}>
          All informative datas stored on the blockchain will be combined and
          collected at the end of each course and the result diploma will be
          generated as an <span style={{ color: "#E8518C" }}>NFT</span>. It will
          confirm the learning process and progress of the learner.
        </Text>
        <Text textAlign="justify">
          An <span style={{ color: "#E8518C" }}>NFT diploma</span> is a
          permanent token that confirms a learner’s performance and progress
          when he or she enters the workplace after the completion of their
          courses.
        </Text>
      </VStack>
    ),
  },
];

const Result = () => {
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

export default Result;

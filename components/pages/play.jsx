import { Heading, VStack, Text, Center, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const data = [
  {
    title: "Play",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/play.png" h="100px" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        To learn well, you need to play more, not to give up{" "}
        <span style={{ color: "#E8518C" }}>playing games</span>. Evaluate what
        you learn from the{" "}
        <span style={{ color: "#E8518C" }}> game in real-life </span>.
      </Text>
    ),
  },
  {
    title: "Learn",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/learn.png" h="100px" alt="learn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        To <span style={{ color: "#E8518C" }}>learn</span> in a way that suits
        you perfectly is the most effective. Learning{" "}
        <span style={{ color: "#E8518C" }}>tiny by tiny</span> leads to great
        success in real-life.
      </Text>
    ),
  },
  {
    title: "Earn",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/earn.png" h="100px" alt="earn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        <span style={{ color: "#E8518C" }}>
          {" "}
          A good learner lives a good life
        </span>
        . You will be rewarded everyday through your learning journey and get a
        even better education.
      </Text>
    ),
  },
];

const Play = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Slider {...settings}>
        {data.map((el) => (
          <Page key={el.title}>
            <VStack
              h="100%"
              w="100%"
              bg="white"
              p={7}
              justifyContent="space-evenly"
            >
              <Center w="100%" flexGrow={1}>
                <Heading textTransform="uppercase" color="#9E329E">
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

export default Play;

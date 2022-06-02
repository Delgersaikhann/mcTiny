import { Heading, VStack, Text, Center, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const data = [
  {
    title: "Personalized",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/profile.png" h="320px" alt="play" />
      </Center>
    ,
    text:
      <Text textAlign="justify" flexGrow={1}>
        When one excellent teacher focuses on only one learner, the learner
        shows massive improvement due to{" "}
        <span style={{ color: "#E8518C" }}>personalization </span>. That's why
        we are going to offer{" "}
        <span style={{ color: "#E8518C" }}>personalization</span> to our
        learners.

        Your <span style={{ color: "#E8518C" }}> personalization </span> will
        start by creating your avatar, and through that avatar, we will study
        your learning patterns and methods to create the best learning map for
        you. In addition, the successful completion of every mission and quest
        will grant rewards that are meant only for you
      </Text>
    ,
  },
  {
    title: "Character Avatar",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/pers1.png" h="320px" alt="play" />
      </Center>
    ,
    text:
      <Text textAlign="justify" flexGrow={1}>
        Your <span style={{ color: "#E8518C" }}>created avatar</span> will be
        your lifelong virtual version of yourself. It will play with you, it
        will learn with you, and it will earn with you. Every piece of
        information about you; will be presented through your{" "}
        <span style={{ color: "#E8518C" }}>created avatar</span>.
      </Text>
    ,
  },
  {
    title: "Only You",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/pers2.png" h="320px" alt="learn" />
      </Center>
    ,
    text:
      <Text textAlign="justify" flexGrow={1}>
        To make your learning personalized and more effective, we will take
        actions based <span style={{ color: "#E8518C" }}>on your data </span>.
        We will study how you learn, how you play, and what attracts you the
        most to teach you through your interests and preferences. We might have
        found the solution to your boredom.
      </Text>
    ,
  },
  {
    title: "Learning Map",
    image:
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/pers3.png" h="320px" alt="earn" />
      </Center>
    ,
    text:
      <Text textAlign="justify" flexGrow={1}>
        <span style={{ color: "#E8518C" }}>Learning Map</span> will guide you on
        your learning journey and will be personalized just for you. Depending
        on your current level, desired destination, characteristics and
        preferences, your learning quests and rewards will be adjusted for
        yourself. Wonder where your{" "}
        <span style={{ color: "#E8518C" }}>Learning Map </span>
        will begin.
      </Text>
    ,
  },
];

const Personalized = () => {
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

export default Personalized;

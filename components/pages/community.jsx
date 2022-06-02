import { Heading, VStack, Text, Center, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

/*eslint-disable*/
const data = [
  {
    title: "Community",
    image: (
      <Center flexGrow={1.5}>
        <Image src="/comm1.png" h="320px" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        By becoming a part of Tiny, you will join our virtual world where you
        can fulfill your social needs by going to your virtual school, competing
        with others, and <span style={{ color: "#E8518C" }}>catching up</span>{" "}
        with your friends. You can even meet your friends that you have not met
        for a while.
      </Text>
    ),
  },
  {
    title: "Virtual School",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/comm2.png" h="320px" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        Inside the virtual world of Tiny, there will be{" "}
        <span style={{ color: "#E8518C" }}> virtual schools </span> where normal
        school activities will be held. Same as real life, here you will find{" "}
        <span style={{ color: "#E8518C" }}> academic experts </span>,{" "}
        <span style={{ color: "#E8518C" }}> learning quests </span>and
        <span style={{ color: "#E8518C" }}>
          {" "}
          activities, a library, friends, personal mentors{" "}
        </span>{" "}
        and <span style={{ color: "#E8518C" }}>much more </span>. You might even
        find your soulmate here.
      </Text>
    ),
  },
  {
    title: "LeaderBoard",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/comm3.png" h="320px" alt="learn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        You won't know if you are improving or not unless you know your current
        level. Therefore, to help you to find your current level and compete
        with your friends, we brought a
        <span style={{ color: "#E8518C" }}>leaderboard </span> to our game.
        Let's see what you made of
      </Text>
    ),
  },
  {
    title: "Social Feed",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/comm4.png" h="360px" alt="earn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1}>
        Same as people making daily posts, status updates and catching up with
        others on <span style={{ color: "#E8518C" }}>social platforms </span>,
        Tiny will let you share your academic status, crazy achievements, and
        everything related to your growth. You have to show them that getting a
        full score on math ain't been that easy.
      </Text>
    ),
  },
];

const Community = () => {
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

export default Community;

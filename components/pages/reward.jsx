import { Heading, VStack, Text, Center, Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const data = [
  {
    title: "Reward",
    image: (
      <Center flexGrow={1.5}>
        <Image src="/reward1.png" w="100%" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1} fontSize="xs">
        A <span style={{ color: "#E8518C" }}>reward</span> is a big incentive
        for people to stay motivated, consistent, and focused. To effectively
        increase the performance of our learners, we are going to{" "}
        <span style={{ color: "#E8518C" }}>
          give points, digital currencies, and NFTs
        </span>{" "}
        as a <span style={{ color: "#E8518C" }}>reward</span> when people
        complete quests and missions.
      </Text>
    ),
  },
  {
    title: "Point",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/reward2.png" w="100%" alt="play" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1} fontSize="xs">
        Based on your gaming performance, and academic and non-academic
        performance, we will reward our learners with{" "}
        <span style={{ color: "#E8518C" }}>points</span>. These reward points
        will help you compete with others and climb up on{" "}
        <span style={{ color: "#E8518C" }}>leaderboards</span>.
      </Text>
    ),
  },
  {
    title: "Coin",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/reward3.png" w="100%" alt="learn" />
      </Center>
    ),
    text: (
      <VStack pb="20%">
        <Text textAlign="justify" flexGrow={1} fontSize="xs">
          Integrated with your learning performance, we will give actual digital
          currency as a <span style={{ color: "#E8518C" }}>reward</span>. With
          that collected digital currency, our learners can buy better courses
          so that they can grow more.
        </Text>
        <Text textAlign="justify" flexGrow={1} fontSize="xs">
          Furthermore, depending on your shown performances on challenging
          levels, you can win
          <span style={{ color: "#E8518C" }}>NFT certificates </span> which will
          be written on <span style={{ color: "#E8518C" }}>blockchain</span>.
        </Text>
      </VStack>
    ),
  },
  {
    title: "DAO",
    image: (
      <Center flexGrow={1.5}>
        {" "}
        <Image src="/reward4.png" w="100%" alt="earn" />
      </Center>
    ),
    text: (
      <Text textAlign="justify" flexGrow={1} fontSize="xs">
        Our learners must buy courses with a token, and depending on their
        learning performance, they can collect up to
        <span style={{ color: "#E8518C" }}> 80%</span> of their paid amount as
        reward. The remaining<span style={{ color: "#E8518C" }}> 20%</span> will
        be spent on the course and product usage fees. If your learning
        performance is not adequate enough, you will lose your token as much as
        you could have earned. The lost token will stay in the course pool so
        that the current learners can vote on what that token should be spent
        on.
      </Text>
    ),
  },
];

const Reward = () => {
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

export default Reward;

import {
  Heading,
  VStack,
  Text,
  Center,
  Box,
  Image,
  HStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const data = [
  {
    title: "Ai Teachers",
    aa: (
      <VStack w="100%" h="100%" pb={"20%"} justifyContent="flex-end">
        <Text textAlign="justify" fontSize="xs" p={7}>
          To improve the academic performance of learners, we will bring{" "}
          <span style={{ color: "#E8518C" }}> AI teachers</span> to our game. A
          virtual version of academic experts like Albert Einstein and Nikola
          Tesla will be available <span style={{ color: "#E8518C" }}> </span>
          24/7 to teach you personally based on your preference and data. To
          improve the academic performance of learners, our{" "}
          <span style={{ color: "#E8518C" }}>AI teachers</span> will be
          available <span style={{ color: "#E8518C" }}>24/7</span> to teach you
          with personalized content.
        </Text>
        <Center w="100%">
          <HStack w="100%">
            <Image src="/teachers1.png" h="220px" alt="play" ml="auto" />
          </HStack>
        </Center>
      </VStack>
    ),
  },
  {
    title: "Super Teachers",
    aa: (
      <VStack w="100%" h="100%" pb={"20%"} justifyContent="flex-end">
        <Text textAlign="justify" fontSize="xs" p={7}>
          Exceptional education is not accessible to everyone. Today, some
          learners are lucky enough to learn from the best while others are not.
          We are eliminating this inequality by offering the chance to learn
          from the best and the experts. Instead of your boring physics teacher,
          you can learn from the virtual version of Albert Einstein. Instead of
          your frustrating math teacher, you can learn math from the{" "}
          <span style={{ color: "#E8518C" }}> virtual version </span> of Stephen
          Hawking in a most fascinating and interesting way. We are offering the
          chance to learn from the best and the experts. Instead of your boring
          physics teacher, you can learn from the
          <span style={{ color: "#E8518C" }}> virtual version </span>of Albert
          Einstein in a most fascinating and interesting way.
        </Text>
        <Center w="100%">
          <HStack w="100%">
            <Image src="/teachers2.png" h="226px" alt="play" mr="auto" />
          </HStack>
        </Center>
      </VStack>
    ),
  },
  {
    title: "24/7 Teaching",
    aa: (
      <VStack h="100%" w="100%" bg="white" p={7} justifyContent="space-evenly">
        <Center w="100%">
          <HStack w="100%">
            <Image src="/teachers3.png" h="226px" alt="play" mr="auto" />
          </HStack>
        </Center>
        <Text textAlign="justify" fontSize="xs">
          When it comes to learning, it should be consistent. Therefore to help
          you to maintain your consistency and improve yourself, our Tiny will
          be accessible <span style={{ color: "#E8518C" }}>24/7.</span>
        </Text>
      </VStack>
    ),
  },
  {
    title: "Learn through contents",
    aa: (
      <VStack h="100%" w="100%" bg="white" p={7} justifyContent="space-evenly">
        <Center w="100%">
          <Image src="/teachers4.png" h="326px" alt="play" />
        </Center>
        <Text textAlign="justify" fontSize="xs">
          Our lessons will not be massive and unengaging. Like TikTok,
          Instagram, and Youtube videos, lesson content on Tiny will be
          engaging, interesting, and small to make your{" "}
          <span style={{ color: "#E8518C" }}>learning easier</span> and
          <span style={{ color: "#E8518C" }}> addicting</span>.
        </Text>
      </VStack>
    ),
  },
];

const AiTeachers = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Slider {...settings}>
        {data.map((el, idx) => (
          <Page>
            <VStack h="100%" w="100%" bg="white" justifyContent="flex-start">
              <Center w="100%" p={7}>
                <Heading
                  textTransform="uppercase"
                  color={idx === 0 ? "#9E329E" : "#E8518C"}
                >
                  {el.title}
                </Heading>
              </Center>
              {el.aa}
            </VStack>
          </Page>
        ))}
      </Slider>
    </Box>
  );
};

export default AiTeachers;

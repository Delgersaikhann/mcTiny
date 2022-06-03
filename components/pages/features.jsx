import {
  Center,
  Image,
  VStack,
  Text,
  Box,
  HStack,
  Heading,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { settings } from "../Config";
import { Page } from "../page";

const menu = [
  {
    label: "curriculum",
    idx: 2,
  },
  {
    label: "personalized",
    idx: 2,
  },
  {
    label: "ai teachers",
    idx: 2,
  },
  {
    label: "comunity",
    idx: 2,
  },
  {
    label: "reward",
    idx: 2,
  },
  {
    label: "result",
    idx: 2,
  },
  {
    label: "partner schools",
    idx: 2,
  },
];

const Features = ({ func }) => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Slider {...settings}>
        <Page showLogo={false}>
          <VStack
            h="100%"
            w="100%"
            justifyContent="flex-start"
            alignItems="center"
            pt="20%"
            bg="linear-gradient(to bottom, #E8518C,#7A52A1)"
          >
            <Box pb="20%" pt={3}>
              <Image src="/tiny.png" h="40px" />
            </Box>
            <Center p={7} w="80%">
              <Image src="/features.png" />
            </Center>
            <Text color="white" w="80%" px={7} textAlign="center" pt={7}>
              Introducing the concept and advantages of the updated version.
            </Text>
          </VStack>
        </Page>
        <Page showLogo={false}>
          <VStack
            bg="linear-gradient(to bottom, #E8518C,#7A52A1)"
            h="100%"
            w="100%"
            justifyContent="flex-start"
            alignItems="center"
            pt="20%"
            // pl={3}
          >
            <HStack
              textTransform={"uppercase"}
              color="white"
              fontSize="4xl"
              pb={7}
            >
              <Text>Main</Text>
              <Text fontWeight={700}>Features</Text>
            </HStack>
            <VStack
              w="50%"
              alignItems="flex-start"
              borderLeft="1px solid white"
              spacing={9}
            >
              {menu.map((el, idx) => (
                <HStack
                  key={el.label}
                  spacing={5}
                  onClick={() => func(idx + 4)}
                >
                  {" "}
                  <Box
                    border="2px solid white"
                    bg="#E8518C"
                    boxSize={["14px", "20px"]}
                    borderRadius="50%"
                    ml={["-7px", "-10px"]}
                  />{" "}
                  <Text
                    textTransform={"uppercase"}
                    cursor="pointer"
                    fontSize={["12px", "16px"]}
                    color="white"
                    fontWeight={"600"}
                  >
                    {el.label}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Page>
      </Slider>
      Hi
    </Box>
  );
};

export default Features;

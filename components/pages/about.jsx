import { Heading, VStack, Text, Center } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack h="100%" w="100%" bg="white" p={9}>
      <Center w="100%" h="30%">
        <Heading textTransform="uppercase" color="#9E329E">
          About
        </Heading>
      </Center>
      <Text textAlign="justify">
        <span style={{ opacity: 0 }}>Spacee</span> Tiny is a real world result
        based virtual world where users can learn their gaming experiences.
      </Text>
      <Text flexGrow={1} textAlign="justify">
        In the <span style={{ color: "#E8518C" }}>virtual world of Tiny</span>,
        you will always be learning and evolving. Tiny will provide a chance to
        live even better real-life for whoever is learning and achieving.
      </Text>
    </VStack>
  );
};

export default About;

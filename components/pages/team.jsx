import { Heading, VStack, Text, Center, Image } from "@chakra-ui/react";
import { Page } from "../page";

const Team = () => {
  return (
    <Page>
      <VStack h="100%" w="100%" bg="white" p={7}>
        <Center w="100%" h="30%">
          <Heading textTransform="uppercase" color="#9E329E">
            Team
          </Heading>
        </Center>

        <Image src="/team.png" alt="a" />
      </VStack>
    </Page>
  );
};

export default Team;

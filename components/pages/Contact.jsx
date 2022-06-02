import { Heading, VStack, Text, Center, HStack, Image } from "@chakra-ui/react";
import { Page } from "../page";

const Contact = () => {
  return (
    <Page>
      <VStack h="100%" w="100%" bg="white" p={7}>
        <Center w="100%" h="30%">
          <Heading textTransform="uppercase" color="#9E329E">
            Contact
          </Heading>
        </Center>

        <VStack spacing={7} w="100%" alignItems="flex-start">
          <a href="mailto:yoda.tomujintech.com">
            <HStack
              color="#9E329E"
              fontWeight="600"
              justifyContent={"flex-start"}
            >
              <Image src="/contact1.png" />
              <Text pl={5}>yoda.tomujintech.com</Text>
            </HStack>
          </a>

          <a href="mailto:yoda.tomujintech.com">
            <HStack
              color="#9E329E"
              fontWeight="600"
              justifyContent={"flex-start"}
            >
              <Image src="/contact2.png" />
              <Text pl={5}>tomujindigital</Text>
            </HStack>
          </a>

          <a href="tel:976-9991 3591">
            <HStack
              color="#9E329E"
              fontWeight="600"
              justifyContent={"flex-start"}
            >
              <Image src="/contact3.png" />
              <Text pl={5}>976-9991 3591</Text>
            </HStack>
          </a>

          <HStack
            color="#9E329E"
            fontWeight="600"
            justifyContent={"flex-start"}
          >
            <Image src="/contact4.png" />
            <Text pl={5}>
              CHINGGIS AVENUE-6, STADIUM ORGIL-1, Ulaanbaatar 17010
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Page>
  );
};

export default Contact;

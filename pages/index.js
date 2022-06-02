import {
  Box,
  Center,
  HStack,
  Spacer,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useCallback, useState } from "react";
import { Page } from "../components/page";
import { Slide, FullPage } from "react-full-page";
import Head from "next/head";
import HomePage from "../components/pages/home";
import Features from "../components/pages/features";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "../components/pages/about";
import Curriculum from "../components/pages/curriculum";
import Personalized from "../components/pages/personalized";
import AiTeachers from "../components/pages/aiTeachers";
import Community from "../components/pages/community";
import Reward from "../components/pages/reward";
import Result from "../components/pages/result";
import PartnerSchools from "../components/pages/partnerSchools";
import Team from "../components/pages/team";

const renderCount = (count) => (count < 10 ? "0" + count : count);
const pages = [
  {
    title: "Start",
    path: "/",
    page: <HomePage />,
  },
  {
    title: "About",
    path: "/about",
    page: <About />,
  },
  {
    title: "Features",
    path: "/features",
    page: <Features />,
  },
  {
    title: "Curriculum",
    path: "/curriculum",
    page: <Curriculum />,
  },
  {
    title: "Personalized",
    path: "/personalized",
    page: <Personalized />,
  },
  {
    title: "AiTeachers",
    path: "/aiTeachers",
    page: <AiTeachers />,
  },
  {
    title: "Community",
    path: "/community",
    page: <Community />,
  },
  {
    title: "Reward",
    path: "/reward",
    page: <Reward />,
  },
  {
    title: "Result",
    path: "/result",
    page: <Result />,
  },
  {
    title: "Partner Schools",
    path: "/partner",
    page: <PartnerSchools />,
  },
  {
    title: "Team",
    path: "/team",
    page: <Team />,
  },
];

export default function Home() {
  const [p, setP] = useState(0);

  const onChange = (e) => {
    setP(e.to);
  };

  return (
    <Box w="100vw" pos="relative">
      {/* <Head>
        <title>{pages[p].title}</title>
      </Head> */}
      <FullPage afterChange={(e) => onChange(e)}>
        {pages.map((el, idx) => (
          <Slide key={el.path}>
            <Page>{el.page}</Page>
          </Slide>
        ))}
      </FullPage>
      <HStack
        pos="fixed"
        zIndex={3}
        bottom="20px"
        w="100%"
        justifyContent="space-between"
        px={5}
      >
        <Text opacity={0}>{p}</Text>
        <Image src="/banner.png" />
        <Text transform={"rotate(-90deg)"} fontWeight="500">
          {renderCount(p)}
        </Text>
      </HStack>
    </Box>
  );
}

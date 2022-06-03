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
import Contact from "../components/pages/Contact";
import Play from "../components/pages/play";

const renderCount = (count) => (count < 10 ? "0" + count : count);

export default function Home() {
  const [p, setP] = useState(0);

  const changeHandler = (num) => {
    setP(num);
  };

  const pages = [
    {
      title: "TinyVerse",
      path: "/",
      page: <HomePage />,
      showLogo: false,
    },
    {
      title: "About",
      path: "/about",
      page: <About />,
      showLogo: true,
    },
    {
      title: "Play & Learn & Earn",
      path: "/play",
      page: <Play />,
      showLogo: false,
    },
    {
      title: "Features",
      path: "/features",
      page: <Features func={changeHandler} />,
      showLogo: false,
    },
    {
      title: "Curriculum",
      path: "/curriculum",
      page: <Curriculum />,
      showLogo: false,
    },
    {
      title: "Personalized",
      path: "/personalized",
      page: <Personalized />,
      showLogo: false,
    },
    {
      title: "Ai Teachers",
      path: "/aiTeachers",
      page: <AiTeachers />,
      showLogo: false,
    },
    {
      title: "Community",
      path: "/community",
      page: <Community />,
      showLogo: false,
    },
    {
      title: "Reward",
      path: "/reward",
      page: <Reward />,
      showLogo: false,
    },
    {
      title: "Result",
      path: "/result",
      page: <Result />,
      showLogo: false,
    },
    {
      title: "Partner Schools",
      path: "/partner",
      page: <PartnerSchools />,
      showLogo: false,
    },
    {
      title: "Team",
      path: "/team",
      page: <Team />,
      showLogo: true,
    },
    {
      title: "Contact",
      path: "/contact",
      page: <Contact />,
      showLogo: true,
    },
  ];

  const onChange = (e) => {
    setP(e.to);
  };

  useEffect(() => {
    window.localStorage.setItem("page", pages[p].path);
  }, [p]);

  return (
    <Box w="100vw" pos="relative">
      <Head>
        <title>{pages[p].title}</title>
        <link rel="shortcut icon" href="/earn.png" />
        <meta
          name="description"
          content={
            "Tiny is a real world result based virtual world where users can learn their gaming experiences.In the virtual world of Tiny, you will always be learning and evolving. "
          }
        />
        <meta itemProp="name" content={"Tiny"} />
        <meta
          itemProp="description"
          content={
            "Tiny is a real world result based virtual world where users can learn their gaming experiences.In the virtual world of Tiny, you will always be learning and evolving. "
          }
        />
        <meta itemProp="image" content={"/reward1.png"} />
      </Head>
      <FullPage afterChange={(e) => onChange(e)}>
        {pages?.map((el, idx) => (
          <Slide key={el.path}>
            <Page showLogo={el.showLogo}>{el.page}</Page>
          </Slide>
        ))}
      </FullPage>
      <HStack
        pos="fixed"
        zIndex={3}
        bottom="20px"
        w="100%"
        justifyContent="flex-end"
        px={5}
      >
        <Text transform={"rotate(-90deg)"} fontWeight="500">
          {p > 0 && renderCount(p)}
        </Text>
      </HStack>
    </Box>
  );
}

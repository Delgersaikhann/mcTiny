import { Box, Center, VStack , Image} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useCallback, useState } from "react";


export default function Layout({ children }) {


  return (
    <VStack pos="relative">
        
    <main>{children}</main>
 

    </VStack>
  )
}
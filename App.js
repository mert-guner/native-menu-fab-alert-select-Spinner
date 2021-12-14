import React from "react"
import {
  Container,
  Text,
  Heading,
  Center,
  NativeBaseProvider,
  Link,
  VStack,
} from "native-base";
import Selectt from "./Selectt";
import Alertt from "./Alertt";
import Menuu from "./Menuu";
import Fabb from "./Fabb";
import Spinnerr from "./Spinnerr";



export function App() {
  return (
    <Container>
      <Heading>
        A component library for the
        <Link mt={4} href="https://github.com/">
        <Heading color="emerald.500"> React Ecosystem</Heading>
        </Link>
        
      </Heading>
      <Text mt="3" fontWeight="medium">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </Container>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
      <VStack space={20} alignItems="center">
        <App />
        <Selectt/>
        <Alertt/>
        </VStack>
        <Menuu/>
        <Fabb/>
        <Spinnerr/>
      </Center>
    </NativeBaseProvider>
  )
}

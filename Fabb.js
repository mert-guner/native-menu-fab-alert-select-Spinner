import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base"
import React from "react"
import { AntDesign } from "@expo/vector-icons";


export const Fabb = () => {
  return (
    <Box position="relative" h={100} w="100%">
      <Fab
        position="absolute"
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Fabb />
      </Center>
    </NativeBaseProvider>
  )
}

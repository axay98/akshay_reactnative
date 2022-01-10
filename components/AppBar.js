import React, { useState } from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Pressable,
  Input,
} from "native-base";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function AppBar({ navigation, name }) {
  const [searchable, setsearchable] = useState(false);

  let searchbar = null;
  if (searchable) {
    searchbar = (
      <VStack space={5} width="100%">
        <VStack width="100%" space={5} alignItems="center">
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            placeholderTextColor="black"
            _hover={{ bg: "black", borderWidth: 0 }}
            borderWidth="0"
            _web={{
              _focus: { style: { boxShadow: "none" } },
            }}
            InputLeftElement={
              <Icon
                ml="2"
                size="5"
                color="black"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
      </VStack>
    );
  }

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#6200ee" />
      <VStack>
        <HStack
          bg="#6200ee"
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack space="60" alignItems="center">
            <IconButton
              onPress={() => {
                navigation.openDrawer();
              }}
              icon={
                <Icon
                  size="sm"
                  as={<MaterialIcons name="menu" />}
                  color="white"
                />
              }
            />

            <Text color="white" fontSize="20" fontWeight="bold">
              {name}
            </Text>
          </HStack>
          <HStack space="2">
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="favorite" />}
                  size="sm"
                  color="white"
                />
              }
            />
            <IconButton
              onPress={() => setsearchable(!searchable)}
              icon={
                <Icon
                  as={<MaterialIcons name="search" />}
                  color="white"
                  size="sm"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="more-vert" />}
                  size="sm"
                  color="white"
                />
              }
            />
          </HStack>
        </HStack>
        {searchbar}
      </VStack>
    </NativeBaseProvider>
  );
}

import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { ScrollView } from "react-native";

import { NewsData } from "../../../Data";

import NewsList from "./HomeComponents/NewsList";
const News = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          News
        </Text>
      </Box>

      <ScrollView nestedScrollEnabled={true} style={{ height: 400 }}>
        {NewsData.map((news) => (
          <NewsList key={news.id} data={news} />
        ))}
      </ScrollView>
      <Pressable bg="gray.100" padding={3}>
        <Center>
          <Button>View All</Button>
        </Center>
      </Pressable>
    </Box>
  );
};

export default News;

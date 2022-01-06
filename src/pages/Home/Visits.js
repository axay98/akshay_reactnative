import { Box, Button, Center, Image, Pressable, Text } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import { VisitsData } from "../../../Data";
import VisitList from "./HomeComponents/VisitList";

export default Visits = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          Visits
        </Text>
        <Center>
          <Image
            source={{
              uri: "https://i.stack.imgur.com/HILmr.png",
            }}
            alt="Alternate Text"
            size="2xl"
          />
        </Center>
        <ScrollView nestedScrollEnabled={true} style={{ height: 500 }}>
          {VisitsData.map((visit) => (
            <VisitList key={visit.id} data={visit} />
          ))}
        </ScrollView>
        <Pressable bg="gray.100" padding={3}>
          <Center>
            <Button>View All</Button>
          </Center>
        </Pressable>
      </Box>
    </Box>
  );
};

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
import { CasesData } from "../../../../Data";
import CaseList from "./CaseList";

const Cases = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          Tasks
        </Text>
      </Box>

      <ScrollView nestedScrollEnabled={true} style={{ height: 400 }}>
        {CasesData.map((cases) => (
          <CaseList key={cases.id} data={cases} />
        ))}
      </ScrollView>
    </Box>
  );
};
export default Cases;

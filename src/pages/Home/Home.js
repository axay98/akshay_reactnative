import {
  Box,
  Center,
  HStack,
  NativeBaseProvider,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { ScrollView } from "react-native";

import AppBar from "../../../components/AppBar";
import AccountAlerts from "./AccountAlerts";
import News from "./News";
import Performance from "./Performance";
import Visits from "./Visits";

const Home = () => {
  return (
    <Box bg="rgba(135,152,173, 0.1)">
      <HStack>
        <AppBar name="Home" />
      </HStack>
      <HStack>
        <ScrollView>
          <VStack>
            <Performance />
            <AccountAlerts />
            <News />
            <Visits />
          </VStack>
        </ScrollView>
      </HStack>
    </Box>
  );
};

export default Home;

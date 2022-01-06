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
import CircularProgress from "../../../components/CircularProgress";
import { AlertsData } from "../../../Data";
import AccountAlertList from "./HomeComponents/AccountAlertList";
const AccountAlerts = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          Account Alert
        </Text>

        <Center>
          <HStack>
            <Box padding={2} bg="white">
              <CircularProgress percent="70" />
            </Box>
            <Box padding={2} bg="white">
              <CircularProgress percent="80" />
            </Box>
            <Box padding={2} bg="white">
              <CircularProgress percent="70" />
            </Box>
          </HStack>
        </Center>
      </Box>
      <Divider />

      <ScrollView nestedScrollEnabled={true} style={{ height: 300 }}>
        {AlertsData.map((alert) => (
          <AccountAlertList key={alert.id} data={alert} />
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

export default AccountAlerts;

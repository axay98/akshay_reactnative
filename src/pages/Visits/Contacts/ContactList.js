import React from "react";
import { ScrollView } from "react-native";
import {
  Accordion,
  Box,
  NativeBaseProvider,
  Center,
  VStack,
  HStack,
  Text,
} from "native-base";

import { Linking } from "react-native";

export default function ContactList({ data }) {
  return (
    <Box m={3}>
      <Accordion>
        <Accordion.Item>
          <Accordion.Summary>
            <VStack>
              <HStack>
                <Text padding={3}>{data.name}</Text>
                <Text padding={3}>{data.accounts}</Text>
                <Text padding={3}>{data.role}</Text>
              </HStack>
              <HStack>
                <Text
                  onPress={() => Linking.openURL("mailto:" + data.email)}
                  padding={3}
                >
                  {data.email}
                </Text>
                <Text
                  onPress={() => {
                    Linking.openURL("tel:91" + data.phoneno);
                  }}
                  padding={3}
                >
                  {data.phoneno}
                </Text>
              </HStack>
            </VStack>
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>{data.note}</Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}

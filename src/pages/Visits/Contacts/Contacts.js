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
import { ContactsData } from "../../../../Data";

import ContactList from "./ContactList";

const Contacts = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          Contacts
        </Text>
      </Box>

      <ScrollView nestedScrollEnabled={true} style={{ height: 400 }}>
        {ContactsData.map((contact) => (
          <ContactList key={contact.id} data={contact} />
        ))}
      </ScrollView>
    </Box>
  );
};
export default Contacts;

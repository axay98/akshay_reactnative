import React, { useState } from "react";
import {
  ListItem,
  Container,
  Content,
  Header,
  Text,
  Radio,
  Box,
  VStack,
  HStack,
} from "native-base";
import { RadioButton } from "react-native";
const RadioButtonTest = () => {
  const [checked, setChecked] = useState("first");
  return (
    <VStack>
      <Text>text</Text>
      <Box>
        <HStack>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Yes</Text>
        </HStack>
      </Box>

      <Box>
        <HStack>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>No</Text>
        </HStack>
      </Box>
    </VStack>
  );
};
export default RadioButtonTest;

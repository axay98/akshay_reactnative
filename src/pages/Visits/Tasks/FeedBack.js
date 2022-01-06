import {
  Box,
  Divider,
  VStack,
  ListItem,
  Container,
  Content,
  Header,
  Text,
  Radio,
} from "native-base";
import React from "react";
import RadioButtonTest from "../../../../components/RadioButtonTest";

const FeedBack = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <RadioButtonTest text="1. Is This a Priority Account?" />
      <Divider />
      <RadioButtonTest text="2. Are Products properly arranged in the store?" />
      <Divider />
      <RadioButtonTest text="3. Are you Satisfied with the Product?" />
      <Divider />
      <RadioButtonTest text="4. Have you got required Help" />
      {/* <Divider /> */}
    </Box>
  );
};
export default FeedBack;

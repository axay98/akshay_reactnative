import { Box, Divider, HStack, Text, VStack } from "native-base";
import React from "react";
export default function NewsList({ data }) {
  return (
    <Box>
      <VStack>
        <Text padding={2}>{data.title}</Text>
        <Text padding={2}>{data.date}</Text>
        <Text padding={2}>Assigned to {data.subject}</Text>
      </VStack>
      <Divider />
    </Box>
  );
}

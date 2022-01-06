import { Box, Divider, HStack, Text, VStack } from "native-base";
import React from "react";
export default function AccountAlertList({ data }) {
  return (
    <Box>
      <VStack>
        <HStack>
          <Text padding={2}>{data.company}</Text>
          <Text padding={2}> | </Text>
          <Text padding={2}>{data.location}</Text>
        </HStack>
        <Text padding={2}>{data.issue}</Text>
        <Text padding={2}>
          Assigned to {data.assignedto} on {data.date}
        </Text>
      </VStack>
      <Divider />
    </Box>
  );
}

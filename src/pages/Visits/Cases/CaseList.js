import { Box, Divider, HStack, Text, VStack } from "native-base";
import React from "react";
export default function CaseList({ data }) {
  return (
    <Box>
      <VStack>
        <HStack>
          <Text padding={2}>ID# :{data.id}</Text>
          <Text padding={2}>{data.status}</Text>
        </HStack>
      </VStack>
      <Box>
        <Text>Open Date:{data.openDate}</Text>
        <Text>Due Date:{data.dueDate}</Text>
        <Text>Assigned To: {data.AssignedTo}</Text>
        <Text>Case Type: {data.type}</Text>
      </Box>

      <Divider />
    </Box>
  );
}

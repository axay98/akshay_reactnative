import { Box, Center, Container, HStack, Text } from "native-base";
import React from "react";
import CircularProgress from "../../../components/CircularProgress";

const Performance = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <HStack>
          <Text padding={1} fontWeight="bold">
            Performance
          </Text>
          <Text padding={1} fontSize={12} color="gray.300">
            325 Stores | 100 markets, 225 Convenience outlets
          </Text>
        </HStack>
      </Box>
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
          <Box padding={2} bg="white">
            <CircularProgress percent="70" />
          </Box>
        </HStack>
      </Center>
    </Box>
  );
};

export default Performance;

import { Box, Center, HStack, Image, Text, VStack } from "native-base";
import React from "react";

const Visits = () => {
  return (
    <Box bg="rgba(135,152,173, 0.1)">
      <Box bg="white">
        <Box alignItems="center" justifyContent="center" margin={2}>
          <HStack>
            <Box marginRight={10}>
              <Center>
                <Image
                  source={{
                    uri: "https://i.stack.imgur.com/HILmr.png",
                  }}
                  alt="Alternate Text"
                  size="sm"
                />
              </Center>
            </Box>
            <Box>
              <VStack>
                <Text>Planned . HighPriority</Text>
                <Text>MERCHANDISING VISIT</Text>
                <Text>12 Dec 2021</Text>
                <Text>Giant Eagle Park</Text>
                <Text>123 park avenue</Text>
                <Text>Brooklyn 21232</Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </Box>

      <Box>
        <Center>
          <HStack></HStack>
        </Center>
      </Box>
    </Box>
  );
};

export default Visits;

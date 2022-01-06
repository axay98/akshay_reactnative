import { Box, Divider, HStack, Icon, Text, VStack } from "native-base";
import React from "react";
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
export default function VisitList({ data }) {
  return (
    <Box alignItems="center" justifyContent="center">
      <HStack>
        <Box alignItems="center" justifyContent="center">
          <Icon
            as={Entypo}
            name="back-in-time"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          />
        </Box>
        <Box padding={3} alignItems="center" justifyContent="center">
          <VStack>
            <Text padding={2}>
              {data.status} . {data.priority}
            </Text>
            <Text padding={2}>{data.company}</Text>
            <Text padding={2}>{data.location}</Text>
          </VStack>
        </Box>
        <Box alignItems="center" justifyContent="center">
          <HStack>
            <Icon
              as={Entypo}
              name="location-pin"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            />
            <Icon
              as={Entypo}
              name="trash"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            />
          </HStack>
        </Box>
      </HStack>

      <Divider />
    </Box>
  );
}

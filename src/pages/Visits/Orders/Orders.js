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
import { OrdersData } from "../../../../Data";
import OrderList from "./OrderList";

const Orders = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          Tasks
        </Text>
      </Box>

      <ScrollView nestedScrollEnabled={true} style={{ height: 400 }}>
        {OrdersData.map((order) => (
          <OrderList key={order.orderid} data={order} />
        ))}
      </ScrollView>
    </Box>
  );
};
export default Orders;

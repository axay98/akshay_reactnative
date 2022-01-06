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
import { OrderDetail, OrdersData } from "../../../../Data";
import OrderDetailList from "./OrderDetailList";

const OrderDetails = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <VStack>
          <HStack>
            <Pressable onPress={() => setShowModal(true)}>
              <Text padding={2}>ORDER# :{OrderDetail[0].orderid}</Text>
            </Pressable>
            <Text padding={2}>{OrderDetail[0].status}</Text>
          </HStack>
        </VStack>
        <Box>
          <Text padding={2}>Delivery Date: {OrderDetail[0].deliveryDate}</Text>
          <Text padding={2}>Quantity: {OrderDetail[0].quantity}</Text>
          <Text padding={2}>Total: {OrderDetail[0].total}</Text>
        </Box>
      </Box>
      <Divider />

      <ScrollView nestedScrollEnabled={true} style={{ height: 400 }}>
        {OrderDetail[0].Products.map((order) => (
          <OrderDetailList key={order.id} data={order} />
        ))}
      </ScrollView>
    </Box>
  );
};
export default OrderDetails;

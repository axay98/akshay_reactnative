import {
  Box,
  Divider,
  FormControl,
  HStack,
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import OrderDetails from "./OrderDetails";
export default function OrderList({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Box>
      <VStack>
        <HStack>
          <Pressable onPress={() => setShowModal(true)}>
            <Text padding={2}>ORDER# :{data.orderid}</Text>
          </Pressable>
          <Text padding={2}>{data.status}</Text>
        </HStack>
      </VStack>
      <Box>
        <Text>{data.date}</Text>
        <Text>Quantity: {data.quantity}</Text>
        <Text>Total: {data.total}</Text>
        <Text>Estimated Delivery on {data.estimatedDelivery}</Text>
      </Box>

      <Divider />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="600px" size="full">
          <Modal.CloseButton />
          <Modal.Header>Order Details</Modal.Header>
          <Modal.Body>
            <OrderDetails />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

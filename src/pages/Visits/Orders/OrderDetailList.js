import {
  Box,
  Divider,
  FormControl,
  HStack,
  Image,
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
export default function OrderDetailList({ data }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box padding={1}>
      <VStack>
        <HStack>
          <Pressable onPress={() => setShowModal(true)}>
            <Image
              source={{
                uri: data.image,
              }}
              alt="Alternate Text"
              size="xs"
            />
          </Pressable>
          <Text padding={2}>{data.name}</Text>
        </HStack>
      </VStack>
      <Box>
        <HStack>
          <Text padding={1}>Units: {data.units}</Text>
          <Text padding={1}>Quantity: {data.quantity}</Text>
          <Text padding={1}>price: {data.unitPrice}</Text>
        </HStack>
      </Box>

      <Divider />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="600px" size="full">
          <Modal.CloseButton />
          <Modal.Header>Edit Note</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Note</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Description</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

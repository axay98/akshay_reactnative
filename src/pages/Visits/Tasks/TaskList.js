import {
  Box,
  Divider,
  HStack,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import FeedBack from "./FeedBack";
import Survey from "./Survey";
export default function TaskList({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Box>
      <HStack>
        <VStack>
          <Pressable onPress={() => setShowModal(true)}>
            <Text padding={2}>{data.task}</Text>
          </Pressable>
          <Text padding={2}>{data.duedate}</Text>
        </VStack>
        <Box>
          <Text>{data.status}</Text>
        </Box>
      </HStack>
      <Divider />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="600px" size="full">
          <Modal.CloseButton />
          <Modal.Header>Feedback</Modal.Header>
          <Modal.Body>
            <Survey />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

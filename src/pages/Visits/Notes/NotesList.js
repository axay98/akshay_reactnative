import {
  Box,
  Divider,
  HStack,
  Text,
  VStack,
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
export default function NotesList({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [noteTitle, setnoteTitle] = useState(data.title);
  const [number, setNumber] = useState(0);

  const [note, setNote] = useState(data.note);
  return (
    <Box>
      <VStack>
        <Pressable onPress={() => setShowModal(true)}>
          <Text padding={2}>{data.title}</Text>
        </Pressable>
        <Text padding={2}>{data.date}</Text>
        <Text padding={2}>{data.note}</Text>
      </VStack>
      <Divider />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Edit Note</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Note</FormControl.Label>
              <Input value={noteTitle} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Description</FormControl.Label>
              <Input multiline value={note} numberOfLines={5} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

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
import { NotesData } from "../../../../Data";
import NotesList from "./NotesList";

const Notes = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          Notes
        </Text>
      </Box>

      <ScrollView nestedScrollEnabled={true} style={{ height: 400 }}>
        {NotesData.map((notes) => (
          <NotesList key={notes.id} data={notes} />
        ))}
      </ScrollView>
    </Box>
  );
};
export default Notes;

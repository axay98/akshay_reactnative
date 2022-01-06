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
import { TasksData } from "../../../../Data";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <Box margin={1} backgroundColor="white">
      <Box>
        <Text padding={1} fontWeight="bold">
          Tasks
        </Text>
      </Box>

      <ScrollView nestedScrollEnabled={true} style={{ height: 400 }}>
        {TasksData.map((tasks) => (
          <TaskList key={tasks.id} data={tasks} />
        ))}
      </ScrollView>
    </Box>
  );
};
export default Tasks;

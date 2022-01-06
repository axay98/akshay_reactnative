import React from "react";
import {
  CircularProgress,
  Heading,
  NativeBaseProvider,
  Center,
} from "native-base";

export default function CircularProgress1({ percent }) {
  return (
    <Center>
      <CircularProgress
        value={percent}
        size={77}
        color="red.200"
        _text={{ color: "blue.400" }}
      >
        {percent}%
      </CircularProgress>
    </Center>
  );
}

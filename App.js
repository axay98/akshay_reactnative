// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
// export const theme = extendTheme({ config });
import React from "react";
import {
  HStack,
  NativeBaseProvider,
  Center,
  VStack,
  Container,
  ScrollView,
  Text,
} from "native-base";

import MyDrawer from "./components/MyDrawer";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

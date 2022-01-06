import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Container,
} from "native-base";
import AppBar from "./AppBar";
import Home from "../src/pages/Home/Home";
import Visits from "../src/pages/Visits/Visits";
import TabBar from "../src/pages/Visits/TabBar";
import Tasks from "../src/pages/Visits/Tasks/Tasks";
import Cases from "../src/pages/Visits/Cases/Cases";
import Orders from "../src/pages/Visits/Orders/Orders";
import Notes from "../src/pages/Visits/Notes/Notes";
import Contacts from "../src/pages/Visits/Contacts/Contacts";
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <Center>
      <HStack>
        <AppBar name={props.route.name} />
      </HStack>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={index}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <Text
                  fontWeight="500"
                  color={
                    index === props.state.index ? "primary.500" : "gray.700"
                  }
                >
                  {name}
                </Text>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
export default function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Visits" component={TabBar} />
        <Drawer.Screen name="Notes" component={Notes} />
        <Drawer.Screen name="Cases" component={Cases} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Contacts" component={Contacts} />
      </Drawer.Navigator>
    </Box>
  );
}

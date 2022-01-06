import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NativeBaseProvider, Box, Text, Center, HStack } from "native-base";
import Constants from "expo-constants";
import AppBar from "../../../components/AppBar";
import Visits from "./Visits";
import Orders from "./Orders/Orders";
import Notes from "./Notes/Notes";
import Tasks from "./Tasks/Tasks";
import Cases from "./Cases/Cases";
import Contacts from "./Contacts/Contacts";

const FirstRoute = () => <Orders />;

const SecondRoute = () => <Notes />;

const ThirdRoute = () => <Tasks />;

const FourthRoute = () => <Cases />;
const FifthRoute = () => <Contacts />;

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
});

export default function TabBar() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Orders" },
    { key: "second", title: "Notes" },
    { key: "third", title: "Tasks" },
    { key: "fourth", title: "Cases" },
    { key: "fifth", title: "Contact" },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? "#1f2937" : "#a1a1aa";
          const borderColor = index === i ? "cyan.500" : "coolGray.200";

          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <HStack>
        <AppBar name="Visits" />
      </HStack>
      <Visits />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
      />
    </NativeBaseProvider>
  );
}

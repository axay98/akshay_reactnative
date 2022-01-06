import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { SurveyData } from "../../../../Data";
const Survey = () => {
  const [checked, setChecked] = useState("first");
  const [arranged, setArranged] = useState("first");
  const [satisfied, setSatified] = useState("first");
  const [help, setHelp] = useState("first");
  const [featurebrands, setfeaturebrands] = useState("");
  const [comments, setComments] = useState("");
  const [number, setnumber] = useState(0);
  function addSurvey() {
    let n = SurveyData.length;
    let data = {
      id: n,
      isPriority: checked,
      isarranged: arranged,
      featurebrand: featurebrands,
      satisfied: satisfied,
      help: help,
      comments: comments,
    };
    console.log("test");
    SurveyData.push(data);
    Alert.alert(
      "Hey There!",
      "Two button alert dialog",
      [
        { text: "Yes", onPress: () => console.log("Yes button clicked") },
        {
          text: "No",
          onPress: () => console.log("No button clicked"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
    setnumber(number + 1);
  }
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{
        backgroundColor: "white",
        margin: 10,

        borderRadius: 15,
      }}
    >
      <View>
        <Text style={{ padding: 5, marginTop: 3, marginRight: 65 }}>
          1. Is this a Priority Account?
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            padding: 5,
          }}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={{ marginTop: 8 }}>Yes</Text>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={{ marginTop: 8 }}>No</Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(135,152,173,0.2)",
            height: 0.7,
            margin: 20,
          }}
        ></View>
      </View>
      <View>
        <View style={{ padding: 5 }}>
          <Text style={{ marginTop: 3 }}>
            2. Are Products properly arranged in the store?
          </Text>
          <Text style={{ paddingLeft: 15 }}></Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <RadioButton
            value="first"
            status={arranged === "first" ? "checked" : "unchecked"}
            onPress={() => setArranged("first")}
          />
          <Text style={{ paddingTop: 8 }}>Yes</Text>
          <RadioButton
            value="second"
            status={arranged === "second" ? "checked" : "unchecked"}
            onPress={() => setArranged("second")}
          />
          <Text style={{ paddingTop: 8 }}>No</Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(135,152,173,0.2)",
            height: 0.7,
            marginLeft: 20,
            marginRight: 20,
          }}
        ></View>
      </View>
      <View style={{ padding: 10 }}>
        <Text>3. Does this account allow feature brands?</Text>
        <TextInput
          value={featurebrands}
          onChangeText={(value) => {
            setfeaturebrands(value);
          }}
          style={{
            margin: 12,
            borderWidth: 1,
            fontWeight: "bold",
            width: 300,
            borderRadius: 10,
            padding: 10,
          }}
        />
        <View
          style={{
            backgroundColor: "rgba(135,152,173,0.2)",
            height: 0.7,
            marginLeft: 20,
            marginRight: 20,
          }}
        ></View>
      </View>
      <View>
        <Text style={{ padding: 5, marginTop: 3, marginRight: 5 }}>
          4. Are you satisfied with the products?
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            padding: 5,
          }}
        >
          <RadioButton
            value="first"
            status={satisfied === "first" ? "checked" : "unchecked"}
            onPress={() => setSatified("first")}
          />
          <Text style={{ paddingTop: 8 }}>Yes</Text>
          <RadioButton
            value="second"
            status={satisfied === "second" ? "checked" : "unchecked"}
            onPress={() => setSatified("second")}
          />
          <Text style={{ paddingTop: 8 }}>No</Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(135,152,173,0.2)",
            height: 0.7,
            marginLeft: 20,
            marginRight: 20,
          }}
        ></View>
      </View>
      <View>
        <Text style={{ padding: 5, marginTop: 3, marginRight: 30 }}>
          5. Have you got the required Help?
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            padding: 5,
          }}
        >
          <RadioButton
            value="first"
            status={help === "first" ? "checked" : "unchecked"}
            onPress={() => setHelp("first")}
          />
          <Text style={{ paddingTop: 8 }}>Yes</Text>
          <RadioButton
            value="second"
            status={help === "second" ? "checked" : "unchecked"}
            onPress={() => setHelp("second")}
          />
          <Text style={{ paddingTop: 8 }}>No</Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(135,152,173,0.2)",
            height: 0.7,
            marginLeft: 20,
            marginRight: 20,
          }}
        ></View>
      </View>
      <View style={{ padding: 10 }}>
        <Text>6. Any Other Comments?</Text>
        <TextInput
          value={comments}
          onChangeText={(value) => {
            setComments(value);
          }}
          style={{
            margin: 12,
            borderWidth: 1,
            fontWeight: "bold",
            width: 300,
            borderRadius: 10,
            padding: 10,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          addSurvey();
        }}
        style={{
          borderRadius: 20,
          padding: 10,
          elevation: 2,
          backgroundColor: "#2196F3",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Send
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Survey;

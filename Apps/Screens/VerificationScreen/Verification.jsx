import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TitleText from "../../Components/TitleText";
import SubmitButton from "../../Components/SubmitButton";

const Verification = () => {
  return (
    <LinearGradient
      colors={["#31A05F", "#8CCF4D"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 2 }}
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <TitleText title={"Verification Code"} />
      <Text style={Styles.text}>
        Please type the verification code sent to trytemp11@gmail.com
      </Text>
      <View style={Styles.textInput}>
        <TextInput style={Styles.box} />
        <TextInput style={Styles.box} />
        <TextInput style={Styles.box} />
        <TextInput style={Styles.box} />
      </View>
      <SubmitButton title={"Submit"} buttonStyle={{ marginTop: "55%" }} />
      <Text style={Styles.subtext}>
        I don’t recevie a code! <Text style={Styles.link}>Please resend</Text>
      </Text>
    </LinearGradient>
  );
};
const Styles = StyleSheet.create({
  text: {
    top: "13%",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "outfit",
  },
  textInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    top: "40%",
    gap: 20,
  },
  box: {
    backgroundColor: "#fff",
    height: 65,
    width: 65,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 25,
  },
  subtext: {
    marginTop: "5%",
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "outfit",
  },
  link: {
    color: "rgba(255, 169, 0, 1)",
  },
});

export default Verification;

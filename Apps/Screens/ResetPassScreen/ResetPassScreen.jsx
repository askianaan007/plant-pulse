import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TitleText from "../../Components/TitleText";
import InputText from "../../Components/InputText";
import SubmitButton from "../../Components/SubmitButton";

const ResetPass = () => {
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
      <TitleText title={"Reset Password"} />
      <Text style={Styles.text}>
        Please enter your email address to request a password reset
      </Text>
      <InputText />
      <SubmitButton title={"Reset"} buttonStyle={{ marginTop: "40%" }} />
    </LinearGradient>
  );
};
const Styles = StyleSheet.create({
  text: {
    top: "15%",
    fontSize: 18,
    color: "#fff",
    fontFamily: "outfit",
  },
});

export default ResetPass;

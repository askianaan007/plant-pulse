import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const InputTexts = ({ title, textStyle }) => {
  return (
    <View style={[styles.textInputSet, textStyle]}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput style={styles.inputBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputSet: {
    top: "15%",
    width: "100%",
    marginBottom: 20,
  },

  inputBox: {
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    width: "90%",
    height: 45,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#fff",
    paddingLeft: 30,
    marginLeft: 20,
  },

  titleText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: "outfit",
  },
});

export default InputTexts;

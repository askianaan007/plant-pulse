import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TitleText = (props) => {
  return (
    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    top: "10%",
    marginBottom: 15,
  },

  welcomeText: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "outfit_large",
    // top: '10%',
  },
});

export default TitleText;

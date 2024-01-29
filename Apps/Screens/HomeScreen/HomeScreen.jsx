import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Welcomepage = () => {
  return (
    <LinearGradient
      colors={["#044D3A", "#8FBE4E"]}
      style={styles.linearGradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 2 }}
    >
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.UnderBody}>
        <Text style={styles.bottomText}>THE PLANT HEALTH NOTIFIER</Text>
      </View>
      <Image
        source={require("../../../assets/Images/logo.png")}
        style={styles.image}
        resizeMode="stretch"
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  UnderBody: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    marginTop: "90%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  welcomeText: {
    color: "#fff",
    fontSize: 35,
    top: "10%",
    fontFamily: "outfit_large",
  },
  image: {
    position: "absolute",
    zIndex: 1,
    width: "50%",
    height: "40%",
  },

  bottomText: {
    fontSize: 16,
    marginBottom: "15%",
    color: "#214530",
    letterSpacing: 0.32,
    fontFamily: "outfit",
  },
});

export default Welcomepage;

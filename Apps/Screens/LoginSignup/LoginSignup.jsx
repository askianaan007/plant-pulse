import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SubmitButton from "../../Components/SubmitButton";
import TitleText from "../../Components/TitleText";

const LoginOrSignup = () => {
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
      <View style={styles.picture}>
        <Image
          source={require("../../../assets/Images/pic1.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: "100%",
          padding: 30,
        }}
      >
        <TitleText title={"Hello!"} />
        <Text style={styles.subText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </View>
      <View style={{ marginTop: "10%" }}>
        <SubmitButton title={"Signin"} />
        <SubmitButton title={"Login"} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  picture: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 800,
    width: 650,
    flex: 1,
  },

  titleText: {
    color: "#fff",
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "300",
    fontFamily: "outfit",
  },

  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FBFBFB",
    backgroundColor: "#214530",
    paddingVertical: 10,
    paddingHorizontal: 100,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FBFBFB",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default LoginOrSignup;

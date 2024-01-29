import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TitleText from "../../Components/TitleText";
import InputTexts from "../../Components/InputText";
import SubmitButton from "../../Components/SubmitButton";

const SignupPage = () => {
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
      <TitleText title={"Signup"} />
      <View style={styles.textInputSet}>
        <InputTexts title={"First name"} />
        <InputTexts title={"Email"} />
        <InputTexts title={"Password"} />
        <Text style={{ left: "60%", top: "13%", fontFamily: "outfit" }}>
          Forgot password
        </Text>
      </View>
      <View style={{ top: "6%" }}>
        <SubmitButton title={"Signup"} style={styles.InputTexts} />
      </View>
      <Text style={styles.subtext}>Already have an account? Login</Text>
      <View style={styles.signin}>
        <View style={styles.line}></View>
        <Text style={styles.subtext2}>sign in with</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.social}>
        <TouchableOpacity style={styles.box}>
          <Image
            source={require("../../../assets/Images/google.png")}
            style={styles.image}
            resizeMode="stretch"
          />
          <Text style={{ fontFamily: "outfit" }}> Google </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Image
            source={require("../../../assets/Images/Facebook_Logo_2023.png")}
            style={styles.image2}
            resizeMode="stretch"
          />
          <Text style={{ fontFamily: "outfit" }}> Facebook</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textInputSet: {
    top: "5%",
    width: "100%",
    height: "50%",
  },
  subtext: {
    marginTop: "20%",
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "outfit",
  },

  line: {
    height: 1,
    width: 84,
    backgroundColor: "#FFFFFF",
  },
  signin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
    width: "100%",
    height: "10%",
  },
  subtext2: {
    fontSize: 16,
    color: "#FFFFFF",
    marginHorizontal: "5%",
    fontFamily: "outfit",
  },

  social: {
    flexDirection: "row",
    gap: 30,
    alignContent: "center",
    justifyContent: "center",
  },

  box: {
    width: 140,
    backgroundColor: "#FFFFFF",
    height: 54,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  image: {
    height: 45,
    width: 45,
    marginLeft: 10,
  },
  image2: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
});

export default SignupPage;

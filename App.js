import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Apps/Screens/HomeScreen/HomeScreen";
import LoginPage from "./Apps/Screens/LoginScreen/LoginScreen";
import ResetPass from "./Apps/Screens/ResetPassScreen/ResetPassScreen";
import SignupPage from "./Apps/Screens/SignupScreen/SignupScreen";
import Verification from "./Apps/Screens/VerificationScreen/Verification";
import { useFonts } from "expo-font";
import LoginOrSignup from "./Apps/Screens/LoginSignup/LoginSignup";

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/Fonts/Outfit-Regular.ttf"),
    outfit_medium: require("./assets/Fonts/Outfit-Medium.ttf"),
    outfit_large: require("./assets/Fonts/Outfit-Bold.ttf"),
  });
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <LoginPage /> */}
      {/* <ResetPass /> */}
      {/* <SignupPage /> */}
      {/* <Verification /> */}
      <LoginOrSignup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 30,
    fontFamily: "outfit",
  },
});

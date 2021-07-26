import React from "react";
import { Button } from "native-base";
import { StyleSheet, View } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View style={styles.titleView}>
      <Button onPress={() => navigation.navigate("Signin")}>Signin</Button>
      <Button onPress={() => navigation.navigate("Signup")}>Signup</Button>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  titleView: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
});

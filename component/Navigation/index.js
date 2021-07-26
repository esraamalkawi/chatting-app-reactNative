import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "grey",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};
export default StackNavigator;

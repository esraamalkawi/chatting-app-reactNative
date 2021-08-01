import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import ChatList from "../Chat/ChatList";
import MessageList from "../Message/MessageList";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerStyle: {
          backgroundColor: "grey",
        },
      }}
    >
      <Screen name="ChatList" component={ChatList} />
      <Screen
        name="MessageList"
        component={MessageList}
        // options={({ navigation, chat }) => ({

        //   // headerRight: () => <CartButton navigation={navigation} />,
        // })}
      />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};
export default StackNavigator;

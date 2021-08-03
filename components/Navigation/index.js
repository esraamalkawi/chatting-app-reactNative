import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import ChatList from "../Chat/ChatList";
import MessageList from "../Message/MessageList";
import UserList from "../Chat/UserList";
import CreateChat from "../Chat/CreateChat";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#b2b8b8",
        },
      }}
    >
      <Screen name="ChatList" component={ChatList} />
      <Screen
        name="MessageList"
        component={MessageList}
        options={({ navigation, route }) => ({
          title: route.params.chat.name,
          // title: route.params.chat.image,
        })}
      />
      <Screen name="UserList" component={UserList} />
      <Screen name="CreateChat" component={CreateChat} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};
export default StackNavigator;

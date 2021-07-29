import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./store/index";

import RootNavigator from "./components/Navigation/index";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

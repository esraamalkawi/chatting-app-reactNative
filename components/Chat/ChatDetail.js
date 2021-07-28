import React from "react";
import { Center, Image } from "native-base";

import { Text, StyleSheet } from "react-native";
import MessageList from "../Message/MessageList";

const ChatDetail = ({ navigation, route }) => {
  const { chat } = route.params;
  return (
    <>
      <Center flex={1}>
        <Text>{chat.name}</Text>
        <Image style={styles.image} source={{ uri: chat.image }}></Image>
      </Center>
      <MessageList navigation={navigation} messagesIds={chat.message} />
    </>
  );
};
export default ChatDetail;

const styles = StyleSheet.create({
  image: {
    height: "25%",
    width: "25%",
  },
});

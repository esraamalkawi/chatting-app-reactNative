import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { Center, Spinner, List, Box } from "native-base";
import MessageItem from "./MessageItem.js";

import MessageInput from "./MessageInput.js";

const MessageList = ({ navigation, route }) => {
  const { chat } = route.params;
  const messages = useSelector((state) => state.messages.messages);
  const messageLoading = useSelector((state) => state.messages.loading);
  const [myMessage, setMyMessage] = useState([])
  if (messageLoading)
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );

  useEffect(() => {
    const myMessges = messages
      .filter((message) => message.chatId == chat.id)
    setMyMessage(myMessges)
  }, [])

  console.log(myMessage.length);
  const messageList = myMessage.map((_message) => (
    <MessageItem
      key={_message.id}
      navigation={navigation}
      message={_message}
    />
  ));


  return (
    <Center flex={1}>
      <Box w="90%" style={styles.Box}>
        <List style={styles.List}>{messageList}</List>
        <List>
          <MessageInput chatId={chat.id} />
        </List>
      </Box>
    </Center>
  );
};

export default MessageList;
const styles = StyleSheet.create({
  Box: {
    display: "flex",
    flexDirection: "column"
  },
});
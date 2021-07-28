import React from "react";
import { useSelector } from "react-redux";

import { Text } from "react-native";
import { Center, Spinner, List, Box } from "native-base";
import MessageItem from "./MessageItem.js";
import ChatItem from "../Chat/ChatItem";

const MessageList = ({ messagesIds, navigation }) => {
  const messages = useSelector((state) => state.messages.messages);
  const messageLoading = useSelector((state) => state.messages.loading);
  console.log(messagesIds);
  if (messageLoading)
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );
  const chatMessages = messagesIds.map((_message) =>
    messages.find((message) => message.id === _message.id)
  );
  const messageList = chatMessages.map((message) => (
    <MessageItem key={message.id} navigation={navigation} message={message} />
  ));

  return (
    <Center flex={1}>
      <Box w="70%">
        <Text>
          <ChatItem></ChatItem>
        </Text>
        <List>{messageList}</List>
      </Box>
    </Center>
  );
};

export default MessageList;

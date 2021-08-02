import React from "react";
import { useSelector } from "react-redux";

import { Center, Spinner, List, Box } from "native-base";
import MessageItem from "./MessageItem.js";

import MessageInput from "./MessageInput.js";

const MessageList = ({ navigation, route }) => {
  const { chat } = route.params;
  const messages = useSelector((state) => state.messages.messages);
  const messageLoading = useSelector((state) => state.messages.loading);
  if (messageLoading)
    // REVIEW: Move Loading into its own component
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );

  const messageList = messages
    .filter((message) => message.chatId === chat.id)
    .map((_message) => (
      <MessageItem
        key={_message.id}
        navigation={navigation}
        message={_message}
      />
    ));

  return (
    <Center flex={1}>
      <Box w="70%">
        <List>{messageList}</List>
        <List>
          <MessageInput chatId={chat.id} />
        </List>
      </Box>
    </Center>
  );
};

export default MessageList;

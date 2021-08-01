import React from "react";
import { useSelector } from "react-redux";

import { Center, Spinner, List, Box } from "native-base";
import MessageItem from "./MessageItem.js";

const MessageList = ({ navigation, route }) => {
  const { chat } = route.params;
  const messages = useSelector((state) => state.messages.messages);
  const messageLoading = useSelector((state) => state.messages.loading);
  if (messageLoading)
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );

  const messageList = messages
    .filter((message) => message.chatId === chat.id)
    .map((_message) => (
      <MessageItem key={message.id} navigation={navigation} message={message} />
    ));

  return (
    <Center flex={1}>
      <Box w="70%">
        {/* <Text>
          <ChatItem></ChatItem>
        </Text> */}
        <List>{messageList}</List>
      </Box>
    </Center>
  );
};

export default MessageList;

import React from "react";
import { useSelector } from "react-redux";

import { Text } from "react-native";
import { Center, Spinner, List, Box } from "native-base";
import ChatItem from "./ChatItem";

const ChatList = ({ navigation }) => {
  const chats = useSelector((state) => state.chats.chats);
  // console.log("chat list", chats);
  const chatLoading = useSelector((state) => state.chats.loading);
  if (chatLoading)
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );
  console.log(chats);
  const chatList = chats.map((chat) => (
    <ChatItem key={chat.id} navigation={navigation} chat={chat} />
  ));

  return (
    <Center flex={1}>
      <Box w="70%">
        <Text>Chats</Text>

        <List>{chatList}</List>
      </Box>
    </Center>
  );
};

export default ChatList;

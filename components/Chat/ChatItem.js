import React from "react";
import { List } from "native-base";
import DeleteButton from "../Buttons/DeleteButton";
import { View, ScrollView, StyleSheet } from "react-native";

const ChatItem = ({ navigation, chat }) => {
  return (
    <ScrollView>
      <List.Item>{chat?.image}</List.Item>
      <List.Item onPress={() => navigation.navigate("MessageList", { chat })}>
        <DeleteButton chatId={chat.id} />
        {chat?.name}
      </List.Item>
    </ScrollView>
  );
};

export default ChatItem;

import React from "react";
import { List } from "native-base";
import DeleteButton from "../Buttons/DeleteButton";

const ChatItem = ({ navigation, chat }) => {
  console.log("chat item component", chat);
  return (
    <>
      <List.Item>{chat?.image}</List.Item>
      <List.Item onPress={() => navigation.navigate("MessageList", { chat })}>
        {chat?.name}
      </List.Item>
      <DeleteButton chatId={chat.id} />
    </>
  );
};

export default ChatItem;

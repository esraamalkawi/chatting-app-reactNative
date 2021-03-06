import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "native-base";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/actions/messageActions";
import { deleteChat } from "../../store/actions/chatActions";

const DeleteButton = ({ messageId, chatId }) => {
  const dispatch = useDispatch();

  const handelDelete = () => {
    if (messageId) {
      dispatch(deleteMessage(messageId));
    } else dispatch(deleteChat(chatId));
  };
  return (
    <>
      <Icon as={AntDesign} name="delete" color="red" onPress={handelDelete} style={styles.Icon} />
    </>
  );
};
export default DeleteButton;
const styles = StyleSheet.create({
  Icon: {
    fontSize: 20
  },
});
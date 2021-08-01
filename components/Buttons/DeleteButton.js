import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "native-base";

import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/actions/messageActions";

const DeleteButton = ({ messageId }) => {
  const dispatch = useDispatch();
  console.log(messageId);
  const handelDelete = () => {
    dispatch(deleteMessage(messageId));
  };
  return (
    <>
      <Icon as={AntDesign} name="delete" color="red" onPress={handelDelete} />
    </>
  );
};
export default DeleteButton;

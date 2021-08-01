import React from "react";

import { List } from "native-base";
import DeleteButton from "../Buttons/DeleteButton";

const ProductItem = ({ navigation, message }) => {
  return (
    <>
      <List.Item>{message.message}</List.Item>
      <List.Item>{message.timestamp}</List.Item>
      <DeleteButton messageId={message.id} />
    </>
  );
};

export default ProductItem;

import React from "react";
import { Image } from "react-native";
import { List } from "native-base";
import DeleteButton from "../Buttons/DeleteButton";

const ProductItem = ({ message }) => {
  return (
    <>
      <List.Item>
        <DeleteButton messageId={message.id} />
        {message.message}
        {message.timestamp}
        {message.image && (
          <Image
            source={{ uri: message.image }}
            style={{ width: 20, height: 20 }}
          />
        )}
      </List.Item>
    </>
  );
};

export default ProductItem;

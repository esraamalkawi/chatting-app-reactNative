import React from "react";

import { List } from "native-base";
import DeleteButton from "../Buttons/DeleteButton";

const ProductItem = ({ message }) => {
  return (
    < >
      <List.Item >
        <DeleteButton messageId={message.id} />
        {message.message}
        {message.timestamp}
      </List.Item>

    </>
  );
};

export default ProductItem;

import React from "react";

import { List, Button } from "native-base";

const ProductItem = ({ navigation, message }) => {
  return (
    <>
      <List.Item>{message.message}</List.Item>
      <List.Item>{message.timestamp}</List.Item>
    </>
  );
};

export default ProductItem;

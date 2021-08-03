import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";

import { List } from "native-base";
import DeleteButton from "../Buttons/DeleteButton";

const ProductItem = ({ message }) => {
  return (
    <ScrollView>
      <List style={styles.item}>
        <List.Item>
          <DeleteButton messageId={message.id} />
          {message.message}
        </List.Item>
        <List.Item>
          {message.image && (
            <Image
              source={{ uri: message.image }}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
          )}
        </List.Item>
        <List.Item>{message.timestamp}</List.Item>
      </List>
    </ScrollView>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ccd0d0",
  },
});

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../../store/actions/messageActions";

const MessageInput = ({ chatId }) => {
  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [_message, setMessage] = useState({
    message: "",
    name: users?.username,
    received: true,
    timestamp: new Date().toISOString().slice(0, 10),
  });

  const handlePress = () => {
    const newMessage = { ..._message, chatId: chatId };

    dispatch(createMessage(newMessage));
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(message) => setMessage({ ..._message, message })}
        value={_message}
      />
      <Icon
        as={AntDesign}
        name="caretright"
        color="red"
        onPress={handlePress}
      />
    </SafeAreaView>
  );
};

// REVIEW: Move styling into its own file
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MessageInput;

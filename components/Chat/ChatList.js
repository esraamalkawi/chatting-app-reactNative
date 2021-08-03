import React from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { Center, Spinner, List, Box, Icon } from "native-base";
import ChatItem from "./ChatItem";

const ChatList = ({ navigation }) => {
  const chats = useSelector((state) => state.chats.chats);

  const chatLoading = useSelector((state) => state.chats.loading);
  if (chatLoading)
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );

  const chatList = chats.map((chat) => (
    <ChatItem key={chat.id} navigation={navigation} chat={chat} />
  ));

  return (
    <View style={styles.container}>
      <Box w="90%">
        <Text>Chats</Text>
        {/* <Icon
          as={AntDesign}
          name="addusergroup"
          color="red"
          onPress={() => navigation.navigate("CreateChat")}
        /> */}
        <List>{chatList}</List>
      </Box>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

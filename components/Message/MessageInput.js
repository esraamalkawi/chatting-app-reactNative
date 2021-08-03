import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Icon, Input, Image } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../../store/actions/messageActions";
import * as ImagePicker from "expo-image-picker";

const MessageInput = ({ chatId }) => {
  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [_message, setMessage] = useState({
    message: "",
    image: "",
    name: users?.username,
    received: true,
    timestamp: new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImg(result.uri);
    }
  };

  const handlePress = () => {
    const newMessage = {
      ..._message,
      chatId: chatId,
      image: img,
    };

    dispatch(createMessage(newMessage));
  };

  return (
    <SafeAreaView style={styles.Safe}>
      <TextInput
        style={styles.input}
        onChangeText={(message) => setMessage({ ..._message, message })}
        value={_message}
      />
      <Icon
        style={styles.Icon}
        as={AntDesign}
        name="caretright"
        color="red"
        onPress={handlePress}
      />

      <Icon color="red" as={Ionicons} name="attach" onPress={pickImage}></Icon>
      {img && (
        <Image source={{ uri: img }} style={{ width: 200, height: 200 }} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 290,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  Safe: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  Icon: {
    fontSize: 30,
  },
});

export default MessageInput;

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Icon, Input, Image } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import {
  createMessage,
  fetchMessages,
} from "../../store/actions/messageActions";
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
      // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      setMessage({
        ..._message,
        image: { uri: localUri, name: filename, type },
      });
    }
  };

  const handlePress = async () => {
    const newMessage = {
      ..._message,
      chatId: chatId,
    };

    await dispatch(createMessage(newMessage));
    dispatch(fetchMessages());
    setMessage({
      message: "",
      image: "",
      name: users?.username,
      received: true,
      timestamp: new Date().toISOString().slice(0, 10),
    });
    setImg(null);
  };

  useEffect(() => {
    dispatch(fetchMessages());
  }, [_message]);

  return (
    <SafeAreaView style={styles.Safe}>
      <TextInput
        style={styles.input}
        onChangeText={(message) => setMessage({ ..._message, message })}
        value={_message.message}
      />
      <Icon
        style={styles.Icon}
        as={AntDesign}
        name="caretright"
        color="red"
        onPress={handlePress}
      />

      <Icon
        color="red"
        as={Ionicons}
        name="attach"
        onPress={pickImage}
        style={styles.Icon}
      ></Icon>
      {img && (
        <Image source={{ uri: img }} style={{ width: 100, height: 100 }} />
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
    marginBottom: 60,
  },
  Safe: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  Icon: {
    fontSize: 30,
    marginBottom: 50,
  },
});

export default MessageInput;

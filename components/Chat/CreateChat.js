import React, { useEffect, useState } from "react";
import {
  VStack,
  FormControl,
  Input,
  Select,
  CheckIcon,
  Button,
  Image,
  View,
  Platform,
} from "native-base";
import MultiSelect from "react-native-multiple-select";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import UserList from "./UserList";
import { fetchUsers } from "../../store/actions/userActions";
import { createChat } from "../../store/actions/chatActions";

const CreateChat = () => {
  const dispatch = useDispatch();
  const _allUsers = useSelector((state) => state.user.allUsers);

  console.log("create chat here", _allUsers);
  const listOfUsers = _allUsers.map((user) => {
    return <Select.Item value={user.id} label={user.username} />;
  });

  const [users, setUsers] = useState([]);

  const [image, setImage] = useState(null);

  const [newChat, setNewChat] = useState({
    name: "",
    image: "",
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
  useEffect(() => {
    dispatch(fetchUsers());
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
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    dispatch(createChat(newChat, id));
    handleClose();
    setNewChat({
      name: "",
      image: "",
    });
    setId([]);
  };

  return (
    <>
      <VStack width="90%" mx={3}>
        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>
            Chat Name
          </FormControl.Label>
          <Input
            placeholder="Chat Name"
            onChangeText={(value) => setNewChat({ ...newChat, name: value })}
          />
          {/* 
          <MultiSelect
            hideTags
            items={items}
            uniqueKey="id"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={(text) => console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: "#CCC" }}
            submitButtonColor="#48d22b"
            submitButtonText="Submit"
          /> */}

          <Select
            selectedValue={users}
            minWidth={200}
            accessibilityLabel="Select users"
            placeholder="Select users"
            onValueChange={(users) => setUsers([...users, users.id])}
            _selectedItem={{
              bg: "cyan.600",
              endIcon: <CheckIcon size={4} />,
            }}
          >
            {listOfUsers}
          </Select>
          <VStack
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Button
              style={{
                height: 46,
                width: 370,
                marginTop: 200,
              }}
              onPress={pickImage}
            >
              Pick an image from camera roll
            </Button>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </VStack>
        </FormControl>
      </VStack>
      <VStack space={2}>
        <Button style={{ marginTop: 250 }} onPress={handleSubmit}>
          start chat
        </Button>
      </VStack>
    </>
  );
};
export default CreateChat;

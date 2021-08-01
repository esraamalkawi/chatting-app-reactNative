import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/actions/userActions";
import { Text } from "react-native";
import { Center, Box } from "native-base";

const UserList = () => {
  const dispatch = useDispatch();

  const _allUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <Center flex={1}>
      <Box w="70%">
        <Text>{_allUsers()}</Text>
      </Box>
    </Center>
  );
};
export default UserList;

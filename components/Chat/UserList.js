import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Text } from "react-native";
import { Center, List, Box } from "native-base";
import UserItem from "./UserItem";
import { fetchUsers } from "../../store/actions/userActions";

const UserList = () => {
  const _allUsers = useSelector((state) => state.user.allUsers);

  const userList = _allUsers.map((user) => (
    <UserItem key={user.id} user={user} />
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Center flex={1}>
      <Box w="70%">
        <Text>Users</Text>

        <List>{userList}</List>
      </Box>
    </Center>
  );
};
export default UserList;

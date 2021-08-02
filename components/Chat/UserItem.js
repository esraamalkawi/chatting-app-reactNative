import React from "react";
import { List } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "native-base";

const UserItem = ({ user }) => {
  return (
    <>
      <List.Item>
        {user?.username}
        <Icon as={AntDesign} name="plus" color="red" />
      </List.Item>
    </>
  );
};

export default UserItem;

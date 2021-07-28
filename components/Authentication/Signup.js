import React, { useState } from "react";

import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import { createUser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(createUser(user, navigation));
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} p={2} w="90%" mx="auto">
        <Heading color="muted.400" size="xs">
          Sign up to start chatting!
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              username
            </FormControl.Label>
            <Input
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              mobile
            </FormControl.Label>
            <Input onChangeText={(mobile) => setUser({ ...user, mobile })} />
          </FormControl>

          <FormControl mb={5}>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            <Input
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <VStack space={2}>
            <Button onPress={handleSubmit}>Sign up</Button>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};
export default Signup;

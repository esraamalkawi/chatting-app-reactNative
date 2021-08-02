import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";
import decode from "jwt-decode";
import * as actionTypes from "./types";

export const createUser = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      dispatch(
        {
          type: actionTypes.SET_USER,
          payload: res.data,
        },
        navigation.navigate("ChatList")
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      await AsyncStorage.setItem("myToken", res.data.token);
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      dispatch(
        {
          type: actionTypes.SET_USER,
          payload: decode(res.data.token),
        },
        navigation.navigate("ChatList")
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/fetch");
      instance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

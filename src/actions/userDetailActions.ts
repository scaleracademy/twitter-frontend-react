import { Dispatch } from "redux";

import { RootReducerType } from "Types/reducer/rootReducerType";
import { UserDetailType } from "Types/reducer/userDetailReducerType";
import { UserDetailEnums } from "Enums/actionReducerEnums/userDetailEnum";

const {
  USER_DETAIL_FETCH_START,
  USER_DETAIL_FETCH_SUCCESS,
  USER_DETAIL_FETCH_FAIL,
} = UserDetailEnums;

export const userDetailFetchStart = () => {
  return {
    type: USER_DETAIL_FETCH_START,
  };
};

export const userDetailFetchSuccess = (payload: UserDetailType) => {
  return {
    type: USER_DETAIL_FETCH_SUCCESS,
    payload,
  };
};

export const userDetailFetchFail = (payload: string) => {
  return {
    type: USER_DETAIL_FETCH_FAIL,
    payload,
  };
};

export const getUserDetails =
  () => async (dispatch: Dispatch, getState: () => RootReducerType) => {
    try {
      dispatch(userDetailFetchStart());

      // API call

      const userData: UserDetailType = {
        username: "moo",
        firstName: "Moo",
        lastName: "Moo",
        profileImage:
          "https://www.nicepng.com/png/full/144-1445273_freezing-moo-cow-moo-clip-art.png",
        email: "moo@moo.com",
      };
      dispatch(userDetailFetchSuccess(userData));
    } catch (error) {
      userDetailFetchFail(error as string);
    }
  };

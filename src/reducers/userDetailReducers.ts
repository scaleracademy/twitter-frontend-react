import Immutable, { ImmutableObject } from "seamless-immutable";

import { ActionType } from "Types/reducer/actionReducerType";
import { UserDetailReducerType } from "Types/reducer/userDetailReducerType";
import { UserDetailEnums } from "Enums/actionReducerEnums/userDetailEnum";

const initialState: UserDetailReducerType = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  profileImage: "",
  isLoading: false,
  error: "",
};

const {
  USER_DETAIL_FETCH_START,
  USER_DETAIL_FETCH_SUCCESS,
  USER_DETAIL_FETCH_FAIL,
} = UserDetailEnums;

const userDetailReducers = (
  state: UserDetailReducerType = initialState,
  { type, payload }: ActionType
): ImmutableObject<UserDetailReducerType> => {
  const ImmutableState = Immutable(state);

  switch (type) {
    case USER_DETAIL_FETCH_START: {
      return ImmutableState.merge(
        { isLoading: true, error: "" },
        { deep: true }
      );
    }
    case USER_DETAIL_FETCH_SUCCESS: {
      return ImmutableState.merge(
        { ...payload, isLoading: false },
        { deep: true }
      );
    }
    case USER_DETAIL_FETCH_FAIL: {
      return ImmutableState.merge({ error: payload, isLoading: false });
    }
    default: {
      return Immutable(state);
    }
  }
};

export default userDetailReducers;

import * as actions from "../actionTypes/loginActionTypes";

export interface LoginState {
  token: string;
}

const initialState: LoginState = {
  token: ""
};

export default function loginReducer(
  state: LoginState = initialState,
  action: actions.LoginAction
): LoginState {
  switch (action.type) {
    case actions.SET_LOGIN:
    case actions.GET_LOGIN_SUCCESS:
      return {
        token: action.token
      };
    default:
      return state;
  }
}

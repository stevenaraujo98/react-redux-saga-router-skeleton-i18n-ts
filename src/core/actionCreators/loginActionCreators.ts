import * as actions from "../actionTypes/loginActionTypes";

export function setLogin(token: string): actions.SetLoginAction {
  return {
    type: actions.SET_LOGIN,
    token
  };
}

export function getLogin(
  user: string,
  password: string
): actions.GetLoginAction {
  return {
    type: actions.GET_LOGIN,
    user,
    password
  };
}

export function getLoginRequest(): actions.GetLoginRequestAction {
  return {
    type: actions.GET_LOGIN_REQUEST
  };
}

export function getLoginSuccess(
  token: string
): actions.GetLoginSuccessAction {
  return {
    type: actions.GET_LOGIN_SUCCESS,
    token
  };
}

export function getLoginFailure(
  error: Error | string
): actions.GetLoginFailureAction {
  return {
    type: actions.GET_LOGIN_FAILURE,
    error
  };
}

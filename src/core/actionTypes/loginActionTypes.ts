export const SET_LOGIN = "loginActionTypes/SET_LOGIN";
export interface SetLoginAction {
  type: typeof SET_LOGIN;
  token: string;
}

export const GET_LOGIN = "loginActionTypes/GET_LOGIN";
export interface GetLoginAction {
  type: typeof GET_LOGIN;
  user: string;
  password: string;
}

export const GET_LOGIN_REQUEST = "loginActionTypes/GET_LOGIN_REQUEST";
export interface GetLoginRequestAction {
  type: typeof GET_LOGIN_REQUEST;
}

export const GET_LOGIN_SUCCESS = "loginActionTypes/GET_LOGIN_SUCCESS";
export interface GetLoginSuccessAction {
  type: typeof GET_LOGIN_SUCCESS;
  token: string;
}

export const GET_LOGIN_FAILURE = "loginActionTypes/GET_LOGIN_FAILURE";
export interface GetLoginFailureAction {
  type: typeof GET_LOGIN_FAILURE;
  error: Error | string;
}

export type LoginAction =
  | SetLoginAction
  | GetLoginAction
  | GetLoginRequestAction
  | GetLoginSuccessAction
  | GetLoginFailureAction;

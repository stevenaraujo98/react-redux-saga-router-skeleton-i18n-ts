// export const SET_RICKMORTY = "rickMortyActionTypes/SET_RICKMORTY";
// export interface SetRickMortyAction {
//   type: typeof SET_RICKMORTY;
//   result: string
// }

export const GET_RICKMORTY = "rickMortyActionTypes/GET_RICKMORTY";
export interface GetRickMortyAction {
  type: typeof GET_RICKMORTY;
  id: string;
}

export const GET_RICKMORTY_REQUEST = "rickMortyActionTypes/GET_RICKMORTY_REQUEST";
export interface GetRickMortyRequestAction {
  type: typeof GET_RICKMORTY_REQUEST;
}

export const GET_RICKMORTY_SUCCESS = "rickMortyActionTypes/GET_RICKMORTY_SUCCESS";
export interface GetRickMortySuccessAction {
  type: typeof GET_RICKMORTY_SUCCESS;
  result: object;
}

export const GET_RICKMORTY_FAILURE = "rickMortyActionTypes/GET_RICKMORTY_FAILURE";
export interface GetRickMortyFailureAction {
  type: typeof GET_RICKMORTY_FAILURE;
  error: Error | string;
}

export type rickMortyAction =
  // | SetRickMortyAction
  | GetRickMortyAction
  | GetRickMortyRequestAction
  | GetRickMortySuccessAction
  | GetRickMortyFailureAction;

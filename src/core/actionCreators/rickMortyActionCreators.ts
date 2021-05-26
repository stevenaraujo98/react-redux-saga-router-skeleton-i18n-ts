import * as actions from "../actionTypes/rickMortyActionTypes";

// export function setRickMorty(result: string): actions.SetRickMortyAction {
//   return {
//     type: actions.SET_RICKMORTY,
//     result
//   };
// }

export function getRickMorty(
  id: string
): actions.GetRickMortyAction {
  return {
    type: actions.GET_RICKMORTY,
    id
  };
}

export function getRickMortyRequest(): actions.GetRickMortyRequestAction {
  return {
    type: actions.GET_RICKMORTY_REQUEST
  };
}

export function getRickMortySuccess(
  result: object
): actions.GetRickMortySuccessAction {
  return {
    type: actions.GET_RICKMORTY_SUCCESS,
    result
  };
}

export function getRickMortyFailure(
  error: Error | string
): actions.GetRickMortyFailureAction {
  return {
    type: actions.GET_RICKMORTY_FAILURE,
    error
  };
}

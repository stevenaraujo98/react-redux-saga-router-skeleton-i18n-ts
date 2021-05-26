import * as actions from "../actionTypes/rickMortyActionTypes";

export interface RickMortyState {
  result: object;
}

const initialState: RickMortyState = {
  result: {}
};

export default function loginReducer(
  state: RickMortyState = initialState,
  action: actions.rickMortyAction
): RickMortyState {
  switch (action.type) {
    // case actions.SET_RICKMORTY:
    case actions.GET_RICKMORTY_SUCCESS:
      return {
        result: action.result
      };
    default:
      return state;
  }
}

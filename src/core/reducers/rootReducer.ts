import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";
import rickMorty from "./rickMortyReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  rickMorty: rickMorty,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

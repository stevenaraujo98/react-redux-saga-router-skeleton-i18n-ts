import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setLogin } from "../../core/actionCreators/loginActionCreators";
import * as actionTypes from "../../core/actionTypes/loginActionTypes";
import StartComponent from "./Start";
import { AppState } from "../../core/reducers/rootReducer";

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.LoginAction>) => ({
  logoutHandler: () => {
    dispatch(setLogin(""));
  },
});

const mapStateToProps = (state: AppState) => {  
  return {
    token: state.login.token,
    isLoading: state.isLoading[actionTypes.GET_LOGIN],
    error: state.error[actionTypes.GET_LOGIN]
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartComponent);
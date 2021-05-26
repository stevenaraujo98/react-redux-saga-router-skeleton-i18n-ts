import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getLogin } from "../../../../core/actionCreators/loginActionCreators";
import * as actionTypes from "../../../../core/actionTypes/loginActionTypes";
import LoginComponent from "./Login";
import { AppState } from "../../../../core/reducers/rootReducer";

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.LoginAction>) => ({
  loginHandler: (user: string, password: string) => {
    dispatch(getLogin(user, password));
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
)(LoginComponent);

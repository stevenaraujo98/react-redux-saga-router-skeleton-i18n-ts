import { connect } from "react-redux";
import { Dispatch } from "redux";

import { getRickMorty } from "../../../core/actionCreators/rickMortyActionCreators";
import * as actionTypes from "../../../core/actionTypes/rickMortyActionTypes";
import HomeComponent from "./Home";
import { AppState } from "../../../core/reducers/rootReducer";

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.rickMortyAction>) => ({
  getCharacter: (id: string) => {
    dispatch(getRickMorty(id));
  },
});

const mapStateToProps = (state: AppState) => {  
  return {
    result: state.rickMorty.result,
    isLoading: state.isLoading[actionTypes.GET_RICKMORTY],
    error: state.error[actionTypes.GET_RICKMORTY]
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
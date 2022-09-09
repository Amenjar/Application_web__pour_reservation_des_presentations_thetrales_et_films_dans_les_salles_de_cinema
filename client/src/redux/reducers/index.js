import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import SalleReducer from "./salleReducer";
import PubReducer from "./pubReducer";
import ResvReducer from "./resvReducer";

const rootReducer = combineReducers({
  AuthReducer,
  SalleReducer,
  PubReducer,
  ResvReducer,
});

export default rootReducer;

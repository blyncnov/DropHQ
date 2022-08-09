import { combineReducers } from "redux";
import cartReducer from "./cartReducers";

export const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

export default rootReducer;

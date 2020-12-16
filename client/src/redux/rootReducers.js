import { combineReducers } from "redux";
import customerReducer from "./customer/customerReducer";
import customerCreateReducer from "./customer/customerCreateReducer";

const rootReducer = combineReducers({
  customer: customerReducer,
  customerCreate: customerCreateReducer,
});

export default rootReducer;

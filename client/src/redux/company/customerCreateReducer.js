import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from "./customerCreateType";

const initialState = {
  loading: false,
  show: {},
  error: "",
};

const customerCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        loading: false,
        show: action.payload,
        error: "",
      };
    case FETCH_CUSTOMER_FAILURE:
      return {
        loading: false,
        show: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default customerCreateReducer;

import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
} from "./customerType";

const initialState = {
  loading: false,
  customers: [],
  offset: 0,
  sort: "id",
  order: "asc",
  max: 10,
  error: "",
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        sort: action.payloadsort,
        order: action.payloadorder,
        max: action.payloadmax,
        offset: action.payloadoffset + 10,
        customers: action.payload,
        count: action.payloadcount,
        page: action.payloadpage,
        totalpages: action.payloadtotalpages,
        error: "",
      };

    case FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;

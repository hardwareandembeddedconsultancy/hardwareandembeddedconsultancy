import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
} from "./customerType";
import Axios from "axios";
import { CUSTOMER_URL } from "./../../config";

const fetchCustomersRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST,
  };
};

const fetchCustomerSuccess = (customer, max, order, sort, offset) => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customer.customers,
    payloadcount: customer.count,
    payloadpage: customer.page,
    payloadtotalpages: customer.totalpages,
    payloadmax: max,
    payloadorder: order,
    payloadsort: sort,
    payloadoffset: offset,
  };
};

const fetchCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error,
  };
};

export const fetchCustomer = (authorization, sort, order, max, offset) => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest);
    Axios.get(
      CUSTOMER_URL +
        "?max=" +
        max +
        "&offset=" +
        offset +
        "&order=" +
        order +
        "&sort=" +
        sort,
      {
        headers: {
          Authorization: "Bearer " + authorization,
        },
      }
    )
      .then((response) => {
        const customer = response.data;
        dispatch(fetchCustomerSuccess(customer, max, order, sort, offset));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCustomerFailure(errorMsg));
      });
  };
};

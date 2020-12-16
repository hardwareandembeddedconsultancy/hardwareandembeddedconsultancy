import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from "./customerCreateType";

import Axios from "axios";
import { SERVER_URL } from "./../../config";

const fetchCustomerRequest = () => {
  return {
    type: FETCH_CUSTOMER_REQUEST,
  };
};

const showCustomerSuccess = (customer) => {
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customer,
  };
};
const showCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
  };
};

export const createCustomer = (value) => {
  return (dispatch) => {
    dispatch(fetchCustomerRequest);
    Axios.post(SERVER_URL + "/customer", value)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        dispatch(showCustomerSuccess(response.data));
      })
      .catch((error) => {
        console.error("The Error Message is " + error.response.data.total);
        let errorValue = "";
        if (typeof error.response.data.total === "undefined") {
          errorValue = "";
          errorValue += error.response.data.message;
        } else {
          errorValue = "Errors Are ";
          for (let i = 0; i < error.response.data.total; i++) {
            errorValue += error.response.data._embedded.errors[i].message;
          }
        }
        dispatch(showCustomerFailure(errorValue));
      });
  };
};

export const showCustomer = (id) => {
  return (dispatch) => {
    dispatch(fetchCustomerRequest);
    Axios.get(SERVER_URL + "/customer/" + id).then((response) => {
      console.log(response);
      console.log(response.data);
      dispatch(showCustomerSuccess(response.data));
    });
  };
};

export const editCustomer = (id, value) => {
  return (dispatch) => {
    dispatch(fetchCustomerRequest);
    Axios.put(SERVER_URL + "/customer/" + id, value).then((response) => {
      console.log(response);
      console.log(response.data);
      dispatch(showCustomerSuccess(response.data));
    });
  };
};

export const deleteCustomer = (id) => {
  return (dispatch) => {
    Axios.delete(SERVER_URL + "/customer/" + id);
  };
};

import pjson from "./../package.json";

export const SERVER_URL = "http://localhost:8080";
export const CUSTOMER_URL = SERVER_URL + "/customer";
export const CLIENT_VERSION = pjson.version;
export const REACT_VERSION = pjson.dependencies.react;

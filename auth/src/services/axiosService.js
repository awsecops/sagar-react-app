import Axios from "lib-app/Axios";

//default configuration for without auth token
export const getDefaultConfig = () => {
  var config = {};
  config = {
    Accept: "application/json",
  };
  return config;
};

//config with auth token
export const getConfig = () => {
  var config = {};
  //require to read token from local storage
  var token;
  if (token) {
    config = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    config = {
      Accept: "application/json",
    };
  }
  return config;
};

//post api call
export const Post = (url, payload, isAuthRequired = true) => {
  
  if (isAuthRequired) {
    return Axios.post(url, payload, getConfig());
  } else {
    return Axios.post(url, payload, getDefaultConfig());
  }
};

//get api call
export const Get = (url, isAuthRequired = true) => {

  if (isAuthRequired) {
    return Axios.get(url, getConfig());
  } else {
    return Axios.get(url, getDefaultConfigConfig());
  }
};

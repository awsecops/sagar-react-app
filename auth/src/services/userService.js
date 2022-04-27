import LocalStorageService from "./localStorageService";
import * as axiosService from "./axiosService";
  //call login api
export  const doLogin = (user) => {
    return axiosService.Get(
      process.env.API_URL + "/api/Lokalize/GetAllKeys"
    );
  }






import { forcastData, getCity } from "../Api/api";
import * as types from "./actionType";

export const getDataReq = (payload) => {
  return {
    type: types.FETCH_DATA_REQ,
    payload
  }
};
export const getDatatSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload
  }
};
export const getDatatFaliure = (payload) => {
  return {
    type: types.FETCH_DATA_FALIURE,
    payload
  }
};


export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(getDataReq());
    getCity
      .get(`direct?q=${payload}&limit=5&appid=a49cd5be954855c063965427c335b5bc`)
      .then((res) => {
        let lat = res.data[0].lat;
        let lon = res.data[0].lon;
        let name = res.data[0].name;
        forcastData
          .get(`onecall?lat=${lat}&lon=${lon}&exclude=current,minutelyalerts&units=metric&appid=a49cd5be954855c063965427c335b5bc`)
          .then((res) => {
            res.data.name = name;
            dispatch(getDatatSuccess(res.data))
          })
      })
      .catch((err) => dispatch(getDatatFaliure(err.data)));
  };
};


import axios from "axios";
import { GET_ONE_PUB, GET_PUB } from "../types/pubtype";

export const getpublication = () => async (dispatch) => {
  try {
    const res = await axios.get("/Publication/");
    dispatch({ type: GET_PUB, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const addPublication = (id, newPost) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.post(`/Publication/addPub/${id}`, newPost, config);
    dispatch(getpublication());
  } catch (error) {
    console.log(error);
  }
};
export const deletePublication = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(`/Publication/deletePub/${id}`, config);
    dispatch(getpublication());
  } catch (error) {
    console.log(error);
  }
};
export const editPublication = (id, pubUpdated) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.put(`/Publication/updatePub/${id}`, pubUpdated, config);
    dispatch(getpublication());
  } catch (error) {
    console.log(error);
  }
};

export const getonePub = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/Publication/${id}`);
    dispatch({ type: GET_ONE_PUB, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

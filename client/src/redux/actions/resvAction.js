import axios from "axios";
import { GET_RESV } from "../types/resvtype";

export const addReservation = (id, newResv) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.post(`/Reservation/addReservation/${id}`, newResv, config);
    dispatch();
  } catch (error) {
    console.log(error);
  }
};
export const getReservation = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get("/Reservation/", config);
    dispatch({ type: GET_RESV, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(`/Reservation/deleteReservation/${id}`, config);
    dispatch(getReservation());
  } catch (error) {
    console.log(error);
  }
};

export const updateReservation = (id, Reservation) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    console.log(id);
    await axios.put(
      `/Reservation/updateReservation/${id}`,
      Reservation,
      config
    );
    dispatch(getReservation());
  } catch (error) {
    console.log(error);
  }
};


import { GET_RESV } from "../types/resvtype";

const initialState = {
    reservations:null,
};

const ResvReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RESV:
      return { ...state, reservations:payload.Reservations };

    default:
      return state;
  }
};
export default ResvReducer;
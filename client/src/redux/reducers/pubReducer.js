import { GET_ONE_PUB, GET_PUB } from "../types/pubtype";

const initialState = {
  publications: null,
  publication: null,
};

const PubReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PUB:
      return { ...state, publications: payload.listOfPublication };
    case GET_ONE_PUB:
      return { ...state, publication: payload.onePub };

    default:
      return state;
  }
};
export default PubReducer;

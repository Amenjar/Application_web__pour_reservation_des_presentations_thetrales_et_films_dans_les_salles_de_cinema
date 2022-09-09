import { GET_ONE_SALLE, GET_SALLE } from "../types/salletype";

const initialState = {
    salles : null,
    onesalle:null
};

const SalleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SALLE:
      return { ...state, salles:payload.listOfSalle };
    case GET_ONE_SALLE:
      return{...state,onesalle:payload.salle}

    default:
      return state;
  }
};
export default SalleReducer;

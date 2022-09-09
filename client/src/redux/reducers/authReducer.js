import {  FAIL, GET_CURRENT, GET_ONE_USER, GET_USERAPP, LOGIN, LOGOUT, REGISTER } from "../types/authtype"

const initialState = {
    user:null,
    errors:null,
    auth:false,
    users:null,
    oneUser:null,

}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case REGISTER:
        localStorage.setItem("token",payload.token)
        return { ...state,user:payload.user,auth:true,errors:null}
    case LOGIN:
        localStorage.setItem("token",payload.token)
        return{...state,user:payload.found,auth:true,errors:null}
    case GET_USERAPP:
        return { ...state, usersApp:payload.listOfUsers};
    case FAIL:
        return{...state,errors:payload.errors}
    case GET_CURRENT:
        return{...state,user:payload, auth:true}
    case GET_ONE_USER:
        return{...state,oneUser:payload.oneuser}
    case LOGOUT :
        localStorage.removeItem("token")
        return{...state,user:null,auth:false}
    

    default:
        return state
    }
}

export default AuthReducer;
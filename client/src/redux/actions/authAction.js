import axios from "axios";
import {  FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER,GET_USERAPP, GET_ONE_USER } from "../types/authtype";

export const register = (newUser,Navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signUp", newUser);
    dispatch({ type: REGISTER, payload: res.data });
    Navigate("/Profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (user,Navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signIn", user);
    
    dispatch({ type: LOGIN, payload: res.data });
    if(res.data.found.role==="admin"){
    Navigate("/ProfileAdmin")}else
    if(res.data.found.role==="userApp"){
    Navigate("/ProfileUserApp")}else{
      Navigate("/Profile")
    }

  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const getCurrent = () => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };

  try {
    const res = await axios.get("/user/current", config);
    console.log(res.data);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    // dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
};
export const logout = (Navigate) => {
  Navigate("/")
  return {
    type: LOGOUT,
  };
};
export const getuserApp = (Navigate)=>async(dispatch)=>{
  const token = localStorage.getItem("token");
  const config ={
      headers:{
          authorization: token,
      }
  }

  try {
      const res = await axios.get("/user/userApp",config);
      dispatch({type:GET_USERAPP,payload:res.data})
      Navigate("/ProfileAdmin/userApp")
      
  } catch (error) {
      console.log(error)
  }
}


export const adduserapp = (newUserapp,Navigate)=>async(dispatch)=>{

  try {
     await axios.post("/user/adduserApp",newUserapp);
     dispatch(getuserApp());
     Navigate("/ProfileAdmin/userApp");
  } catch (error) {
    console.log(error);
  }

}
export const getoneuser = (id) =>async(dispatch)=>{
  const token = localStorage.getItem("token");
  const config ={
      headers:{
          authorization: token,
      }
  }
 try {
    const res = await axios.get(`/user/userApp/${id}`,config);
    dispatch({type:GET_ONE_USER,payload:res.data})
 } catch (error) {
   console.log(error)
 }
}
export const deleteuser = (id) =>async(dispatch)=>{
  const token = localStorage.getItem("token");
  const config ={
    headers:{
      authorization: token,
    }
  }
  try {
    await axios.delete(`/user/deleteuser/${id}`,config);
    dispatch(getuserApp());
  } catch (error) {
    console.log(error)
  }
}
export const edituserApp = (id,userupdated)=>async(dispatch)=>{
  const token = localStorage.getItem("token");
  const config ={
    headers:{
      authorization: token,
    }
  }
  try {
   
    await axios.put(`/user/edituserApp/${id}`,userupdated,config);
    console.log(userupdated)
    dispatch(getuserApp())
  } catch (error) {
    console.log(error)
  }
}
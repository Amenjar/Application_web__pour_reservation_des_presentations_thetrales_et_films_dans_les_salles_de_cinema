import axios from "axios";
import { GET_ONE_SALLE, GET_SALLE } from "../types/salletype";

export const getSalle = (Navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers : {
            authorization : token,
        },
    }
    try {
        const res = await axios.get("/Salle/getSalle",config);
        dispatch({type:GET_SALLE,payload:res.data})
        Navigate("/ProfileAdmin/Salle")
    } catch (error) {
        console.log(error)
    }
}
export const addSalle=(newSalle,Navigate)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config = {
        headers : {
            authorization : token,
        },
    }
    try {
        await axios.post("/Salle/addSalle",newSalle,config);
        
        dispatch(getSalle())
        Navigate("/ProfileAdmin/Salle")
    } catch (error) {
        console.log(error)
    }
}
export const deleteSalle =(id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config ={
        headers:{
            authorization:token,
        },
    }
    try {
        await axios.delete(`/Salle/${id}`,config);
        dispatch(getSalle());
    } catch (error) {
        console.log(error)
    }

}
export const editSalle = (id,salle)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config ={
        headers:{
            authorization:token,
        },
    }
    try {
        await axios.put(`/Salle/updateSalle/${id}`,salle,config);
        dispatch(getSalle());
    } catch (error) {
        console.log(error)
    }
}
export const getonesalle = (id)=>async(dispatch)=>{
    const token = localStorage.getItem("token");
    const config ={
        headers:{
            authorization:token,
        },
    }
    try {
        const res = await axios.get(`/Salle/${id}`,config)
        dispatch({type:GET_ONE_SALLE,payload:res.data});
    } catch (error) {
        console.log(error);
    }
}
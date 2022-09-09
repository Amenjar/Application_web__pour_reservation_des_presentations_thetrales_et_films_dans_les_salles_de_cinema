import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent } from '../redux/actions/authAction';
import imageAdmin from './admin.png'



function ProfileAdmin() {
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getCurrent());
  },[dispatch])
  const user = useSelector(state=>state.AuthReducer.user);
  const token = localStorage.getItem("token")
 
  return (<div>
    { user && token ?
      <img src={imageAdmin } alt="admin" style={{width:"1517px",height:"662px", marginTop:"5px"}}/>:
      <h1>failed you are not connected</h1>
}
  </div>);
}

export default ProfileAdmin;

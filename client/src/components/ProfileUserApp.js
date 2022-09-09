import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent } from '../redux/actions/authAction';
import { getSalle } from '../redux/actions/salleAction';
import CardSalleUserApp from './SalleCinema/CardSalleUserApp';



function ProfileUserApp() {
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getCurrent());
  },[dispatch])
  useEffect(()=>{
    dispatch(getSalle())
  },[dispatch])
  const user = useSelector(state=>state.AuthReducer.user);
  const token = localStorage.getItem("token")
  const salles= useSelector(state=>state.SalleReducer.salles);

 
  return (<div>
    { user && token ?
      <div>{salles && salles.filter(el=>el.name===user.nomSalle).map(salle=><CardSalleUserApp salle={salle} key={salle._id}></CardSalleUserApp>)}</div>:
      <h1>failed you are not connected</h1>
}
  </div>);
}

export default ProfileUserApp;

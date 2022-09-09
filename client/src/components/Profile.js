import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent } from '../redux/actions/authAction';

import { getSalle } from '../redux/actions/salleAction';

import CardSalleUser from './SalleCinema/CardSalleUser';




function Profile({search}) {
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getCurrent());
  },[dispatch])
 /* useEffect(()=>{
    dispatch(getpublication())
  },[dispatch])*/
  useEffect(()=>{
    dispatch(getSalle())
  },[dispatch])
  //const publications = useSelector(state=>state.PubReducer.publications);
  const salles = useSelector(state=>state.SalleReducer.salles)
  const user = useSelector(state=>state.AuthReducer.user);
  const token = localStorage.getItem("token")
 
  return (<div>
    { user && token ?
    <div style={{display:"flex",flexWrap:"wrap"}}> {salles && salles.filter(el=>el.name.toUpperCase().includes(search.toUpperCase().trim())).map(salle=><div style={{display:"flex",flexWrap:"wrap"}}><CardSalleUser salle={salle} key={salle._id}></CardSalleUser></div>)}</div> :
      <h1 style={{textAlign:"center"}}>Hello guest</h1>}
  </div>);
}

export default Profile;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSalle } from '../../redux/actions/salleAction';
import CardSalle from './CardSalle';

function ListOfSalle() {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getSalle())
    },[dispatch])
    const salles = useSelector(state=>state.SalleReducer.salles);
  return (<div style={{ display: "flex", flexWrap: "wrap" }}>
     {salles && salles.map(salle=><CardSalle salle={salle} key={salle._id}></CardSalle>)}
  </div>);
}

export default ListOfSalle;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent } from '../../redux/actions/authAction';
import { getpublication } from '../../redux/actions/pubAction';
import CardPub from './CardPub';



function ListOfPub() {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getpublication())
    },[dispatch])
    useEffect(()=>{
      dispatch(getCurrent())
    })
    const user = useSelector(state=>state.AuthReducer.user);
    const publications = useSelector(state=>state.PubReducer.publications);

  return (<div style={{ display: "flex", flexWrap: "wrap" }}>
     {publications && publications.map(pub=>user._id=== pub.userId ?<CardPub pub={pub} key={pub._id}></CardPub>:null)}
     {console.log(publications)}
  </div>);
}

export default ListOfPub;
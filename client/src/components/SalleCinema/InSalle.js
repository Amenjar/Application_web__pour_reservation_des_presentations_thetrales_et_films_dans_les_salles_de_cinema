import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getpublication } from '../../redux/actions/pubAction';
import CardPubUser from '../Publication/CardPubUser';

function InSalle({search}) {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getpublication())
  },[dispatch])
  const publications = useSelector(state=>state.PubReducer.publications);
  const salle = useSelector(state=>state.SalleReducer.onesalle);

  return (<div>
    <div style={{display:"flex",flexWrap:"wrap"}}>  {publications && publications.filter(el=> el.SalleId===salle._id &&  el.title.toUpperCase().includes(search.toUpperCase().trim())).map(pub=><CardPubUser pub={pub} key={pub._id}></CardPubUser>)}</div>

  </div>);
}

export default InSalle;

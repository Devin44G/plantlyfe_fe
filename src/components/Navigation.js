import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Nav, LinkDiv } from './../styles'

import { PLContext } from '../state/PLContext';
import { CLEAN } from '../state/reducers/plReducer';


const Navigation = props => {
  const { dispatch } = useContext(PLContext);

  const deleteToken = () => {
    dispatch({ type: CLEAN });
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token');
    props.history.push('/');
  }

  return (
  <nav className="nav">
    <LinkDiv style={{alignItems:'baseline'}}>
      <Link className="navlinks" to="/dashboard">Dashboard</Link>
      {window.localStorage.getItem('token') ? (
        <Link className="navlinks" to="/login" onClick={deleteToken}>Log Out</Link>
      ) : (
        <>
          <Link className="navlinks" to="/login">Login</Link>
          <Link className="navlinks" to="/">Sign Up</Link>
        </>
      )}
    </LinkDiv>
    <div style={{display:"flex",alignItems:"flex-start"}}>
      <h1>PlantLyfe</h1>
      <div className="logo"> {/* Image Here */} </div>
    </div>
  </nav>
  );
}

export default Navigation;

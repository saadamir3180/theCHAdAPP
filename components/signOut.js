import React from 'react';
import { auth } from '../firebase-config';

function SignOut() {
  // const {setAuth} = props;
  return (
    <button className='styledButton' onClick={()=>{auth.signOut();localStorage.removeItem('room');}}>Sign Out</button>
  )
}

export default SignOut;
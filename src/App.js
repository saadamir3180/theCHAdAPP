import './App.css';
import SignIn from './components/signIn';
import HomeInfo from './components/homeInfo';
import SignOut  from './components/signOut';
import Application  from './components/application';
import { auth } from './firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logo from './components/logo';
import { ReactComponent as MySVG } from './components/Infinity-loader.svg';

// import Cookies from 'universal-cookie'
// const cookie = new Cookies()
// import { useState } from 'react';
// import { useEffect } from 'react';

function App() {
  const [user, loading] = useAuthState(auth);
  // const [isAuth, setAuth] = useState(cookie.get("auth-token"));

  // useEffect(()=>{setAuth(cookie.get("auth-token"))},[])


  return (
    <div className="App">
      <header className="mainHeader">
            <Logo/>
            <h1>the CHAd APP</h1>
            {user ? <SignOut/> : <SignIn/>}
      </header>
      {loading ? <div className='loader-container'><MySVG/></div> : <div>
      {user ? <Application/> : <HomeInfo/> } 
      </div>}
    </div>
  );
}


export default App;

/*<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */

      /* {isAuth ? <div><Application/><SignOut setAuth={setAuth}/></div> : <SignIn className="SignInContainer" setAuth={setAuth}/>} */
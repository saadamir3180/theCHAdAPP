import { signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../firebase-config';
import '../App.css';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import Cookies from 'universal-cookie';
// const cookie = new Cookies();

function SignIn(){
    // const {setAuth} = props;

    const AuthorizeViaGoogle = async ()=>{
        try{
            // const currentUser = 
            await signInWithRedirect(auth, provider);
            // cookie.set("auth-token", currentUser.user.refreshToken);
            // setAuth(cookie.get("auth-token"))
        }
        catch(err){
            console.error(err);
        }
    }

    return(
            <button className='styledButton' onClick={AuthorizeViaGoogle}>Get Started</button>
    )
}
export default SignIn;
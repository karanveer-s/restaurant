import React,{useEffect,useState} from 'react';
import ReactDOM, { render } from 'react-dom';
import Main from './components/MainComponent';
import './App.css';
import {auth} from './firebase/firebase';
import {BrowserRouter} from 'react-router-dom';
import Login from './components/Loginpage/login';
import LoadingPage from './components/LoadingPage/LoadingPage'
import LoginPage from './components/Loginpage/login';
import AppRouter from './Router/AppRouter';
import Hero from './components/HeroImage/Heroimage';
// let hasRendered = false;
//   const renderApp = () => {
//     if (!hasRendered) {
//       ReactDOM.render(<App/>, document.getElementById('root'));
//       hasRendered = true;
//     }
//   };

const App =()=> {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('');
  const [emailError, setEmailError] =  useState('');
  const [passwordError, setPasswordError] =  useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors  =() => {
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin =() =>{
    clearErrors();
    auth.signInWithEmailAndPassword(email,password).catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
      }
    })
  }
 
const handleSignup = () =>{
  clearErrors();
  auth.createUserWithEmailAndPassword(email,password).catch(err => {
    switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
          setEmailError(err.message);
          break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
    }
    });
};


const handleLogout = () => {
  auth.signOut();
};
const authListner = () => {
  auth.onAuthStateChanged(user=>{
    if(user){
      clearInputs();
      setUser(user);
    }else{
      setUser('');
    }
  })
}
useEffect(()=>{
  authListner();
},[]);
  return (
    <div>
      {user ? (
        <AppRouter handleLogOut={handleLogout}/> 
      ):(<Login
      email={email}
      setPassword={setPassword}
      setEmail={setEmail}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      /> 
      )}
     
    </div>
  );
}

export default  App;

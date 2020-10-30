import React from 'react';
import './login.css';



const Login = (props) =>{
    const {email,setEmail, password,setPassword,handleLogin, handleSignup, hasAccount, setHasAccount, emailError , passwordError} = props;
    const imagePath = './6.jpg';
    return(
        <section>
            <div className="box-layout" style={{backgroundImage:`url('${imagePath}')` }} >
            <div className="box-layout__box">
           <h1 className="box-layout__title">Fork Full</h1>
                <label>Email-ID</label><br></br>
           <input placeholder="email" autoFocus type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <p>{emailError}</p>
            <label>Password</label><br></br>
           <input placeholder="Password" type="password"  required value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <p>{passwordError}</p>
            <div>
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin} className="button">Sign in</button>
                    <p>Don't have an account?<button onClick={()=> setHasAccount(!hasAccount)}>Sign Up</button></p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup} className="button">Sign Up</button>
                    <p>Have an account?<button onClick={()=> setHasAccount(!hasAccount)}>Sign in</button>
                    </p>
                    </>
                )}
            </div>
        </div>
     </div>
        </section>
    )
}


// const LoginPage = () => {
//    const[email, setEmail] =useState();
//    const[password,setPassword] = useState();

//     return(
//    <div className="box-layout">
//        <div className="box-layout__box">
//            <h1 className="box-layout__title">Expensify</h1>
//            <input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//            <input placeholder="Password" type="passwrord" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//            <p>It's time to get your expenses under control.</p>
//        <button onClick={Login} className="button">Login with Google</button>
//        </div>
//     </div>
// );
// }

export default Login;
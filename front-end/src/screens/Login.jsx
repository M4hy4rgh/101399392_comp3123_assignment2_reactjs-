import React, {useState} from "react";
import { IoLogInOutline } from "react-icons/io5";
import { FaUser,FaLock  } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import ParticlesComponent from '../components/ParticlesComponent';
import axios from 'axios'


import "../components/assets/css/myStyle.css";

function Login() {

    const [labelColor, setLableColor] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        const res = await axios.post('http://localhost:3001/user/login', data);
        // console.log(res);
        console.log(res.data);
        if (res.data.status === 200) {
            localStorage.setItem('valid', true);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('id', res.data.id);
            navigate('/dashboard');
        } else {
            localStorage.setItem('valid', false);
            alert('Invalid credentials');
        }
    }


    const handleFocus = (e) => {
        setLableColor("text-white");
    }

    const handleIsCheck = (e) => {
        setIsChecked(!isChecked);
    }

  return (
      <div className="container flex justify-center items-center min-h-screen min-w-full">
          <ParticlesComponent/>
     <div className="inner-container flex flex-col justify-center items-center gap-1.5 min-h-[520px] min-w-[400px]
     bg-sky-900/60 shadow-[1px_1px_10px_1px_#000000,8px_8px_0px_0px_#344454,12px_12px_10px_0px_#000000] m-auto relative
     sm:min-w-[400px] sm:min-h-[520px]">
         <div className="-top-[45px] flex justify-center items-center relative mb-6">
             <div className=" bg-sky-950/80 p-5 rounded-full shadow-[0px_0px_9px_2px_#344454] absolute">
              <IoLogInOutline className="text-5xl
                 hover:animate-[rotate_1.1s_ease-out_alternate-reverse_infinite]"/>
             </div>
         </div>
         <div className="welcome text-center	mt-6 mb-2 text-2xl font-bold">
             <h2 className="title">Hello there,<br/>Please Login below!</h2>
         </div>
         <form className="myForm flex flex-col gap-4 justify-center items-center w-80" autocomplete="off" onSubmit={handleLogin}>
             <div className="input-con relative w-full">
                 <input type="text" id="username" className="input-lg h-11 px-3 w-full text-base border border-solid
                         border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 focus:outline-0
                         focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]" placeholder="Username" onChange={(e) => setUsername(e.target.value)}
                         required/>
                 <FaUser className="absolute top-3.5 left-72 " id="user-icon"/>
            </div>
             <div className="input-con relative w-full">
                 <input type="password" id="password" className="input-lg h-11 px-3 w-full text-base border border-solid
                         border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white
                         focus:shadow-[0_0_15px_5px_#7692A7]" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <FaLock className="absolute top-3.5 left-72" id="pass-icon"/>
             </div>
             <div className="input-con w-full text-center">
                 <Link to="/employees">
                     <input type="submit" value="Login" name="login" id="loginButton" className="h-11 px-3 w-full
                         border-2 border-solid border-gray-400 bg-transparent bg-none cursor-pointer text-lg
                         font-bold text-slate-300 shadow-[inset_0_0_0_0_#7692A7] hover:bg-transparent
                         hover:border-white hover:text-white hover:shadow-[inset_0_0_100px_0_#7692A7] focus:bg-transparent
                         focus:border-white focus:text-white focus:shadow-[inset_0_0_100px_0_#7692A7] active:bg-transparent
                         active:border-white active:text-white active:shadow-[inset_0_0_100px_0_#7692A7] outline-0
                         hover:animate-[scale_1.1s_ease-out_alternate-reverse_infinite]"/>
                 </Link>
             </div>
             <div className="f-r-r-con input-con flex flex-row justify-between items-start w-full gap-[50px]">
                 <div className="check space-x-1">
                          <input type="checkbox" id="rememberMe" className="focus:outline-0" onFocus={handleFocus}  onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
                          <label id="rememberMeLabel" className={`${ labelColor}`} onClick={handleIsCheck}>Remember me</label>
                 </div>
                 <div className="f-r-con check flex flex-col justify-center items-end gap-1">
                     <Link to="/signup" className="register focus:outline-0" id="regLink">Register Here!</Link>
                 </div>
             </div>
         </form>
     </div>
     
     </div>
  );
}

export default Login;

import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import '../components/assets/css/RegisterStyle.css'
import { IoLogInOutline } from "react-icons/io5";
import { FaUser,FaLock ,FaEnvelope  } from "react-icons/fa";
import ParticlesComponent from '../components/ParticlesComponent';

export default function Register() {

    const[first_name, setFirstName] = useState('');
    const[last_name, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[con_password, setCon_password] = useState('');

    const formData = {
        firstName: first_name,
        lastName: last_name,
        email,
        password,
        con_password

    }
    const navigate = useNavigate();


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (password !== con_password) {
    //         alert('Password and Confirm Password must be same');
    //         return;
    //     }

    //     try {
    //         const res = await axios.post('http://localhost:3001/user/signup', formData);
    //         console.log(res);
    //         if (res.data.status === 201) {
    //             alert('Registration Successful');
    //             navigate('/dashboard');

    //         } else {
    //             alert('Registration Failed');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }


    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.id]: e.target.value });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password === con_password) {
    //         console.log(formData);
    //     } else {
    //         alert('Password and Confirm Password must be same');
    //     }
    // }

    const handleRegistration = async (e) => {
        e.preventDefault();
        const { password, con_password } = formData;
        if (password === con_password) {
            const res = await axios.post('http://localhost:3001/user/signup', formData);

            if (res.data.status === 201) {

                alert('Registration Successful');
                navigate('/dashboard');
            } else {
                alert('Registration Failed');
            }
        } else {
            alert('Password and Confirm Password must be same');
        }

    }






    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     con_password: ''
    // });

    // const { firstName, lastName, email, password, con_password } = formData;
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.id]: e.target.value });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password === con_password) {
    //         console.log(formData);
    //     } else {
    //         alert('Password and Confirm Password must be same');
    //     }
    // }
    // const navigate = useNavigate();

    // const handleRegistration = async (e) => {
    //     e.preventDefault();
    //     const {password, con_password } = formData;
    //     if (password === con_password) {
    //         const res = await axios.post('http://localhost:3001/user/signup', formData);
    //         console.log(res);
    //         if (res.data.status === 201) {
    //             alert('Registration Successful');
    //             navigate('/dashboard');
    //         } else {
    //             alert('Registration Failed');
    //         }
    //     } else {
    //         alert('Password and Confirm Password must be same');
    //     }
      
    // }



    return (
      
        <div className="container flex justify-center items-center min-h-screen min-w-full">
                <ParticlesComponent/>
    <div className="inner-container flex justify-center items-center flex-col gap-1.5 bg-sky-900/60 min-h-[585px]
        min-w-[380px] shadow-[1px_1px_10px_1px_#000000,8px_8px_0px_0px_#344454,12px_12px_10px_0px_#000000] m-auto
        relative md:min-w-[420px] md:min-h-[550px]">

        <div className="-top-5 flex justify-center items-center relative md:mb-10">
            <div className="icon bg-sky-950/80 p-5 rounded-full shadow-[0px_0px_9px_2px_#344454] absolute">
            <IoLogInOutline className="text-5xl
                 hover:animate-[rotate_1.1s_ease-out_alternate-reverse_infinite]"/>
            </div>
        </div>

        <div className="welcome mt-8 mb-2 md:my-3">
            <h2 className="title text-center text-2xl font-bold">Hello there,<br/>Please Register below!</h2>
        </div>

        <form className="myForm flex flex-col gap-4 justify-center items-center w-72 md:grid md:grid-cols-2 md:w-[350px]
         md:gap-2.5" autocomplete="off" onSubmit={handleRegistration}>
            <div className="input-con relative w-full">
                <input type="text" value={formData.firstName} id="firstName" className="input-lg h-11 px-3 w-full text-base border border-solid
                        border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 focus:outline-0
                        focus:border-l-white focus:shadow-[0_0_15px_5px_#7692A7]" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required/>
                <FaUser className="absolute top-3.5 left-64 focus:text-white focus:shadow-[0_0_px_20px_black]
                md:top-3.5 md:left-36" id="user-icon"/>
            </div>

            <div className="input-con relative w-full">
                <input type="text" value={formData.lastName} id="lastName" className="input-lg h-11 px-3 w-full text-base border border-solid
                        border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white
                        focus:shadow-[0_0_15px_5px_#7692A7]" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required/>
                <FaUser className="absolute top-3.5 left-64 focus:text-white focus:shadow-[0_0_px_20px_black]
                md:top-3.5 md:left-36" id='user-icon'/>
            </div>

            <div className="input-con relative w-full md:col-span-2">
                <input type="email" value={formData.email} id="email" className="input-lg h-11 px-3 w-full text-base border border-solid
                        border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white
                        focus:shadow-[0_0_15px_5px_#7692A7]" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required/>
                <FaEnvelope  className="fa-solid fa-envelope absolute top-3.5 left-64 focus:text-white focus:shadow-[0_0_px_20px_black]
                md:top-3.5 md:left-[92%]"id='email-icon'/>
            </div>

            <div className="input-con relative w-full md:col-span-2">
                <input type="password" value={formData.password} id="password" className="input-lg h-11 px-3 w-full text-base border border-solid
                        border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white
                        focus:shadow-[0_0_15px_5px_#7692A7]" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
                <FaLock className="absolute top-3.5 left-64 focus:text-white focus:shadow-[0_0_px_20px_black]
                md:top-3.5 md:left-[92%]" id='pass-icon' />
            </div>

            <div className="input-con relative w-full md:col-span-2">
                <input type="password" value={formData.con_password} id="con_password" className="input-lg h-11 px-3 w-full text-base border border-solid
                        border-slate-600 border-l-4 border-l-slate-400 bg-gray-800/50 outline-0 focus:border-l-white
                        focus:shadow-[0_0_15px_5px_#7692A7]" placeholder="Confirm Password" onChange={(e)=>setCon_password(e.target.value)} required/>
                <FaLock className="absolute top-3.5 left-64 focus:text-white focus:shadow-[0_0_px_20px_black]
                md:top-3.5 md:left-[92%]" id='pass-icon'/>
            </div>

            <div className="input-con w-full text-center md:col-span-2 md:mt-2">
                <input type="submit" value="Register" name="register" id="register" className="h-11 px-3 w-full
                    border-2 border-solid border-gray-400 bg-transparent bg-none cursor-pointer text-lg
                    font-bold text-slate-300 shadow-[inset_0_0_0_0_#7692A7] hover:bg-transparent
                    hover:border-white hover:text-white hover:shadow-[inset_0_0_100px_0_#7692A7] focus:bg-transparent
                    focus:border-white focus:text-white focus:shadow-[inset_0_0_100px_0_#7692A7] active:bg-transparent
                    active:border-white active:text-white active:shadow-[inset_0_0_100px_0_#7692A7] outline-0
                    hover:animate-[scale_1.1s_ease-out_alternate-reverse_infinite]"/>
                    </div>
                <div className="f-r-con flex flex-row justify-center items-center col-span-2 gap-[51px]">
                    <Link to="/" className="register focus:outline-0 text-center" id='logLink'>Already Have an Account!</Link>
                </div>
        </form>

    </div>
</div>
  )
}

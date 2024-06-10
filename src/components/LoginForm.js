import React, { useState } from 'react';
import { AiOutlineEyeInvisible ,} from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate() ;
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [showVisible,setShowVisibel] = useState(false) ;

    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        setIsLoggedIn(prev=>!prev)
        toast.success("Login Successfully") ;
        navigate("/dashboard")
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full h-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Enter Your Email <sup className='text-pink-400'>*</sup></p>
                <input className='w-full bg-richblack-700 rounded-[5px] p-1 mt-1 text-richblack-5'
                    required
                    type='email'
                    placeholder='Enter Your Email'
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Enter Your Password <sup className='text-pink-400'>*</sup></p>
                <input
                className='w-full bg-richblack-700 rounded-[5px] p-1 mt-1 text-richblack-5'
                    required
                    placeholder='Enter Your Password'
                    type= {showVisible ? ("text") : ("password")}
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <span className='absolute right-3 top-[34px]' onClick={()=>setShowVisibel((prevVal)=>!prevVal)}>{showVisible ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }</span>
                <Link to="#" >
                <p className='w-full text-xs text-blue-500 mt-1'>Forgot Password</p>
                </Link>
            </label>
            <button className='bg-yellow-50 rounded-[8px] text-richblack-800 px-[12px] py-[8px] font-medium'>Login</button>
        </form>
    );
};

export default LoginForm ;

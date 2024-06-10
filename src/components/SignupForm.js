import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match")
            return ;
        }
        setIsLoggedIn(true);
        toast.success("Account Created Successfully");
        navigate('/dashboard')
        const accountData = {
            ...formData
        }
        console.log(accountData)


    }


  return (
    <div>
       <form onSubmit={handleSubmit}>
        {/* first name and lastName */}
            <div className='flex gap-x-6 mt-2'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-400'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='w-full bg-richblack-700 rounded-[5px] p-1 mt-1 text-richblack-5'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-400'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className='w-full bg-richblack-700 rounded-[5px] p-1 mt-1 text-richblack-5'
                        />
                    </label>
            </div>
            {/* email Add */}
            <div className='mt-2'>
            <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-400'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className='w-full bg-richblack-700 rounded-[5px] p-1 mt-1 text-richblack-5'
                    />
            </label>
            </div>

            {/* createPassword and Confirm Password */}
            <div className='flex gap-x-6 mt-2'>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-400'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='w-full bg-richblack-700 rounded-[5px] p-1 mt-1 text-richblack-5'
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-400'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='w-full bg-richblack-700 rounded-[5px] p-1 mt-1 text-richblack-5'
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>
        <button className='bg-yellow-50 rounded-[8px] text-richblack-800 px-[12px] py-[8px] font-medium w-full mt-3'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm


import React, { useState } from 'react';
import { HiEyeOff, HiEye } from "react-icons/hi";

import { Link } from 'react-router-dom';
import OAuth from '../componants/OAuth';



export default function SignUp() {
  const[showPassword,setShowPassword]=useState(false);
  const[formData, setFormData ]=useState({
    name:"",
    email:"",
    password:"",
   
  });
  const{name,email,password}= formData;
  function onChange (e){
    setFormData((prevState )=>({
      ...prevState,
      [e.target.id]:e.target.value,

    }));
   
  }
  return (
    <section>
    <h1 className="text-xl text-center mt-6 font-bold ">Sign Up</h1>
    
  <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
    <div className="md:w-8 lg:w-[50%] mb-12 md:mb-6">
      <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
      alt="Key"className="w-full rounded-2xl" / >
    </div>
    <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
    
      <form  >

      <input className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-yellow-50 border-gray-600 rounded transition-ease-in-out' 
        type = ""
        id='name' 
        value={name} 
        onChange={onChange}
        placeholder='Full Name' 
        />


        <input className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-yellow-50 border-gray-600 rounded transition-ease-in-out' 
        type='email' 
        id='email' 
        value={email} 
        onChange={onChange}
        placeholder='Email address' 
        />

        <div className='relative' mb-6>
        <input className='w-full px-4 py-2 text-xl text-gray-700 bg-yellow-50 border-gray-600 rounded transition-ease-in-out' 
        type={showPassword? "text "  :"password"}
        id='password' 
        value={password} 
        onChange={onChange}
        placeholder='Password' 
        />
        {showPassword ?(<HiEyeOff className='absolute right-3 top-3 text-xl cursor-pointer  ' onClick={()=>setShowPassword((prevState)=>!prevState)}/>) : (<HiEye className='absolute right-3 top-3 text-xl cursor-pointer  ' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
        )}
        </div>
        

        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg textDecoration: 'none'  " id="underline">
          <p className="mb-6  " >
            Have a account?
          <Link to="/sign-in" className=" text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-2 text-decoration: none" style={{ textDecoration: 'none' }} > Register</Link>
        </p> 
        
        <p>
          <Link to="/forgot-password" className=" text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-2 text-decoration: none" style={{ textDecoration: 'none' }}>Forgot password ?</Link>
        </p>
          
        </div> 
        <button type="submit" className="w-full bg-blue-500 text-white px-7 py-3 text-sm font-medium uppercase rounded-md shadow-md hover:bg-blue-700 transition duration-150 ease-in-out cursor-pointer hover:shadow-lg active:bg-yellow-300  "> Sign In</button>
     <div  className="my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300   " >
     <p className="text-center font-light mx-4 justify-between">OR</p>
     </div>
     <OAuth></OAuth>
      </form>
    </div>

  </div>

    </section> 

    
  );
}

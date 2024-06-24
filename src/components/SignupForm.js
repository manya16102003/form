import React from "react";
import { useState } from "react";
import { AiOutlineEye ,  AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm=({setIsLoggedIn})=>{
    const[formdata , setformdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const[showpassword , setShowpassword]=useState(false)
    const[showconfirmpassword , setShowconfirmpassword]=useState(false)
    const[accountType , setAccountType]=useState("student")
    function changeHandler(event){
        setformdata((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    const navigate=useNavigate();

    function submitHandler(event){
        event.preventDefault();
        if(formdata.password!==formdata.confirmPassword)
            {
                toast.error("Passwords do not match");
                return;
            }
        // console.log(formdata.password)
        // console.log(formdata.confirmPassword)
        // if(formdata.password != formdata.confirmPassword) {
        //     toast.error("Passwords do not match");
        //     return ;
        // }
            setIsLoggedIn(true);
            toast.success("Account created")
            navigate("/dashboard")

            const accountData={
                ...formdata
            }

            const finaldata={
                ...accountData,
                accountType
            }
            console.log("Printing data form")
            console.log(finaldata);
    }

    return (
       
        //student instructor button
        <div>
         <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button
            className={`${accountType==="student" ? 
            "bg-richblack-900 text-richblack-5" 
            : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType==="instructor" ? 
             "bg-richblack-900 text-richblack-5" 
            : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
         </div>

         <form onSubmit={submitHandler}>
            {/* first name and last name */}
            <div className="flex gap-x-4 pb-5">
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name
                    <sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type="text"
                    name="firstname"
                    placeholder="enter your first name"
                    onChange={changeHandler}
                    value={formdata.firstname}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    

                    />
                </label>

                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name
                    <sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type="text"
                    name="lastname"
                    placeholder="enter your last name"
                    onChange={changeHandler}
                    value={formdata.lastname}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />

                    
                </label>
            </div>
          <div className="pb-5">
          <label className="w-full ">
                 {/* email address */}
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address 
                 <sup className="text-pink-200">*</sup></p>
                <input
                required
                type="email"
                name="email"
                placeholder="enter your Email"
                onChange={changeHandler}
                value={formdata.email}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                />
            </label>
          </div>
           
               
               {/* createpassword and confirm password */}

            <div className="flex gap-x-4 pb-5">
               <label className=" w-full relative">
               <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password
                <sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showpassword?("text"):("password")}
                name="password"
                placeholder="enter your Password"
                onChange={changeHandler}
                value={formdata.password}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"

                />
                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={()=> setShowpassword((prev)=>!prev)}>
                {showpassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
            </span>

            </label>

            <label className=" w-full relative">
               <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password
                <sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showconfirmpassword?("text"):("password")}
                name="confirmPassword"
                placeholder="confirm Password"
                onChange={changeHandler}
                value={formdata.confirmPassword}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                />
                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={()=> setShowconfirmpassword((prev)=>!prev)}>
                {showconfirmpassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
            </span>
            </label>

            </div>
            <button className="w-full bg-yellow-50 rounded-[8px] font-medium
            text-richblack-900 px-[12px] py-[8px]">
                Create Account
            </button>
            
          

         </form>
        </div>
        
    
    )
}
export default SignupForm;
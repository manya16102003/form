import React from "react";
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast";
 const Navbar =(props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
            </Link>
            <nav>
                <ul className="flex gap-x-6 text-white">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex item-center gap-x-4">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 text-white py-[8px]
                        px-[12px] rounded-[8px] border border-richblack-700 ">
                            Log In
                        </button>
                    </Link>
                }
                {
                     !isLoggedIn &&
                    <Link to="/signUp">
                        <button className="bg-richblack-800 text-white py-[8px]
                        px-[12px] rounded-[8px] border border-richblack-700">
                           Signup
                        </button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/"
                    onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>
                        <button className="bg-richblack-800 text-white py-[8px]
                        px-[12px] rounded-[8px] border border-richblack-700">
                           Log out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-white py-[8px]
                        px-[12px] rounded-[8px] border border-richblack-700">
                           Dashboard
                        </button>
                     </Link>
                }
            </div>
        </div>
    )
 }
 export default Navbar
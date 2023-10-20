import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useAuthContext } from "../contexts";

const SingIn = () => {
  
  const [dataLogin , setDataLogin] = useState({
    username : "" ,
    password : ""
  })

  const gustsLogin = () => {
    setDataLogin({
      username : "harissadeen",
      password : "123123"
    })
  }

  const {handleSignIn} = useAuthContext()
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-gray-100 h-[80%] w-[80%]  shadow-md grid grid-cols-4">
        <div className="col-span-2  rounded-l-md bg-[#FFCF96] p-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl text-white font-bold mb-14"> Welcome to Yosu Shop  </h1>
            <img className="mb-5" src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/da0c12bab844e3569971.svg" width={300} alt="" />
            <Link to={'/signup'} className="btn w-[70%]"> SignUp </Link>
        </div>
        <div className="col-span-2 rounded-r-md flex flex-col items-center justify-center p-5">
          <h1 className="text-2xl font-bold mb-10">SingIn</h1>
          <form onSubmit={(e)=> {
            e.preventDefault()
            handleSignIn(dataLogin.username , dataLogin.password)}} className="w-full flex flex-col items-center gap-2 ">
          <input onChange={(e)=> {
            setDataLogin({...dataLogin , username : e.target.value})
          }} type="text" placeholder="Username " className="input input-bordered w-full max-w-md" value={dataLogin.username} />
          <input onChange={(e)=> {
            setDataLogin({...dataLogin , password : e.target.value})
          }} type="password" placeholder="********* " className="input input-bordered w-full max-w-md" value={dataLogin.password} />
          <button type='submit' className="btn btn-active btn-primary mt-2 w-full max-w-md"> SingIn </button>
          <button type= "button" onClick={gustsLogin} className="btn btn-active btn-primary mt-2 w-full max-w-md"> Gusts User </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;

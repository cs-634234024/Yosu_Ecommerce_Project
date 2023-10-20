import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/index";

const SignUp = () => {
  const { handleSignUp , error } = useAuthContext();
  const [dataRegis, setDataRegis] = useState({
    username: "",
    password: "",
    confPassword: "",
    email: "",
    fname: "",
    lname: "",
    address: "",
  });

  const handleGuestsData = () => {
    setDataRegis({
      username: "Haris",
      password: "123123",
      confPassword: "123123",
      email: "hairs@gmail.com",
      fname: "haris",
      lname: "sadeen",
      address: "127/5 kampang langu satun ",
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-gray-100 w-[80%]  shadow-md grid grid-cols-4">
        <div className="col-span-2  rounded-l-md bg-[#FFCF96] p-5 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-white font-bold mb-14">
            {" "}
            Welcome to Yosu Shop{" "}
          </h1>
          <img
            className="mb-5"
            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/da0c12bab844e3569971.svg"
            width={300}
            alt=""
          />
          <Link to={"/signin"} className="btn w-[70%]">
            {" "}
            SignIn{" "}
          </Link>
        </div>
        <div className="col-span-2 rounded-r-md flex flex-col items-center p-5">
          <h1 className="text-2xl font-bold mb-10">SignUp</h1>
          <form
            className="w-full flex flex-col items-center gap-2"
            onSubmit={(e)=>{
              e.preventDefault()
              handleSignUp(dataRegis)
            }}
          >
            <input
              onChange={(e) => {
                setDataRegis({ ...dataRegis, username: e.target.value });
              }}
              type="text"
              placeholder="Username "
              className="input input-bordered w-full max-w-md"
              value={dataRegis.username}
            />
            <input
              onChange={(e) => {
                setDataRegis({ ...dataRegis, password: e.target.value });
              }}
              type="password"
              placeholder="********* "
              className="input input-bordered w-full max-w-md"
              value={dataRegis.password}
            />
            <input
              onChange={(e) =>
                setDataRegis({ ...dataRegis, confPassword: e.target.value })
              }
              type="password"
              placeholder="********* "
              className="input input-bordered w-full max-w-md"
              value={dataRegis.confPassword}
            />
            <input
              onChange={(e) =>
                setDataRegis({ ...dataRegis, email: e.target.value })
              }
              type="email"
              placeholder="E-mail "
              className="input input-bordered w-full max-w-md"
              value={dataRegis.email}
            />
            <input
              onChange={(e) =>
                setDataRegis({ ...dataRegis, fname: e.target.value })
              }
              type="text"
              placeholder="First Name "
              className="input input-bordered w-full max-w-md"
              value={dataRegis.fname}
            />
            <input
              onChange={(e) =>
                setDataRegis({ ...dataRegis, lname: e.target.value })
              }
              type="text"
              placeholder="Last Name "
              className="input input-bordered w-full max-w-md"
              value={dataRegis.lname}
            />
            <input
              onChange={(e) =>
                setDataRegis({ ...dataRegis, address: e.target.value })
              }
              type="text"
              placeholder="Address "
              className="input input-bordered w-full max-w-md"
              value={dataRegis.address}
            />
            <h1 className="mt-3 text-start text-red-500" style={!!error === false ? {display: "none"} : {display: 'inline-block'} } > {error}  </h1>
            <button
              type="submit"
              className="btn btn-active btn-primary mt-2 w-full max-w-md"
            >
              {" "}
              SignUP{" "}
            </button>
            <button
              type="button"
              onClick={handleGuestsData}
              className="btn btn-active btn-outline mt-2 w-full max-w-md"
            >
              {" "}
              Guests{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

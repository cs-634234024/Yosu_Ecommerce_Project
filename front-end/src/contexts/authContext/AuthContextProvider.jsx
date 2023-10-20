import React, { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { AUTH_URL, LOGIN_URL, REGISTER_URL } from "../../api/apiConfig";
import { useNavigate } from "react-router-dom";
import { Notify } from "../../utils/notify";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token , setToken] = useState(localStorage.getItem('token'))
  const [error, setError] = useState(null);
  const [authLogin , setAuthLogin] = useState()

  const handleSignUp = async (data) => {
    if (
      (data.username &&
        data.password &&
        data.confPassword &&
        data.email &&
        data.fname &&
        data.lname &&
        data.address) === ""
    ) {
      setError("กรุณากรอกข้อมูลของท่านให้ครบถ้วน");
      if (data.password != data.confPassword) {
        setError("รหัสผ่านของคุณไม่ตรงกัน");
      }
    } else {
      const res = await axios.post(REGISTER_URL, {
        username: data.username,
        password: data.password,
        email: data.email,
        fname: data.fname,
        lname: data.lname,
        address: data.address,
      });
      console.log(res.data);
      if (res.data.message === "username have already") {
        setError("มีผู้ใช้ Username นี้เเล้ว");
        console.log(error);
      }
      if (res.data.status === "ok") {
        Notify("success", "สมัครสมาชิกสำเร็จ");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    }
  };

  const handleSignIn = async (username , password) => {
    const res = await axios.post(LOGIN_URL , {username , password})
    const token = res.data.token
    localStorage.setItem('token' , token) 
    setToken(token)
    console.log(token);
    Notify('success' , `Login Successfully`)
    setTimeout(() => {
      navigate('/')
    }, 1000);
  }

  const authenticationLogin = async () => {
    let isAuthen 
    const headers = {
      'Authorization': `Bearer ${token}`,
    };
    console.log(token);
    const res = await axios.get(AUTH_URL , {headers})
    if(res.data.status === 'ok'){
      setAuthLogin(true)
    }else{
      setAuthLogin(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
    Notify('success' , 'Logout Successfully ')
  }

  return (
    <AuthContext.Provider value={{ handleSignUp, handleSignIn,  error , token , authenticationLogin , authLogin , handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

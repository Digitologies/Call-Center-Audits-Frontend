//send form data in firebase

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import getRole from "../Common/Role";


export default function Signin() {
  const role = getRole()
  const navigate = useNavigate();

  const [user, setUser] = useState({
    loginId: "",
    password: "",
  });

  useEffect(()=>{
    if(role?.userType){
      navigate('/dashboard')
    }
  },[])
  const handleFormData = (event) => {
    const {name, value} = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(process.env.REACT_APP_API)
    const res = await fetch(
      `${process.env.REACT_APP_API}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await res.json()
    console.log(data)
    localStorage.setItem("token",data.token)
    const role = getRole()
    if(role?.userType){
      toast.success(`User login successfully.`)
      navigate('/dashboard')
    }
    else{
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
  }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 bg_clr  p-5">
            <img
              src=""
              class="img-fluid rounded-top"
              alt=""
            />
            
            <h4 className="text-center">Login In</h4>
            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
              <div className="col-md-12 pt-4">
                <label htmlFor="loginId" className="form-label">
                  Login Id
                </label>
                <input
                  type="text"
                  name="loginId"
                  placeholder="Enter Your Email"
                  value={user.loginId}
                  onChange={handleFormData}
                  className="form-control"
                  id="loginId"
                  required
                  
                />
                
                {/* <div className="valid-feedback">Looks good!</div> */}
              </div>
              <div class="col-md-12 pt-4">
                <label htmlFor="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={user.password}
                  onChange={handleFormData}
                  class="form-control"
                  id="password"
                  required
                />
                {/* <div className="valid-feedback">Looks good!</div> */}
              </div>

              <div className="col-12 pt-4   ">
                <button
                  className="btn btn-primary w-100 py-2 "
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import getRole from "../Common/Role";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const role = getRole();
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    loginId: "",
    password: "",
    userType: role?.userType === "Floor Admin" ? "Employee" : "",
    hireDate: getCurrentDateTime(),
    salary: "",
    monthlyGoal: "",
  });

  const [loginIds, setLoginIds] = useState([]);
  const [error, setError] = useState({
    name: "",
    loginId: "",
    password: "",
    userType: "",
    hireDate: "",
  });
  useEffect(() => {
    getLoginIds();
  }, []);
  const getLoginIds = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/api/user`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setLoginIds(data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  function generateRandomNumber() {
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    return randomNumber.toString().substring(0, 6);
  }

  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  const handleLoginIdValidation = (currentLoginId) => {
    const isId = loginIds.filter((data) => data.loginId === currentLoginId);
    console.log(currentLoginId, isId);
    if (isId.length) {
      setError({ ...error, loginId: "login id already exists" });
    } else {
      setError({ ...error, loginId: "" });
    }
  };
  const handleUserForm = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    if (name === "loginId") {
      handleLoginIdValidation(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (error.loginId === "") {
        const res = await fetch(`${process.env.REACT_APP_API}/api/user`, {
          method: "POST",
          headers: {
            access_token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
      
      const data = await res.json();
      setUser({})
      navigate('/employee');
      toast.success(`${data.userType} created successfully`);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div class="container my-4">
        <div class="row justify-content-center">
          <div class="col-md-5 bg_clr p-5">
            <h4 class="text-center">Create {user?.userType} Account</h4>
            <form class="row g-3 needs-validation" onSubmit={handleSubmit}>
              <div class="col-md-12 pt-4">
                {role?.userType === "Admin" && (
                  <>
                 
                      <div className="col-md-12">
                      <label htmlFor="userType" class="form-label">
                      Select user type to continue:
                    </label>

                    <select
                      id="userType"
                      name="userType"
                      value={user.userType}
                      onChange={handleUserForm}
                      required
                      className="form-control"
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      <option value="Employee">Employee</option>
                      <option value="Floor Admin">Floor Admin</option>
                    </select>
                      </div>
                   
                    
                  </>
                )}
              </div>
              {user.userType && (
                <>
                  <div class="col-md-12 pt-4">
                    <label htmlFor="validationCustom01" class="form-label">
                      {user?.userType} Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={`Enter ${user?.userType} Name `}
                      value={user.name}
                      onChange={handleUserForm}
                      class="form-control"
                      id="name"
                      required
                    />
                    {/* <div class="valid-feedback">Looks good!</div> */}
                  </div>
                  <div class="col-md-12 pt-4">
                    <label htmlFor="validationCustom01" class="form-label">
                      {user?.userType} Login Id
                    </label>
                    <input
                      type="text"
                      name="loginId"
                      placeholder={`Enter ${user?.userType} login Id `}
                      value={user.loginId}
                      onChange={handleUserForm}
                      class="form-control"
                      id="loginId"
                      required
                    />
                    {error.loginId && <p className="text-danger">{error.loginId}</p>}
                    {/* <div class="valid-feedback">Looks good!</div> */}
                  </div>
                  <div class="col-md-12 pt-4">
                    <label htmlFor="validationCustom01" class="form-label">
                      Salary in PKR
                    </label>
                    <input
                      type="number"
                      name="salary"
                      placeholder={`Enter Salary`}
                      value={user.salary}
                      onChange={handleUserForm}
                      class="form-control"
                      id="salary"
                      required
                    />
                    {/* <div class="valid-feedback">Looks good!</div> */}
                  </div>
                  <div class="col-md-12 pt-4">
                    <label htmlFor="validationCustom01" class="form-label">
                      Monthly Goal in $
                    </label>
                    <input
                      type="number"
                      name="monthlyGoal"
                      placeholder={`Enter Monthly Goal`}
                      value={user.monthlyGoal}
                      onChange={handleUserForm}
                      class="form-control"
                      id="monthlyGoal"
                      required
                    />
                    {/* <div class="valid-feedback">Looks good!</div> */}
                  </div>
                  {/* <div class="col-md-12 pt-4">
                <label htmlFor="validationCustom03" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={user.email}
                  onChange={getUserData}
                  class="form-control"
                  id="validationCustom03"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div> */}
                  <div class="col-md-12 pt-4">
                    <label htmlFor="validationCustom04" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={user.password}
                      onChange={handleUserForm}
                      class="form-control"
                      id="password"
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>

                  <div class="col-12 pt-4">
                    <button class="btn btn-primary  w-100 py-2" type="submit">
                      Create {user.userType}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

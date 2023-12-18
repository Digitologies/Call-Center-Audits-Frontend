import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeSideBar from "../Common/EmployeeSideBar";
import Navbar from "../Common/Navbar";
import toast from "react-hot-toast";
import getRole from "../Common/Role";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import { formatDateString } from "../utitlity/DateFormate";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";

function Employee() {
  const role = getRole();
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [newPassword, setNewPassword] = useState({
    _id: "",
    newPassword: "",
  });

  const handleClose = () => setShow(false);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!role?.userType || role.userType == "Employee"){
      navigate('/')
    }
    return () => {
        if(role?.userType || role.userType != "Employee"){
            fetchData(); 
          }
      };
  },[])
  const handleSave = async () => {
    try {
      // Perform any validation or checks on newPassword here
      // Example: If newPassword meets certain criteria

      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/user/${newPassword._id}`,
        { password: newPassword.newPassword }
      );

      if (response.status === 200) {
        // Password updated successfully
        setNewPassword("");
        setShow(false);
        toast.success("Password updated successfully");
      } else {
        // Handle unsuccessful response
        toast.error("Failed to update password");
      }
    } catch (error) {
      // Handle any API request errors
      toast.error("Error updating password:", error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/user`,
        {
          headers: {
            access_token: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      setUsers(response.data);
      toast.success("Users fetched successfully");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };
  const handleEditPassword = (userId) => {
    // Implement edit password logic here
    setNewPassword((prev) => ({
      ...prev,
      _id: userId,
    }));
    setShow(true);
    console.log(`Editing password for user ${userId}`);
  };

  const handleDeleteUser = async (userId) => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_API}/api/user/${userId}`,
        {
          headers: {
            access_token: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      //    response = response.JSON()
      console.log(response);

      toast.success(`User deleted successfully`);
    } catch (error) {
      toast.error("Error deleting user:", error.message);
      // Handle error scenarios (e.g., show error message to the user)
    }
    fetchData();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (id) => {
    setShowPassword((prev) => (prev == id ? "" : id));
  };
  return (
    <div className="d-flex" style={{ marginTop: "100px" }}>
      <Navbar />
      <div style={{ width: "20%" }}>
        <EmployeeSideBar />
      </div>
      <div className="px-3">
        <Link
          to={"/sign-up"}
          className="bg-success border border-success text-decoration-none text-dark px-3 py-2 rounded"
        >
          Create User <IoMdPersonAdd />
        </Link>
        {/* Add create user functionality here */}

        <table className="table table-striped">
          <thead className="text-success">
            <tr>
              <th>Name</th>
              <th>Login ID</th>
              <th>Hire Date</th>
              <th>User Type</th>
              <th>Salary</th>
              <th>Monthly Goal</th>
              {role?.userType == "Admin" && <th>Password</th>}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!users.length && (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            )}
            {users?.map((user) => (
              <>
                {user.userType != "Admin" && (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td className="text-primary">{user.loginId}</td>
                    <td>{formatDateString(user.hireDate)}</td>
                    <td>{user.userType}</td>
                    <td>PKR {user?.salary}</td>
                    <td>$ {user?.monthlyGoal}</td>
                    {role?.userType == "Admin" && (
                      <td>
                        {user._id == showPassword ? (
                          <span>{user?.password}</span>
                        ) : (
                          <span>••••••••</span>
                        )}
                        <button
                          className="border border-0 bg-transparent"
                          onClick={() => togglePasswordVisibility(user._id)}
                        >
                          {user._id != showPassword ? (
                            <AiOutlineEye />
                          ) : (
                            <FaRegEyeSlash />
                          )}
                        </button>
                      </td>
                    )}
                    <td>
                      {role?.userType == "Floor Admin" && (
                        <button
                          className="bg-warning p-1 mx-1"
                          onClick={() => handleEditPassword(user._id)}
                        >
                          Edit Password <FaUserEdit />
                        </button>
                      )}
                      {role?.userType == "Admin" && (
                      <button
                        className="bg-danger p-1 "
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete <TiUserDelete />
                      </button>)}
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword?.newPassword}
                onChange={(e) =>
                  setNewPassword((prev) => ({
                    ...prev,
                    newPassword: e.target.value,
                  }))
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Employee;

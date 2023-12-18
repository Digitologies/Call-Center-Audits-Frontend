import React from "react";
import { NavLink } from "react-router-dom";
import getRole from "./Role";

function EmployeeSideBar() {
  const role = getRole();
  return (
    <div className="sidebar">
      <NavLink
        exact
        to="/dashboard"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "gray" : "",
            color: isActive ? "white" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Dashboard
      </NavLink>
      {role?.userType !== "Employee" && (
        <>
          <NavLink
            exact
            to="/employee"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                background: isActive ? "gray" : "",

                color: isActive ? "white" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Employee
          </NavLink>
          <NavLink
            exact
            to="/sales"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                background: isActive ? "gray" : "",
                color: isActive ? "white" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Sales
          </NavLink>
        </>
      )}

      {/* Add more NavLink components for other links */}
    </div>
  );
}

export default EmployeeSideBar;

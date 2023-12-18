import React from "react";
import DisplayFlex from "./Components/DisplayFlex";
import DisplayFlex2 from "./Components/DisplayFlex2";
import Sidebar from "./Common/Sidebar";
import Ecommerce from "./Components/Ecommerce";

export default function CommonCont() {
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Ecommerce />
          </div>
        </div>
      </div>
    </div>
  );
}

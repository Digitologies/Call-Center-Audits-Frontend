import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommonCont from "./CommonCont";
import Ecommerce from "./Components/Ecommerce";
import Navbar from "./Common/Navbar";

import Sidebar from "./Common/Sidebar";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";
import Employee from "./Components/Employee";
import Sales from "./Components/Sales";
import CreateSale from "./Components/CreateSale";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/services" element={<Service />} />
          <Route path="/services/:category" element={<Service />} />
          <Route path="/services/:category/:id" element={<ServicesDetail />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/sales" element={<Sales />}/>
          <Route path="/sales/create" element={<CreateSale />}/>

          <Route path="/employee" element={<Employee />}/>
          <Route path="/dashboard" element={<Ecommerce />} />
          <Route path='/sign-up' element = {<SignUp/>}/>
          <Route path="/" element={<Signin />} />

        </Routes>
      </Router>
      {/* <Sidebar /> */}

      {/* <Sidebar /> */}
       
      {/* <SignUp/> */}
      {/* <CommonCont /> */}
    </>
  );
}

export default App;

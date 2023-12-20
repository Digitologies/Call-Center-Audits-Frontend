import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "../Common/Navbar";
import EmployeeSideBar from "../Common/EmployeeSideBar";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";

function CreateSale() {
    const [formData, setFormData] = useState({
        date: "",
        provider: "",
        companyName: "",
        customerFirstName: "",
        customerLastName: "",
        customerAddress: "",
        btn: "",
        callingNo: "",
        email: "",
        dateOfBirth: "",
        bill: "",
        ssn: "",
        accountNumber: "",
        pin: "",
        accountUserName: "",
        password: "",
        amountOTC: "",
        status: "",
        paymentBy: "",
        merchant: "",
        reason: "",
        description: "",
        authorization: "",
        fileList: [],
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here using formData state
        console.log(formData);
      };
  return (
    <div>
  <Navbar />
    <div className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
  {/* <div style={{ width: "20%" }}>
    <EmployeeSideBar />
  </div> */}
  {/* <div className="px-3">
    <Link
      to={"/sales/create"}
      className="bg-success border border-success text-decoration-none text-dark px-3 py-2 rounded"
    >
      Create Sale <IoMdPersonAdd />
    </Link>

    
  </div> */}
  {/* <h2>Sale</h2> */}
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="date">
      <Form.Label>Date</Form.Label>
      <Form.Control
        type="date"
        placeholder="Enter date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="provider">
      <Form.Label>Provider</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter provider"
        name="provider"
        value={formData.provider}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="companyName">
      <Form.Label>Company Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="customerFirstName">
      <Form.Label>Customer First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Customer First Name"
        name="customerFirstName"
        value={formData.customerFirstName}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="customerLastName">
      <Form.Label>Customer Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter provider"
        name="customerLastName"
        value={formData.customerLastName}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>Customer Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter provider"
        name="customerAddress"
        value={formData.customerAddress}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>BTN</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter provider"
        name="btn"
        value={formData.btn}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>Calling No</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter provider"
        name="callingNo"
        value={formData.callingNo}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>SSN</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter ssn"
        name="ssn"
        value={formData.ssn}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="provider">
      <Form.Label>Date Of Birth</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>BILL</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter bill"
        name="bill"
        value={formData.bill}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    {" "}
    <Form.Group controlId="provider">
      <Form.Label>Account #</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter accountNumber"
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
    </Form.Group>{" "}
    <Form.Group controlId="provider">
      <Form.Label>Amount (OTC)</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter amountOTC"
        name="amountOTC"
        value={formData.amountOTC}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="provider">
      <Form.Label>Merchant</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter merchant"
        name="merchant"
        value={formData.merchant}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="provider">
      <Form.Label>Reason</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter reason"
        name="reason"
        value={formData.reason}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="provider">
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="status">
      <Form.Label>Status</Form.Label>
      <Form.Control
        as="select"
        name="status"
        value={formData.status}
        onChange={handleInputChange}
      >
        <option value="" disabled>
          Select Status
        </option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="paymentBy">
      <Form.Label>Payment By</Form.Label>
      <Form.Control
        as="select"
        name="paymentBy"
        value={formData.paymentBy}
        onChange={handleInputChange}
      >
        <option value="" disabled>
          Select Payment By
        </option>
        <option value="Card">Card</option>
        <option value="Account">Account</option>
      </Form.Control>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
</div>
  )
}

export default CreateSale
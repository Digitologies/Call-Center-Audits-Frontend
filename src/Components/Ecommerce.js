import React, { useEffect } from "react";
import Navbar from "../Common/Navbar";
import EmployeeSideBar from "../Common/EmployeeSideBar";
import getRole from "../Common/Role";
import { useNavigate } from "react-router-dom";

export default function Ecommerce() {
  const role = getRole()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!role?.userType){
      navigate('/')
    }
  },[])
  return (
    <div className="d-flex">
      <Navbar/>
      <div style={{width: "20%",marginTop:"70px"}}>
        <EmployeeSideBar/>
      </div>
      {/* NavBar Start */}
      <div className="mainEcommerce" style={{width: "80%"}}>
        <div className="container-fluid mt-2 pt-5  ">
          <div className="row py-3 Second-navBar ">
            <div className="col-md-8">
              <h4>Home</h4>
            </div>
            <div className="col-md-4">
              <h5>Home ~ DashBoard</h5>
            </div>
          </div>
        </div>

        {/* NavBar Start End */}

        {/* Cards start */}

        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-5 card-left-1">
              <h3>Total Users</h3>
              <h6>277</h6>
            </div>
            <div className="col-md-5 card-left-2">
              <h3>Total Orders</h3>
              <h6>277</h6>
            </div>
            <div className="col-md-5 card-left-3">
              <h3>Total Sales</h3>
              <h6>277</h6>
            </div>
            <div className="col-md-5 card-left-4">
              <h3>Total Products</h3>
              <h6>277</h6>
            </div>
            <div className="col-md-5 card-left-5">
              <h3>Total Reviews</h3>
              <h6>277</h6>
            </div>
            <div className="col-md-5 card-left-6">
              <h3>Chargeback Amount</h3>
              <h6>$</h6>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12  ">
              <div className="row ">
                <div className="col-md-5 card-left-1 mt-3 ">
                  <h4>Total Users</h4>
                  <h3>277</h3>
                </div>
                <div className="col-md-5  card-left-2 mt-3 ">
                  <h4>Total Products</h4>
                  <h3>277</h3>
                </div>
                <div className="col-md-5 card-left-3 mt-3">
                  <h4>Total Orders</h4>
                  <h3>277</h3>
                </div>
                <div className="col-md-5 card-left-4 mt-3">
                  <h4>Total Reviews</h4>
                  <h3>277</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 card-right mt-3 text-white ">
              <h4>Total sales </h4>
              <h3>277</h3>
            </div>
          </div>
        </div> */}
        {/* Cards start End*/}

        {/* Best Selling Products start */}
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
              <h3>Best selling products</h3>
              <div className="table-responsive mt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr className="table-bg-clr text-white">
                      <th scope="col">/</th>
                      <th scope="col">PRODUCT</th>
                      <th scope="col">CATEGORY</th>
                      <th scope="col">BRAND</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">STOCK</th>
                      <th scope="col">ORDER</th>
                      <th scope="col">SALES</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Tops and skirt </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>$14.00</td>
                      <td>30</td>

                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <ul className="table-icons">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 576 512"
                            >
                              <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                            </svg>
                          </li>
                          <li className="mx-3 text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Tops and skirt </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>$14.00</td>
                      <td>30</td>

                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <ul className="table-icons">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 576 512"
                            >
                              <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                            </svg>
                          </li>
                          <li className="mx-3 text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Tops and skirt </td>
                      <td>womans</td>
                      <td>richman</td>
                      <td>$14.00</td>
                      <td>30</td>

                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <ul className="table-icons">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 576 512"
                            >
                              <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                            </svg>
                          </li>
                          <li className="mx-3 text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">4</th>
                      <td>Existing prod </td>
                      <td>womans</td>
                      <td>ecstasy</td>
                      <td>$14.00 </td>
                      <td>30</td>

                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <ul className="table-icons">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 576 512"
                            >
                              <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                            </svg>
                          </li>
                          <li className="mx-3 text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Leather belt </td>
                      <td>mans</td>
                      <td>lubana</td>
                      <td>$14.00</td>
                      <td>23</td>
                      <td>189</td>
                      <td> $9k</td>
                      <td>
                        {" "}
                        <ul className="table-icons">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 576 512"
                            >
                              <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                            </svg>
                          </li>
                          <li className="mx-3 text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/*Table end */}

        {/* pagination start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h5>Showing 12 of 60 Results</h5>
            </div>
            <div className="col-md-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="/">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

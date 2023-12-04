import React, { useEffect, useState } from 'react';
import { Link, useNavigate,Outlet } from "react-router-dom";
import ParticlesComponent from "../components/ParticlesComponent";
import axios from 'axios';


export default function Dashboard() {
  // const employeelist = [
  //   {
  //     id: 1,
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "johndoe@gmail.com",
  //     gender: "Male",
  //     salary: 10000,
  //   },
  //   {
  //     id: 2,
  //     firstName: "Josh",
  //     lastName: "Doe",
  //     email: "joshdoe@gmail.com",
  //     gender: "Male",
  //     salary: 10000,
  //   },
  //   {
  //     id: 3,
  //     firstName: "Bob",
  //     lastName: "Doe",
  //     email: "bobdoe@gmail.com",
  //     gender: "Male",
  //     salary: 10000,
  //   },
  //   {
  //     id: 4,
  //     firstName: "Luck",
  //     lastName: "Doe",
  //     email: "johndoe@gmail.com",
  //     gender: "Male",
  //     salary: 10000,
  //   },
  //   {
  //     id: 5,
  //     firstName: "Susan",
  //     lastName: "Doe",
  //     email: "johndoe@gmail.com",
  //     gender: "Female",
  //     salary: 10000,
  //   },
  // ];


  const [employeelist, setEmployeelist] = useState([]);

  useEffect(() => {
    loadEmployees();
  }
    , []);
  
  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:3001/emp/employees");
    setEmployeelist(result.data.data.employees);

  }
  
  
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  }

  const deleteEmployee = async id => {
    await axios.delete(`http://localhost:3001/emp/employees/${id}`);
    loadEmployees();
  }

  

  

  return (
    <div>
      <div className="flex items-start justify-start pl-5 py-4 text-gray-500 bg-[#282828] ">
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      <div className="container mx-auto min-h-screen min-w-full">
        <ParticlesComponent />

        <div className="flex items-center justify-center min-h-screen min-w-full px-5 ">
          <div className="flex flex-col justify-center items-center relative  p-4 my-10 bg-white rounded-lg  shadow-[0px_0px_25px_10px_#282828]
          sm:w-[90%] md:w-full lg:w-2/3 ">
            
            <div className="flex flex-col justify-center items-center my-3 ">
              <h2 className="mb-2 text-2xl font-bold text-gray-700">
                Welcome to Dashboard
              </h2>
            </div>

            <div className="flex flex-row gap-3 lg:px-12 lg:absolute lg:top-6 lg:right-12  xl:px-0 xl:top-6 xl:right-6">
              <Link to="/employees"> 
                <button className="text-slate-100 bg-sky-700 rounded-xl px-4 py-2 hover:bg-gray-700/50  text-xl ">
                    Add Employee
                  </button>
              </Link>
              <Link to="/">
                <button className="text-slate-700 bg-gray-700/30 rounded-xl px-4 py-2 
                hover:bg-gray-700/50 text-xl " onClick={logout} >
                    Log-out
                  </button>
              </Link>
            </div>

            <div className="w-full sm:flex sm:flex-col sm:justify-between sm:items-center">
              {employeelist.map((employee) => (
                <div key={employee.id}
                  className="flex flex-col justify-between items-left text-slate-700 
                   py-4 px-2 gap-2 border-b-2 border-black rounded-none pb-4 sm:w-full">
                  
                  <div className=" bg-gray-700/30 rounded-xl divide-y">
                    <div className="flex flex-row  gap-16  px-3 py-2">
                      <h4>Full Name:</h4>
                      <p>
                        {employee.firstName} {employee.lastName}
                      </p>
                    </div>
                    <div className="flex flex-row space-x-7 gap-16 px-3 py-2">
                      <h4>Email:</h4>
                      <p>{employee.email}</p>
                    </div>
                    <div className="flex flex-row space-x-4 gap-16 px-3 py-2">
                      <h4>Gender:</h4>
                      <p>{employee.gender}</p>
                    </div>
                    <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                      <h4>Salary:</h4>
                      <p>{employee.salary}</p>
                    </div>

                    <div className="flex flex-row justify-center items-center px-2 py-2 
                    sm:items-right sm:justify-end">
                      <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                        <Link to={`/employees/detail`}><button className="bg-gray-700/30 rounded-xl px-4 py-2 hover:bg-gray-700/50  sm:px-12" > View </button></Link>
                      </div>
                      <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                        <Link to={`/employees/${employee.id}`}><button className="bg-gray-700/30 rounded-xl px-4 py-2 hover:bg-gray-700/50 sm:px-12"> Edit </button></Link>
                      </div>
                      <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                        <Link to="/dashboard"><button className="bg-red-600 text-white rounded-xl px-4 py-2 hover:bg-gray-700/50 sm:px-12" onClick={deleteEmployee} > Delete </button></Link>
                      </div>
                      <Outlet />

                    </div>
                    
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

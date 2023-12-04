import React, { useEffect, useState } from 'react';
import ParticlesComponent from "../components/ParticlesComponent";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const GET_ALL_URL = "http://localhost:3001/emp/employees"
const GET_ONE_URL = "http://localhost:3001/emp/employees/:eid"

export default function EmployeeDetail() {
    
  // const employeelist = [
  //   {
  //     id: 1,
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "johndoe@gmail.com",
  //     gender: "Male",
  //     salary: 10000,
  //   },
  // ];

  const [employeelist, setEmployeelist] = useState([]);

  const { eid } = useParams();
  console.log(eid);

  useEffect(() => {
    axios.get(GET_ALL_URL)
      .then((res) => {
        console.log(res.data.data.employees);
        setEmployeelist(res.data.data.employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (employeelist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <ParticlesComponent />
        <h1 className="text-4xl font-bold text-gray-700 bg-slate-300 rounded-xl
        p-10">Loading...</h1>
      </div>
    );
  }


  return (
    <div>
      <div className="flex flex-col items-start justify-start pl-5 py-4 text-gray-500 bg-[#282828] absolute w-full z-10 ">
        <h1 className="text-4xl font-bold">Employee Detail</h1>
      </div>

      <div className="container mx-auto min-h-screen min-w-full">
        <ParticlesComponent />

        <div className="flex items-center justify-center min-h-screen min-w-fit px-8">
          <div className="flex flex-col justify-center items-center relative w-96  p-4 bg-white rounded-lg md:w-2/3 lg:w-[30%] xl:w-1/4 z-10 shadow-[0px_0px_25px_10px_#1e293b]">
          <Link to="/dashboard" className="absolute top-3 left-2 hover:cursor-pointer">
              <IoArrowBackOutline className="text-4xl text-black" />
            </Link>

            <div className="flex flex-col justify-center items-center pb-3 mb-3">
              <h2 className="text-xl font-bold text-gray-700">
                Employee Detail
              </h2>
            </div>
            

            {employeelist.map((employee) => (
              <div
                key={employee.id}
                className="flex flex-col justify-between items-left text-slate-700 border-solid border-b border-gray-600/50 rounded-none pb-4 gap-2"
              >
                <div className="flex flex-row  gap-20 bg-slate-800/50 px-3 py-2 rounded-xl">
                  <h4>Full Name:</h4>
                  <p>
                    {employee.firstName} {employee.lastName}
                  </p>
                </div>
                <div className="flex flex-row space-x-7 gap-20  bg-slate-500/50 px-3 py-2 rounded-xl">
                  <h4>Email:</h4>
                  <p>{employee.email}</p>
                </div>
                <div className="flex flex-row space-x-4 gap-20 bg-slate-800/50 px-3 py-2 rounded-xl">
                  <h4>Gender:</h4>
                  <p>{employee.gender}</p>
                </div>
                <div className="flex flex-row space-x-5 gap-20 bg-slate-500/50 px-3 py-2 rounded-xl">
                  <h4>Salary:</h4>
                  <p>{employee.salary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

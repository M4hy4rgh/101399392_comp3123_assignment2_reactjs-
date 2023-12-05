import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticlesComponent from "../components/ParticlesComponent";
import axios from "axios";

export default function Dashboard() {
  const [employeelist, setEmployeelist] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8089/emp/employees");
    setEmployeelist(result.data.data.employees);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/emp/employees?id=${id}`);
      loadEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const maskInformation = (char, info) => {
    let maskedPart = "";
    if (char === "a") {
      maskedPart = "*".repeat(info.length);
    } else if (char === "s") {
      const visibleCharacters = Math.min(1, info.length);
      const maskedCharacters = Math.max(info.length - visibleCharacters, 0);
      maskedPart =
        info.substr(0, visibleCharacters) + "*".repeat(maskedCharacters);
    }
    return maskedPart;
  };

  return (
    <div>
      <div className="flex items-start justify-start pl-5 py-4 text-gray-500 bg-[#282828] ">
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      <div className="container mx-auto min-h-screen min-w-full">
        <ParticlesComponent />

        <div className="flex items-center justify-center min-h-screen min-w-full px-5 ">
          <div
            className="flex flex-col justify-center items-center relative  p-4 my-10 bg-white rounded-lg  shadow-[0px_0px_25px_10px_#282828]
          sm:w-[90%] md:w-full lg:w-2/3 "
          >
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
                <button
                  className="text-slate-700 bg-gray-700/30 rounded-xl px-4 py-2 
                hover:bg-gray-700/50 text-xl "
                  onClick={logout}
                >
                  Log-out
                </button>
              </Link>
            </div>

            <div className="w-full sm:flex sm:flex-col sm:justify-between sm:items-center">
              {employeelist.map((employee) => (
                <div
                  key={employee._id}
                  className="flex flex-col justify-between items-left text-slate-700 
                   py-4 px-2 gap-2 border-b-2 border-black rounded-none pb-4 sm:w-full"
                >
                  <div className=" bg-gray-700/30 rounded-xl divide-y">
                    <div className="flex flex-row  gap-16  px-3 py-2">
                      <h4>Full Name:</h4>
                      <p>
                        {maskInformation("s", employee.first_name)
                          .charAt(0)
                          .toUpperCase() +
                          maskInformation("s", employee.first_name).slice(
                            1
                          )}{" "}
                        {maskInformation("s", employee.last_name)
                          .charAt(0)
                          .toUpperCase() +
                          maskInformation("s", employee.last_name).slice(1)}
                      </p>
                    </div>
                    <div className="flex flex-row space-x-7 gap-16 px-3 py-2">
                      <h4>Email:</h4>
                      <p>
                        {maskInformation("s", employee.email)
                          .charAt(0)
                          .toUpperCase() +
                          maskInformation("s", employee.email).slice(1)}
                      </p>
                    </div>
                    <div className="flex flex-row space-x-4 gap-16 px-3 py-2">
                      <h4>Gender:</h4>
                      <p>{maskInformation("s", employee.gender)}</p>
                    </div>
                    <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                      <h4>Salary:</h4>
                      <p>{maskInformation("a", employee.salary.toString())}</p>
                    </div>

                    <div
                      className="flex flex-row justify-center items-center px-2 py-2 
                    sm:items-right sm:justify-end"
                    >
                      <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                        <Link to={`/employees/${employee._id}/detail`}>
                          <button className="bg-gray-700/30 rounded-xl px-4 py-2 hover:bg-gray-700/50  sm:px-12">
                            {" "}
                            View{" "}
                          </button>
                        </Link>
                      </div>
                      <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                        <Link to={`/employees/${employee._id}`}>
                          <button className="bg-gray-700/30 rounded-xl px-4 py-2 hover:bg-gray-700/50 sm:px-12">
                            {" "}
                            Edit{" "}
                          </button>
                        </Link>
                      </div>
                      <div className="flex flex-row space-x-5 gap-16 px-3 py-2">
                        <button
                          className="bg-red-600 text-white rounded-xl px-4 py-2 hover:bg-gray-700/50 sm:px-12"
                          onClick={() => deleteEmployee(employee._id)}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </div>
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

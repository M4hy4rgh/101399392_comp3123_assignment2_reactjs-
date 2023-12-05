import React, { useState, useEffect } from "react";
import { RxTextAlignLeft } from "react-icons/rx";
import { FaWallet } from "react-icons/fa6";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate, useParams} from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import ParticlesComponent from "../components/ParticlesComponent";
import axios from 'axios';

export default function UpdateEmployee() {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
      setFormData({ ...formData, [name]: capitalizeFirstLetter(value) });
  };
 
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    salary: "",
  });


  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const result = await axios.get(`http://localhost:8089/emp/employees/${id}`);
        const employeeData = result.data.data.employees;
        
        employeeData.first_name = capitalizeFirstLetter(employeeData.first_name);
        employeeData.last_name = capitalizeFirstLetter(employeeData.last_name);
        employeeData.email = capitalizeFirstLetter(employeeData.email);

        setFormData(employeeData);
      } catch (err) {
        console.log(err);
        }
    };
    loadEmployee(); 
  }, [id]);
  

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:8089/emp/employees/${id}`, formData);
      console.log(res.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

 



  return (
    <div>
      <div className="flex items-start justify-start pl-5 py-4 text-gray-500 bg-[#282828]  absolute w-full z-10">
        <h1 className="text-4xl font-bold">Employee Update</h1>
      </div>

      <div className="container mx-auto min-h-screen min-w-full">
        <ParticlesComponent />

        <div className="flex items-center justify-center min-h-screen min-w-full px-8">
          <div className="flex flex-col justify-center items-center relative w-96 p-4 bg-white rounded-lg md:w-2/3 lg:w-[30%] xl:w-1/3 z-10  mt-16 shadow-[0px_0px_25px_10px_#282828]">
            <Link
              to="/dashboard"
              className="absolute top-3 left-2 hover:cursor-pointer"
            >
              <IoArrowBackOutline className="text-4xl text-black" />
            </Link>
            <div className="flex flex-col justify-center items-center mb-3">
              <h2 className="mb-2 text-xl font-bold text-gray-700">
                Edit Employee
              </h2>
              <p className="text-sm text-gray-400">
                Please fill the form to Edit the employee.
              </p>
            </div>

            {/* FirstName */}
            <form className="flex flex-col justify-center items-center w-3/4 sm:w-3/4" onSubmit={handleSubmit} autoComplete="false"  >
              <div className="flex flex-col relative w-full">
                <label className="text-gray-400 mb-1">First Name</label>
                <div className="flex relative mx-2 ">
                  <span className="inline-flex items-center justify-center absolute left-0 top-0 w-10 h-full pl-3 pr-3 text-gray-400 scale-[1.2]">
                    <RxTextAlignLeft />
                  </span>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:shadow-outline"
                    placeholder="First Name"
                  />
                </div>
              </div>
              {/* LastName */}
              <div className="flex flex-col relative mt-2 w-full">
                <label className="text-gray-400 mb-1">Last Name</label>
                <div className="flex relative mx-2">
                  <span className="inline-flex items-center justify-center absolute left-0 top-0 w-10 h-full pl-3 pr-3 text-gray-400 scale-[1.2]">
                    <RxTextAlignLeft />
                  </span>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:shadow-outline"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col relative mt-2 w-full">
                <label className="text-gray-400 mb-1">Email</label>
                <div className="flex relative mx-2">
                  <span className="inline-flex items-center justify-center absolute left-0 top-0 w-10 h-full pl-3 pr-3 text-gray-400 scale-[1.2]">
                    <FaEnvelope />
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:shadow-outline"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* gender */}
              <div className="flex flex-col relative mt-2 w-full ">
                <label className="text-gray-400 mb-1">Gender</label>
                <div className="flex relative mx-2">
                  <span className="inline-flex items-center justify-center absolute left-0 top-0 w-10 h-full pl-3 pr-3 text-gray-400 scale-[1.2]">
                    <FaUser />
                  </span>
                  <select
                    value={formData.gender}
                    onChange={handleChange}
                    name="gender"
                    className=" w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                    style={{
                      color:
                      formData.gender === "Male" || formData.gender === "Female"
                      ? "#000"
                      : "#9ca3af", 
                    }}
                  >
                    <option value="">Select...</option>
                    <option value="Male" className="text-black">
                      Male
                    </option>
                    <option value="Female" className="text-black">
                      Female
                    </option>
                  </select>
                </div>
              </div>

              {/* Salary */}
              <div className="flex flex-col relative mt-4 w-full">
                <label className="text-gray-400 mb-1">Salary</label>
                <div className="flex relative mx-2">
                  <span className="inline-flex items-center justify-center absolute left-0 top-0 w-10 h-full pl-3 pr-3 text-gray-400">
                    <FaWallet />
                  </span>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:shadow-outline"
                    placeholder="Salary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col mt-6 w-52 self-center">
                  <button
                  type="submit"
                  name="submit"
                  value="submit"
                    className="w-full h-12 px-6 py-2 font-medium tracking-wide text-white capitalize 
                      duration-200 transform bg-sky-600 rounded-full hover:bg-sky-500 
                    focus:outline-none focus:bg-sky-500 hover:scale-[1.095] transition-all duration-800 ease-linear "
                  >
                    Add Employee
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

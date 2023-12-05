import React, { useState } from "react";
import { RxTextAlignLeft } from "react-icons/rx";
import { FaWallet } from "react-icons/fa6";
import { FaUser, FaEnvelope } from "react-icons/fa";
import ParticlesComponent from "../components/ParticlesComponent";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios";

export default function AddEmployee() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: capitalizeFirstLetter(value) });
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    salary: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8089/emp/employees", formData);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-start justify-start pl-5 py-4  text-gray-500 bg-[#282828] absolute w-full z-10">
        <h1 className="text-4xl font-bold">Add Employee</h1>
      </div>
      <div className="container mx-auto min-h-screen min-w-full">
        <ParticlesComponent />

        <div className="flex items-center justify-center min-h-screen min-w-fit px-8">
          <div className="flex flex-col relative justify-center items-center w-full p-4 bg-white rounded-lg md:w-2/3 lg:w-1/3 z-10 mt-16 shadow-[0px_0px_25px_10px_#282828]">
            <Link
              to="/dashboard"
              className="absolute top-2 left-2 hover:cursor-pointer"
            >
              <IoArrowBackOutline className="text-4xl text-black" />
            </Link>
            <div className="flex flex-col justify-center items-center ">
              <h2 className="mb-2 text-xl font-bold text-gray-700">
                Add Employee
              </h2>
              <p className="text-sm text-gray-400">
                Please fill the form to add a new employee.
              </p>
            </div>

            {/* FirstName */}
            <div className="flex flex-col mt-4 w-80 justify-center ">
              <form
                onSubmit={handleSubmit}
                autoComplete="false"
                className=" flex flex-col"
              >
                <div className="flex flex-col relative ">
                  <label className="text-gray-400 mb-1">First Name</label>
                  <div className="flex relative mx-2">
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
                      required
                    />
                  </div>
                </div>
                {/* LastName */}
                <div className="flex flex-col relative mt-2">
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
                      required
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="flex flex-col relative mt-2">
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
                      required
                    />
                  </div>
                </div>
                {/* gender */}
                <div className="flex flex-col relative mt-2 ">
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
                          formData.gender === "Male" ||
                          formData.gender === "Female"
                            ? "#000"
                            : "#9ca3af",
                      }}
                      required
                    >
                      <option value="" className="text-gray-400">
                        Select...
                      </option>
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
                <div className="flex flex-col relative mt-4">
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
                      required
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <div className="flex flex-col mt-6 w-52  justify-self-center self-center ">
                  <button
                    type="submit"
                    className=" place-self-center w-full h-12 px-6 py-2 font-medium tracking-wide text-white capitalize
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
    </div>
  );
}

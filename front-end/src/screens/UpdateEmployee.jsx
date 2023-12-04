import React, { useState } from "react";
import { RxTextAlignLeft } from "react-icons/rx";
import { FaWallet } from "react-icons/fa6";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import ParticlesComponent from "../components/ParticlesComponent";

export default function UpdateEmployee() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
            <form className="flex flex-col justify-center items-center w-3/4 sm:w-3/4">
              <div className="flex flex-col relative w-full">
                <label className="text-gray-400 mb-1">First Name</label>
                <div className="flex relative mx-2 ">
                  <span className="inline-flex items-center justify-center absolute left-0 top-0 w-10 h-full pl-3 pr-3 text-gray-400 scale-[1.2]">
                    <RxTextAlignLeft />
                  </span>
                  <input
                    type="text"
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
                    value={selectedOption}
                    onChange={handleChange}
                    className=" w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline"
                    style={{
                      color:
                        selectedOption === "Male" || selectedOption === "Female"
                          ? "#000"
                          : "#9ca3af", // Apply different colors based on the selected option
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
                    className="w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:shadow-outline"
                    placeholder="Salary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col mt-6 w-52 self-center">
                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="w-full h-12 px-6 py-2 font-medium tracking-wide text-white capitalize 
                                                       duration-200 transform bg-sky-600 rounded-full hover:bg-sky-500 
                                                      focus:outline-none focus:bg-sky-500 hover:scale-[1.095] transition-all duration-800 ease-linear "
                  >
                    Add Employee
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

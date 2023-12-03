const express = require("express");
const employeeModel = require("../model/employee.js");
const router = express.Router();

//Get all employees
router.get("/employees", async (req, res) => {
  try {
    const employees = await employeeModel.find();
    if (employees.length === 0) {
      res.status(404).json({
        status: "fail",
        message: "No employees found",
      });
    } else {
      res.status(200).json({
        status: "success",
        results: employees.length,
        data: {
          employees,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

// create an employee
router.post("/employees", async (req, res) => {
  try {
    const employeeExist = await employeeModel.findOne({
      email: req.body.email,
    });

    if (employeeExist) {
      res.status(400).json({
        status: "fail",
        message: "Employee already exists",
      });
    } else {
      const newEmployee = await employeeModel.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          employee: newEmployee,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

// get an employee by id - parametrized route
router.get("/employees/:eid", async (req, res) => {
  try {
    const employee = await employeeModel.findById(req.params.eid);
    if (!employee) {
      res.status(404).json({
        status: "failed",
        message: "No employee found",
      });
    } else {
      res.status(200).json({
        status: "successful",
        data: {
          employee,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

// update an employee by id - parametrized route
router.put("/employees/:eid", async (req, res) => {
  const employee = await employeeModel.findById(req.params.eid);
  if (!employee) {
    res.status(404).json({
      status: "failed",
      message: "No employee found",
    });
  } else {
    const updatedEmployee = await employeeModel.findByIdAndUpdate(
      req.params.eid,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "successful",
      data: {
        employee: updatedEmployee,
      },
    });
  }
});

// delete an employee by id - query parameter route
router.delete("/employees", async (req, res) => {
  const employeeId = req.query.eid; // Get the employee ID from the query parameter
  if (!employeeId) {
    res.status(400).json({
      status: "failed",
      message: "Employee ID (eid) is required in the query parameter.",
    });
  } else {
    try {
      const employee = await employeeModel.findByIdAndDelete(employeeId);
      if (!employee) {
        res.status(404).json({
          status: "failed",
          message: "No employee found",
        });
      } else {
        res.status(204).json();
      }
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    }
  }
});

module.exports = router;

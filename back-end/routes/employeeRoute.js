const express = require("express");
const employeeModel = require("../model/employee.js");
const router = express.Router();

//Get all employees
router.get("/employees", async (req, res) => {
  try {
    const employees = await employeeModel.find();
    if (employees.length === 0) {
      res.status(404).json({
        status: 404,
        message: "No employees found",
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "successfull",
        results: employees.length,
        data: {
          employees,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
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
        status: 400,
        message: "Employee already exists",
      });
    } else {
      const newEmployee = await employeeModel.create(req.body);
      res.status(201).json({
        status: 201,
        message: "successfull",
        data: {
          employees: newEmployee,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

// get an employee by id - parametrized route
router.get("/employees/:id", async (req, res) => {
  try {
    const employees = await employeeModel.findById(req.params.id);
    if (!employees) {
      res.status(404).json({
        status: 404,
        message: "No employee found",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: {
          employees,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 404,
      message: err.message,
    });
  }
});

// update an employee by id - parametrized route
router.put("/employees/:id", async (req, res) => {
  const employees = await employeeModel.findById(req.params.id);
  if (!employees) {
    res.status(404).json({
      status: 404,
      message: "No employee found",
    });
  } else {
    const updatedEmployee = await employeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: 200,
      message: "successfull",
      data: {
        employees: updatedEmployee,
      },
    });
  }
});

// delete an employee by id - query parameter route
router.delete("/employees", async (req, res) => {
  const employeeId = req.query.id; // Get the employee ID from the query parameter
  if (!employeeId) {
    res.status(400).json({
      status: 400,
      message: "Employee ID (eid) is required in the query parameter.",
    });
  } else {
    try {
      const employee = await employeeModel.findByIdAndDelete(employeeId);
      if (!employee) {
        res.status(404).json({
          status: 404,
          message: "No employee found",
        });
      } else {
        res.status(204).json({
          status: 204,
          message: "successfully deleted",
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  }
});

module.exports = router;

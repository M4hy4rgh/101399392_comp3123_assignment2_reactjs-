const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    maxlength: 100,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    maxlength: 50,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

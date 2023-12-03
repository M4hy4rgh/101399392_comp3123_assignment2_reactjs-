const express = require("express"); // Import express
const router = express.Router(); // Create a router object
const userModel = require("../model/user.js"); // Import user.js
const bcrypt = require("bcrypt"); // Import bcrypt

//Creat a new user
router.post("/signup", async (req, res) => {
  try {
    const saltRounds = 10; // Number of salt rounds, higher is more secure
    const plainPassword = req.body.password; // Replace with the actual user's password

    // Hash the password to be 50 characters long
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash.substring(0, 50));
        }
      });
    });

    // Create a new user
    const user = await userModel.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Send the response
    res.status(201).json({
      status: "Signup Successful",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

//login a user

router.post("/login", async (req, res) => {
  const { username, password, email } = req.body;
  
  try {
    // Find the user by username or email
    const user = await userModel.findOne({
      $or: [{ username: username }, { email: username }],
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed, User Not Found." });
    }

    // Compare the user's password with the hashed password
    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Authentication failed, invalid username or passwrod",
      });
    }

    // User is authenticated, you can generate a token or set a session here

    return res.status(200).json({
      status: "True",
      username: user.username,
      message: "Login successful",
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router; // Export router object

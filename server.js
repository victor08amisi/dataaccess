//Import Node JS library
import express from "express";

//Create an instance of express
const app = express();
//Middleware to parse JSON request bodies
app.use(express.json());

//Import the users data and dotenv for environment variables
import dotenv from "dotenv";
dotenv.config();
const port = process.env.port || 3000;

// Import important functions and data
import { getUserById, filterByRole } from "./function.js";
import users from "./users.js";

let isAuthenticated = false;

// Root user from environment variables
const authenticatedUser = {
  username: process.env.username,
  password: process.env.password,
  role: process.env.role,
  securityClearance: process.env.security_clearance,
};

app.get("/", (req, res) => {
  res.send("Welcome to the User Management API");
});

// Endpoint to get user all users if the clearance level is high, otherwise return access denied
app.get("/users", (req, res) => {
  if (isAuthenticated && authenticatedUser.securityClearance === "high") {
    res.status(200).json(users);
  } else {
    res
      .status(403)
      .json({ message: "Access Denied: Insufficient security clearance" });
  }
});

// Using route parameter to get user based on Id
app.get("/users/:id", (req, res) => {
  if (isAuthenticated && authenticatedUser.securityClearance === "high") {
    const { id } = req.params;
    getUserById(parseInt(id), users, res);
  } else {
    res
      .status(403)
      .json({ message: "Access Denied: Insufficient security clearance" });
  }
});

// Using route parameter to get user based on role
app.get("/users/role/:role", (req, res) => {
  if (isAuthenticated && authenticatedUser.securityClearance === "high") {
    const { role } = req.params;
    filterByRole(role, users, res);
  } else {
    res
      .status(403)
      .json({ message: "Access Denied: Insufficient security clearance" });
  }
});

// Endpoint to get authenticated
app.post("/auth", (req, res) => {
  let { username, password } = req.body;

  if (
    username === authenticatedUser.username &&
    password === authenticatedUser.password
  ) {
    isAuthenticated = true;
    res.status(200).json({
      message: "Authentication successful",
      role: authenticatedUser.role,
      user: authenticatedUser.username,
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

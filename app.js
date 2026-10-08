// Import Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define the server port
const PORT = 3000;

// Import user routes
const userRoute = require("./route/user");



// Middleware
// Allows the server to read JSON data from request body
app.use(express.json());

//it itercept the request- mdilleware
const isVaild = (req,res, next)=>{
   console.log("hii...");
   console.log(req.query.token);

   if(req.query.token==="123"){
    next(); 
   }else{
    res.status(401).json({message:"Unauthorized...."})
   }

   next();
}

// User routes
// All routes inside userRoute will start with /users
// Example: GET /users, POST /users
app.use("/api/users",isVaild, userRoute);

// -------------------------
// Basic API Route
// -------------------------

// GET request to /api
// app.get("/api", (req, res) => {

//   // Business logic
//   // Authentication
//   // Authorization
//   // Validation
//   // Security / Attack protection
//   // Database operation
//   // Offer / other logic

//   res.send("Hello World!");
// });


// -------------------------
// Start Server
// -------------------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
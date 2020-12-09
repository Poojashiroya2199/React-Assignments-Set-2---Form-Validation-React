// import React, { useState } from "react";
// import "../styles/App.css";
// import { Button } from "@material-ui/core";
// const App = () => {
//   const [account, setaccount] = useState({
//     username: "",
//     email: "",
//     gender: "Male",
//     phonenum: "",
//     password: ""
//   });
//   const [error, setError] = useState({ message: "" });
//   const handlechange = (property, event) => {
//     const accountCopy = {
//       ...account
//     };
//     accountCopy[property] = event.target.value;
//     setaccount(accountCopy);
//     validate(property);
//   };
//   const validateUsername = () => {
//     const errorCopy = { ...error };
//     if (isEmpty(account.username)) {
//       errorCopy.message = "All fields are mendatory";
//     } else if (account.username.length < 5) {
//       errorCopy.message = `Name is not alphanumeric`;
//     } else {
//       errorCopy.message = "";
//     }
//     setError(errorCopy);
//   };
//   const isEmpty = (val) => !val || !val.trim();
//   const validatePassword = () => {
//     const errorCopy = { ...error };
//     if (isEmpty(account.password)) {
//       errorCopy.message = "All fields are mendatory";
//     } else if (account.password.length < 6) {
//       errorCopy.message = `Password must contain atleast 6 letters`;
//     } else {
//       errorCopy.message = "";
//     }
//     setError(errorCopy);
//   };
//   const validateEmail = () => {
//     const errorCopy = { ...error };
//     if (isEmpty(account.email)) {
//       errorCopy.message = "All fields are mendatory";
//     } else if (account.email.includes(" ")) {
//       errorCopy.message = "Email cannot contain a space";
//     } else if (!account.email.includes("@")) {
//       errorCopy.message = "Email must contain @";
//     } else {
//       errorCopy.message = "";
//     }
//     setError(errorCopy);
//   };
//   const validatePhonenum = () => {
//     const errorCopy = { ...error };
//     if (isEmpty(account.phonenum)) {
//       errorCopy.message = "All fields are mendatory";
//     } else if (account.phonenum.includes(" ")) {
//       errorCopy.message = "Phone number cannot contain space";
//     } else {
//       errorCopy.message = "";
//     }
//     setError(errorCopy);
//   };
//   const validateGender = () => {
//     const errorCopy = { ...error };
//     let string = account.gender.toLowerCase();
//     if (isEmpty(account.gender)) {
//       errorCopy.message = "All fields are mendatory";
//     } else if (
//       string !== "male" ||
//       string !== "female" ||
//       string !== "others"
//     ) {
//       errorCopy.message = "Please identify as male, female or others";
//     } else {
//       errorCopy.message = "";
//     }
//     setError(errorCopy);
//   };
//   const validate = (property) => {
//     if (property === "username") {
//       validateUsername();
//     } else if (property === "password") {
//       validatePassword();
//     } else if (property === "email") {
//       validateEmail();
//     } else if (property === "phonenum") {
//       validatePhonenum();
//     } else if (property === "gender") {
//       validateGender();
//     }
//   };
//   const [welcome, setwelcome] = useState("");
//   const handleLogin = () => {
//     if (error.message === "") {
//       let name = account.email.split("@");
//       setwelcome(`Hello ${name[0]}`);
//     }
//   };
//   return (
//     <div id="main" className="displaydiv">
//       <div> {welcome}</div>
//       <div>{error.message}</div>
//       <h3>Name</h3>
//       <input
//         value={account.username}
//         onChange={(event) => handlechange("username", event)}
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         error={error.message}
//         // helperText={error.message}
//         id="username"
//         label="Username"
//         name="username"
//         autoFocus
//         data-testid="name"
//       />
//       <h3>Email Id</h3>
//       <input
//         data-testid="email"
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         name="EmailId"
//         label="EmailId"
//         error={error.message}
//         // helperText={error.message}
//         type="email"
//         id="email"
//         autoComplete="current-email"
//         value={account.email}
//         onChange={(event) => handlechange("email", event)}
//       />
//       <h3>Phone number</h3>
//       <input
//         data-testid="phoneNumber"
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         name="MobileNumber"
//         label="Mobile No."
//         error={error.message}
//         // helperText={error.message}
//         type="number"
//         id="number"
//         autoComplete="current-num"
//         value={account.phonenum}
//         onChange={(event) => handlechange("phonenum", event)}
//       />
//       <h3>Password</h3>
//       <input
//         data-testid="password"
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         error={error.message}
//         // helperText={error.message}
//         type="password"
//         id="password"
//         autoComplete="current-password"
//         value={account.password}
//         onChange={(event) => handlechange("password", event)}
//       />
//       <h3>Gender</h3>
//       <input
//         data-testid="password"
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         name="gender"
//         label="gender"
//         error={error.messsage}
//         // helperText={error.message}
//         type="text"
//         id="gender"
//         autoComplete="current-gender"
//         value={account.gender}
//         onChange={(event) => handlechange("gender", event)}
//       />
//       <div className="submit">
//         <Button
//           data-testid="submit"
//           variant="contained"
//           color="primary"
//           onClick={handleLogin}
//         >
//           submit
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
import "../styles/App.css";
import Login from "./Login";

const App = () => {
  return (
    <div id="main">
      <Login />
    </div>
  );
};

export default App;

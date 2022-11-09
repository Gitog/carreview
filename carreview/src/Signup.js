// import React from "react";
// import SignUp from "./SignUp";
// import { Route, Routes } from "react-router-dom";
// import SignIn from "./SignIn";
// import ReviewForm from "./ReviewForm";
// import AddCar from "./AddCar";
// function Main() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="/signIn" element={<SignIn />} />
//         <Route path="/reviews" element={<ReviewForm />} />
//         <Route path="/newcar" element={<AddCar />} />
//       </Routes>
//     </div>
//   );
// }

// export default Main;

import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <section id="signUp" className="page">
        <div className="form">
          <form action="#" id="signUpForm">
            <span className="closeBtn">
              <Link to="/">
                <i className="fas fa-times"></i>
              </Link>
            </span>
            <div className="container-1">
              <h1 className="h1">Register</h1>
              <br></br>
              <p>Please fill in this form to have an account.</p>
              <br></br>

              <label htmlFor="full-name">
                <b>Full_name</b>
              </label>
              <input
                className="input"
                type="text"
                placeholder="Enter full_name"
                name="full-name"
                id="full-name"
                required
              />
              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input
                className="input"
                type="text"
                placeholder="Enter username"
                name="username"
                id="username"
                required
              />
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                required
              />
              <label htmlFor="gender">
                <b>Gender</b>
              </label>
              <input
                className="input"
                type="text"
                placeholder="Enter your gender"
                name="gender"
                id="gender"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
              />

              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                className="input"
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
              />

              <p>
                By creating an account you agree to our{" "}
                <a href="/">Terms & Privacy</a>.
              </p>
              <button type="submit" className="registerbtn" id="registerbtn">
                Register
              </button>
            </div>

            <div className="container-signin">
              <p>
                Already have an account?{" "}
                <a href="/signIn" id="signIn">
                  Sign in
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;

import React from "react";
import SignUp from "./SignUp";
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import ReviewForm from "./ReviewForm";
import AddCar from "./AddCar";
function Main() {
  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/reviews" element={<ReviewForm/>}/>
        <Route path="/newcar" element={<AddCar/>}/>

      </Routes>
    </div>
  );
}

export default Main;
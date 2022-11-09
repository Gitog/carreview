import React from "react";
import { Link } from "react-router-dom";

function AddCar() {
  return (
    <div className="form">
      <form action="post">
        <span className="closeBtn">
          <Link to="/">
            <i className="fas fa-times"></i>
          </Link>
        </span>
        <div className="container">
          <h1 className="h1">Add new car</h1>
          <br></br>
          <label htmlFor="make">
            <b>Car Make</b>
          </label>
          <input
            className="input"
            type="text"
            placeholder="what is the make of the car"
            name="make"
            id="make"
            required
          />
          <label htmlFor="model">
            <b>Car Model</b>
          </label>
          <input
            className="input"
            type="text"
            placeholder="what is the model of the car"
            name="model"
            id="model"
            required
          />
          <label htmlFor="url">
            <b>Image_url</b>
          </label>
          <input
            className="input"
            type="url"
            placeholder="https://example.com"
            name="url"
            id="url"
            required
          />
          <label htmlFor="price">
            <b>Price</b>
          </label>
          <input
            className="input"
            type="text"
            name="currency-field"
            id="currency-field"
            data-type="currency"
            placeholder="$1,000,000.00"
          />
          <button type="submit" className="registerbtn" id="registerbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddCar;

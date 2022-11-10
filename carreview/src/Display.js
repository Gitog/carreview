import React, {useEffect, useState} from 'react';
import {Link,NavLink} from 'react-router-dom'
import logo from './Assets/logo.png'
import "./App.css";
import Footer from './Footer';

function Display() {
  const [cars, setCars]= useState([])
  const [make, setMake] = useState("");
   const [model, setModel]= useState("")
   const [price, setPrice] = useState(0)
   const [image_url, setImage_url]=useState("")

  const url = "http://localhost:9292/cars";

   useEffect(() => {
    fetch(url)
       .then((res) => res.json())
       .then((cars) => {
         setCars(cars);
       })

       .catch((error) => {
         console.error("console error:", error);
         console.log("Error!");
       });
  }, []);

  const carsList= cars.map((car)=>(
    <div className='cardiv' key={car.id}>
      <img src={car.image_url} className="carimage"/>
      <h4 className='carh4'>{car.make}</h4>
      <h4 className='carh4'>{car.model}</h4>
      <h5 className='carh5'>Kshs {car.price}</h5>
      <button onClick={()=>handleDelete(car.id)}>Delete Car</button>

      <div className="textarea-01">
          <form onSubmit={handleSubmit}>
            <h5 className="h5">Leave your comment</h5>
            <textarea
              placeholder="Leave your review"
              rows="4"
              cols="50"
            ></textarea>
            <h5 className="h5">Leave your rating (1-10)</h5>

            <input
              className="input"
              type="number"
              min="1"
              max="10"
              placeholder="add-rating"
            ></input>
            <button
              type="submit"
              className="registerbtn"
              href="/"
              onClick = {handleClick}
            >
              Submit Review
            </button>
          </form>
        </div>

    </div>
  ))

  function handleClick(){
    alert("Sent Review!")
  }

  function handleDelete(id){
     fetch(`http://localhost:9292/cars/${id}`,{
      method: "DELETE"
     })
     setCars(cars.filter((car)=> car.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault()
     const carObject={
         make,
         model,
         image_url,
         price
     }

     fetch('http://localhost:9292/new_car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carObject)
    })
  }

  return (
    <div>

        <div className="header">
          <NavLink to="/">
            <img src = {logo} alt="Car Review" id="h-t"/>
          </NavLink>
        </div>
        
        <div>
          <form action="post" onSubmit={handleSubmit}>
        <span className="closeBtn">
          <Link to="/">
            <i className="fas fa-times"></i>
          </Link>
        </span>
        <div className="container-1">
          <h1 className="h1">Add new car</h1>
          <br></br>
          <label htmlFor="car">
            <b>Car Make</b>
          </label>
          <input
            className="input"
            type="text"
            placeholder="what is the car of the car"
            name="car"
            id="car"
            onChange={(e)=>setMake(e.target.value)}
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
            onChange={(e)=>setModel(e.target.value)}
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
            onChange={(e)=>setImage_url(e.target.value)}
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
            onChange={(e)=>setPrice(e.target.value)}
          />
          <button type="submit" className="registerbtn" id="registerbtn">
            Submit
          </button>
        </div>
      </form>

        </div>

     <div className='cars'>
      {carsList} 

      

     </div>
      <Footer />
    </div>
  );
}

export default Display;

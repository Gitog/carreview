import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function AddCar() {
  //  const [search, setSearch] = useState([]);
   
   const [carMake, setCarMake]=useState([])
   const [make, setMake] = useState("");
   const [model, setModel]= useState("")
   const [price, setPrice] = useState(0)
   const [image_url, setImage_url]=useState("")
   
   
  //  const [copySearch, setcopySearch] = useState([]);
   const url = "http://localhost:9292/cars";

   function fetcher() {
     fetch(url)
       .then((res) => res.json())
       .then((result) => {
         // console.log(result);
        //  setSearch(result);
         setCarMake(result);
        //  setcopySearch(result);
       })

       .catch((error) => {
         console.error("console error:", error);
         console.log("Error!");
       });
   }

   const makeList = carMake.map((make) => (
     // const uniqueMake = [...new Set(make.make)]
     <button id="product">{make.make}</button>
     // </div>
   ));
   function handleSubmit(e){
    e.preventDefault()
    const car = {
      make,model,price,image_url
    }

    console.log(car)
    
    fetch('http://localhost:9292/new_car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
  }

   // function onlyUnique(value, index, self) {
   //   return self.indexOf(value) === index;
   // }
   // var a = ['a', 1, 'a', 2, '1'];
   // var unique = makeList.filter(onlyUnique);

   // console.log(unique); // ['a', 1, 2, '1']

   useEffect(() => {
     fetcher();
   }, []);

  return (
    <div className="form">
      <div>
        <h2 className="browse">Browse Our Categories</h2>
        <div className="browser-section">
          <div className="api">
            {makeList[0]}
            {makeList[11]}
            {makeList[2]}
            {/* <button id="product">Mercedes</button>
            <button id="product">Audi</button>
            <button id="product">Mazda</button> */}
          </div>
          <div className="api">
            {makeList[6]}
            {makeList[4]}
            {makeList[5]}
          </div>
          <div className="api">
            {makeList[19]}
            {makeList[10]}
            {makeList[14]}
          </div>
        </div>
      </div>
      <form action="post" onSubmit={handleSubmit}>
        <span className="closeBtn">
          <Link to="/">
            <i className="fas fa-times"></i>
          </Link>
        </span>
        <div className="container-1">
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
      <Footer></Footer>
    </div>
  );
}
export default AddCar;

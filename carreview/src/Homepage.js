import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";
import "./App.css";

function Homepage() {
  const [search, setSearch] = useState([]);
  const [copySearch, setcopySearch] = useState([]);
  const url = "https://random.dog/woof.json";

  function fetcher() {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setSearch(result);
        setcopySearch(result);
      })
      .catch((error) => {
        console.error("console error:", error);
        console.log("Error!");
      });
  }

  useEffect(() => {
    fetcher();
  }, []);

  function handleChange(event) {
    let searching = event.target.value.toLowerCase();
    setSearch(
      copySearch.filter((val) =>
        val.description.toLowerCase().includes(searching)
      )
    );
  }

  return (
    <div>
      {/* NAVBAR */}

      <div className="container">
        {/* Home heading */}
        <div className="header">
          <NavLink to="/">
            <h2 id="h-t">ProductReview</h2>
          </NavLink>
        </div>

        {/* Search  */}

        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            // onBlur ={handleChange}
          ></input>
          <label>
            <select>
              <option value="car1">Car1</option>
              <option value="car2">Car2</option>
              <option value="car3">Car3</option>
              <option value="car1">Car1</option>
              <option value="car2">Car2</option>
              <option value="car3">Car3</option>
            </select>
          </label>
        </div>

        {/* Sign In */}
        <div>
          <Link to="./signin">
            <button className="btn-sign">Sign In</button>
          </Link>
        </div>

        {/* Reviews */}
        <div className="h-review">
          <Link to="/cars">
            <h2>Add to Cars</h2>
          </Link>
        </div>
      </div>

      {/*BODY */}
      <div className="section-b">
        <div>
          <h2 className="browse">Browse Our Categories</h2>
          <div className="browser-section">
            <div className="api">
              <button id="product">Mercedes</button>
              <button id="product">Audi</button>
              <button id="product">Mazda</button>
            </div>
            <div className="api">
              <button id="product">BMW</button>
              <button id="product">Subaru</button>
              <button id="product">Lexus</button>
            </div>
            <div className="api">
              <button id="product">Hyundai</button>
              <button id="product">Ferari</button>
              <button id="product">Tuk Tuk</button>
            </div>
          </div>
        </div>
        <h2 className="reviews">Our Latest Reviews</h2>
        <div className="images">
          <div>
            <img
              src={require("./Assets/joshua-koblin-eqW1MPinEV4-unsplash.jpg")}
              height="300"
              className="image1"
              alt="mazda"
            ></img>
            <h3 className="name">Audi RS3</h3>
            <h5>Brand name</h5>
            <h5>the make</h5>
            <h5>released 2022, August</h5>
            <img
              className="logo"
              height="50"
              width="70"
              src={require("./Assets/christina-wocintechchat-com-swi1DGRCshQ-unsplash.jpg")}
              alt="logo"
            ></img>
            <p className="desc">
              I used to think the Subaru BRZ was the best sports car until I
              drove MX-5.its basic in features but its driving perfection.Find
              out why.
            </p>
          </div>

          <div>
            <img
              src={require("./Assets/kenny-leys-CSNYeLpEbp0-unsplash.jpg")}
              height="300"
              className="image2"
              alt="premio"
            ></img>
            <h3 className="name">Toyota C-HR Hybrid</h3>
            <h5>Brand name</h5>
            <h5>the make</h5>
            <h5>released 2022, August</h5>
            <img
              className="logo"
              height="50"
              width="70"
              src={require("./Assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg")}
              alt="logo"
            ></img>
            <p className="desc">
              Mazda's first EV is a pretty good one and makes for a great city
              car. However, it has stiff competition from the likes of Polestar
              and Tesla.
            </p>
          </div>

          <div>
            <img
              src={require("./Assets/erik-mclean-NPAtNXuJBUg-unsplash (1).jpg")}
              height="300"
              className="image3"
              alt="mazda"
            ></img>
            <h3 className="name">Audi RS3</h3>
            <h5>Brand name</h5>
            <h5>the make</h5>
            <h5>released 2022, August</h5>
            <img
              className="logo"
              id="p-last"
              height="50"
              width="70"
              src={require("./Assets/christina-wocintechchat-com-swi1DGRCshQ-unsplash.jpg")}
              alt="logo"
            ></img>
            <p id="p-last" className="desc">
              I used to think the Subaru BRZ was the best sports car until I
              drove MX-5.its basic in features but its driving perfection.Find
              out why.
            </p>
          </div>
        </div>
        <Link to = "./reviews">
          <button className="btn-explore">Explore</button>
        </Link>
      </div>
      <div>
        <h2 className="reviews">Your opinion matters</h2>
        <Link to="./signup">
          <button className="share">Sign up and explore cars</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;

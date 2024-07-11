import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import burger from '../components/imagereact/burgers.jpg'
import momo from '../components/imagereact/momo-king.jpg'
import roll from '../components/imagereact/spring roll.jpg'
import '../components/Carouse.css'

import { useEffect, useState } from "react";
// in react there is not child to parent relation but in anguler js is exist so if carousel is child component of hoempage then we cant send the data from carousel to home
export default function Home() {
  // map used in array not object ->{} so use array means this->[]
  const [search,setsearch]=useState('')
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
  //use async becouse fetch api is async
  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json(); //array to json
    setfoodcat(response[1]);
    setfooditem(response[0]);
  };

  useEffect(() => {
    loaddata();
  }, []); //[]mean no dependency or not dependent to others element state like footer navbar etc ,on 1st loading

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-caption carousel-caption-custom">
      <div className="d-flex justify-content-center " style={{zIndex:"10"}}>
        <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} aria-label="Search"/>
       
      </div>
    </div>
    <div className="carousel-item active">
      <img className="d-block w-100 img-fluid" style={{ height: "900px", filter: "brightness(60%)" }} src={burger} alt="First slide" />
      <h5 className="carousel-heading">“Life is too short to miss out on beautiful burgers.”</h5>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img-fluid" style={{ height: "900px", filter: "brightness(60%)" }} src={roll} alt="Second slide" />
      <h5 className="carousel-heading">“The secret ingredient is always spring rolls.”</h5>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img-fluid" style={{ height: "900px", filter: "brightness(60%)" }} src={momo} alt="Third slide" />
      <h5 className="carousel-heading">"Never saying no to momos."</h5>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>
      <div className="container">
        {foodcat !== []
          ? foodcat.map((data) => {
              return (
                <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {
                fooditem !== []
                ?fooditem.filter((item)=>(item.CategoryName===data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase()))
                ).map(filteritems=>{
                  return (
                    <div key={filteritems._id} className="col-12 col-md-6 col-lg-3">
                     <Card foodItem={filteritems}
                     options={filteritems.options[0]}
                     >
                      
                     </Card>
                    </div>
                  )
                })
                :<div>No Such Data Found</div>
              }
                </div>
              );
            })
          : ""}
        
      </div>
      {/* <div>body</div> */}
      <div>
        <Footer />
      </div>
    </div>
    </div>
  );
}

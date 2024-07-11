import React from 'react'
import burger from './imagereact/burgers.jpg'
import momo from './imagereact/momo-king.jpg'
import roll from './imagereact/spring roll.jpg'
import '../components/Carouse.css'
// import { Link } from 'react-router-dom'
export default function Carousel() {
  return (
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
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
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


  </div>
  )
}

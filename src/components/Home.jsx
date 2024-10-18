import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import vegtable from '../components/image/veg1bg.png'
const Home = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={vegtable} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3" style={{fontFamily:'Playfair Display'}} >Online Vegetable Market</h1>
        <p className="lead" >We Deliver fresh and organic vegetables directly from the Farmers with the Initial price </p>
        <p className="lead">Here,Wholesale vegetables and retail will be available</p>
        
        <p className="lead">Free Delivery</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-success btn-lg px-4 me-md-2">Shop your Veg</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
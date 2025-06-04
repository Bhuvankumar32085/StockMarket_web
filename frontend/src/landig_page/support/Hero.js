import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mt-5" id="supportWrapper">
          <h3>Support portal</h3>
          <a href="">Track Tickets</a>
      </div>
      <div className="row ps-5 pe-5 pb-5" id="supportWrapper2">
          <div style={{lineHeight:'50px'}} className="col-6 p-5 "> 
            <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
            <input className="me-3" style={{width:'300px',height:'39px'}} placeholder="Eg. how do i activate F&O,"/>
            <a href="">Track account opening</a>
            <a href="">Track segment activation </a>
            <a href="">Intraday margins </a>
            <a href="">Kite user manual</a>
          </div>
          <div  className=" aa col-6 p-5">
            <h1 className="fs-3">Featured</h1>
            <a href="">Rights Entitlements listing in May 2025</a>
            <br/>
            <a href="">Offer for sale (OFS) – May 2025</a>
          </div>
      </div>
    </section>
  );
}

export default Hero;

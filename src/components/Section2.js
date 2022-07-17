import React from 'react'

export default function section2() {
  return (
   
       <>
       <div className="container mb-5" id="Section2">
    <div className="row mt-5">
      <span className="underline ">
        <h2 className="text-center line">Our Panellists</h2>
      </span>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5   ms-sm-5">
      <div className="col d-flex justify-content-center">
        <div className="card border-0 ">
          <img src={require("../assests/images/person-1.png")} className="card-img-top" alt="webtext"/>
          <div className="card-body">
            <h5 className="card-title">Aniruudh Patel</h5>
            <p id="info">(Head, Target)</p>
            <img src={require("../assests/images/meta.png")} alt="social" className="img-fluid float-end " width="32px" height="16px"
              style={{paddingRight: "0.5rem;"}}/>
            <i className="fa-brands fa-linkedin-in float-end " style={{paddingRight: "1rem",fontSize:"1.5em ;"}}></i>
            <i className="fa-brands fa-instagram float-end" style={{paddingRight: "1rem",fontSize:"1.5em ;"}}></i>
          </div>

        </div>

      </div>
      <div className="col d-flex justify-content-center">
        <div className="card border-0 ">
          <img src={require("../assests/images/person-2.png")} className="card-img-top" alt="webtext"/>
          <div className="card-body">
            <h5 className="card-title">Mayank Singh</h5>
            <p id="info">(HRBP, Amazon)</p>
            <img src={require("../assests/images/meta.png")} alt="social" className="img-fluid float-end " width="32px" height="16px"
              style={{paddingRight: "0.5rem;"}}/>
            <i className="fa-brands fa-linkedin-in float-end " style={{paddingRight: "1rem",fontSize:"1.5em ;"}}></i>
            <i className="fa-brands fa-instagram float-end" style={{paddingRight: "1rem",fontSize:"1.5em ;"}}></i>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center">
        <div className="card border-0 ">
          <img src={require("../assests/images/person-3.png")} className="card-img-top" alt="webtext"/>
          <div className="card-body">
            <h5 className="card-title">Ajit Singh</h5>
            <p id="info">(HR, Dell)</p>
            <img src={require("../assests/images/meta.png")} alt="social" className="img-fluid float-end " width="32px" height="16px"
              style={{paddingRight: "0.5rem;"}}/>
            <i className="fa-brands fa-linkedin-in float-end " style={{paddingRight: "1rem",fontSize:"1.5em ;"}}></i>
            <i className="fa-brands fa-instagram float-end" style={{paddingRight: "1rem",fontSize:"1.5em ;"}}></i>
          </div>
        </div>
      </div>
    </div>
  </div>
       </>
  )
}

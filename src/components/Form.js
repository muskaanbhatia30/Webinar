// import React, { useRef } from 'react'

const Form = () => {
    // const register=useRef(null);
    
    // const gotToRegister=()=>
    // {
    //    window.scrollTo({
    //     top:register.current.offsettop,
    //     behavior:"smooth"
    //    })
    // }


  return (
    <div>
       <div className="container g-0 mt-5  mb-5">
    <div className="row mt-5 mb-5 ">
      <span className="underline  ">
        <h2 className="text-center line">Register</h2>
      </span>
    </div>
    <div className="row mt-5  d-flex justify-content-center g-0" >

      <div className="col-md-5  form-l">
        <img src={require("../assests/images/Group 130.png")} alt="form" className="img-fluid float-end  me-5 mt-4" style={{width: "4.5rem"}}/>
        <h3 className="d-flex justify-content-center ">Join with Us!</h3>
        <div className="row mt-5 d-flex justify-content-center ">
          <input type="text" className="form-control" id="exampleFormControlInput1" name="personName" placeholder="Name"/>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="Email"/>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          <input type="tel" className="form-control" id="exampleFormControlInput1" name="phone" placeholder="Phone number"/>
        </div>

        <button type="submit" className="btn mt-5 mx-auto d-block">Submit</button>

      </div>

      <div className="col-md-5  form-r" >
        <img src={require("../assests/images/Group 137.png")} alt="form" className="img-fluid float-end  me-5 mt-2" style={{width: "5.5rem"}}/>
        <h3 className="ms-5  mt-5" style={{color: "white", paddingTop: "8rem", lineHeight: "2.5rem"}}>Ask any query and
          <br/>learn how to grow with <br/>our panellist
        </h3>
        <img src={require("../assests/images/Group 136.png")} alt="form" className="img-fluid mx-auto d-block" style={{width: "7rem"}}/>
     </div>
    </div>
  </div>
    </div>
  )
}

export default Form

import React from 'react'
import path from '../assests/images/Group 152.png'
import {Link} from 'react-scroll'

export default function section() {

  return (
    <div>
      <>
      <div className="container" >
            <div className="row mt-5 ">
                    <div className="col-md-6 ">
                            <h1 className="display-1">The Future<br/>of Remote<br/>Hiring <img src={require("../assests/images/Frame 27.png")} alt="abc" className="img-fluid" width="136px" height="70px"/></h1>
                            <p className="mt-4">2020 was an unprecedented year for us recruiters.
                            It completely redefined how we operate.
                            There’s so much the year has taught us that can help shape the Future of Remote Hiring</p>
                            <Link to="Section2" spy={true} smooth={true} offset={600} duration={500}><button type="button" className="btn"  >Register</button></Link>
                    </div>
                    <div className="col-md-6">
                        <img src={path} className="float-end header-img img-fluid" alt="" width="500px" height="500px "/>
                    </div>
            </div>
       </div>
      </>
    </div>
  )
}

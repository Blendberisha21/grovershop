import React from 'react'
import "./index.css"
import logo from "../images/logo.png"

const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='fPart'>
                    <img src={logo} alt="logo" />
                    <p>Fast delivery, which is active all <br />
                        over the world, serves with many <br />
                        transportation vehicles.</p>
                </div>

                <div className='boxPart'>
                    <h1>Company</h1>
                    <p>About Us <br />
                        Blog <br />
                        All Products <br />
                        Locations Map</p>
                </div>


                <div className='boxPart'>
                    <h1>Services</h1>
                    <p>Order tracking <br />
                        Wish List <br />
                        My account <br />
                        Terms & Conditions</p>

                </div>


                <div className='boxPart'>
                    <h1>Get in Touch</h1>
                    <h6>Subscribe to our weekly <br /> Newsletter and receive  <br />updates via email.</h6>
                </div>




            </div>
            <div className='bottom'>
                <h1>All Rights Reserved @ Blend 2023    </h1>

                <div className='terms'>

                    <h1>Terms & Conditions  </h1>
                    <h1>Privacy & Policy</h1>
                </div>
            </div>
        </>
    )
}

export default Footer
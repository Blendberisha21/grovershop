import React from 'react'
import "./index.css"
import cook from "../images/cook.png"
import icon from "../images/icon.png"

const Deliver = () => {
    return (
        <div id="delivery">
        <div className='deliver'>
            <div className='texts'>
                <h3>HOME DELIVERY</h3>
                <h1>Sit at Home We Will Take <br /> Care Your Order</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos<br />
                    ducimus qui blanditiis praesentium voluptatum <br />
                    deleniti atque corrupti quos </p>
                <button>Explore Now</button>
            </div>

          <div className='cook'>
            <img src={cook} alt="cook" />
            <div className='smallBoxy'>
              <img src={icon} alt="icon"/>
              <h3>Bike Delivery</h3>
              <p>Bicycle service ensures that your<br/> 
              packages arrive quickly</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="417" height="304" viewBox="0 0 417 304" fill="none">
                <path d="M0 24.499C0 9.61178 13.4133 -1.68403 28.0835 0.848944L397.083 64.5612C408.592 66.5483 417 76.532 417 88.2112V279.836C417 294.61 403.779 305.876 389.193 303.532L20.1927 244.244C8.55676 242.375 0 232.333 0 220.548V24.499Z" fill="#03A66B" />
            </svg>
            </div>

        </div>
        </div>
    )
}

export default Deliver
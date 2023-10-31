import React from 'react'
import "./index.css"
import chef from "../images/chef.png"

const Body = () => {
    return (
        <div id="body">

        <div className='body'>
           <div className='page'>
            <div className='head'>
            <div className='fDiv'>
                <p>More than Faster</p>
            </div>
               <h1>Groceries<br/> delivered in as <br/>little as <span id="span">2 hours</span> </h1>
              <p>Grocen atssures fresh grocery every morning to your <br/> family without getting out in this pandemic.</p>
               <button>Order Now</button>
               </div>
               <img className='chef' src={chef} alt="chef"/>
               </div>
        </div>
        </div>

    )
}

export default Body
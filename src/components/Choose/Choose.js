import React from 'react'
import "./index.css"
import choose from "../images/choose.png"
import berry from "../images/berry.png"


const Choose = () => {
  return (
    <div id="choose">
    <div className='choose'>
      <div className='chooseImage'>

        <div className='smallBox'>
          <h1>Melting Cheese</h1>
          <p>Red Stovery</p>
          <img src={berry} alt="berry" />
<h3>$49.66</h3>
        </div>


        <img src={choose} alt="choose" />
      </div>
      <div className='text'>
        <h6>WHY CHOOSE US</h6>
        <h1>Find Favorites And <br /> Discover New Ones</h1>
        <p>At vero eos et accusamus et iusto odio<br /> dignissimos ducimus blanditiis praesen <br />voluptatum deleniti.</p>
        <button>Explore Now</button>
      </div>
    </div>
    </div>
  )
}

export default Choose
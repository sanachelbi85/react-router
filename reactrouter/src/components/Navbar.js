import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


function Navbar({setText, setRate}) {
  return (
    <div className='nav'>

         <ul>
          <div>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link></div>
        <li className='eb3ed-8adi-ok'><a href="#"><input type="text" placeholder='search movie...' onChange={(e)=> setText(e.target.value)}></input></a></li>
      </ul> 
      <ReactStars classNames="star"
                count={5}
                size={24}
                activeColor="#ffd700"
                onChange={(newrate)=> setRate(newrate)}
                />
    </div>
  )
}

export default Navbar
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import "./Movies.css";

function Trailer({movies}) {
  const params=useParams();

  const movie=movies.filter((el)=>el.name==params.name)[0];
console.log(movie)
  return (



     <div >
     <div >
       <img src={movie.posterurl} style={{alignItems:"center", width:"50%"}}  />
       </div>
        <div className="details" >
         <div className="center"> 
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        <div style={{display:"flex", justifyContent:"center"}}>
        <ReactStars classNames="star"
                 count={5}
                 size={24}
                 activeColor="#ffd700"
                 edit={false}
                 value={movie.rating}
                 />
                 </div>
                 </div>
     </div>
     </div>
  )
}

export default Trailer
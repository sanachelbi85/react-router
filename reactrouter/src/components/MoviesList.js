import React from 'react';
import MoviesCard from './MoviesCard';
import ToAddmovie from './ToAddmovie';



function MoviesList({movies, setMovies, text, rate}) {
  return (
  <div>
    <ToAddmovie movies={movies} setMovies={setMovies}/>
    <div style={{display:"flex", flexWrap:"wrap", width:"100%", marginTop:"311px", padding:"20px", justifyContent:"space-around", marginLeft:"147px"}}> 

{movies.filter((el)=>el.name.toUpperCase().includes(text.toUpperCase()) && el.rating>=rate)
.map((el) => <MoviesCard movie={el}/>)} 

 
    </div>
    </div>
  )
}

export default MoviesList
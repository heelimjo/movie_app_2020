import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";


//movie컴포넌트는 state가 필요하지 않아서 class대신 function으로 함
function Movie( {id, title, synopsis, poster, genres}){
return ( 
    <div className="Movie">

    <Link
        to={{
            pathname: `/movie/${id}`,
            state:{
                title,
                synopsis,
                poster,
                genres
            }

        }}
    >
   
        <div className="Movie__Column">
          <MoviePoster poster={poster} alt={title} />
        </div>
        <div className="Movie__Column">
            <h1>{title}</h1>
            <div className="Movie__Genres">
                 {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
            </div>
             <div className="Movie__Synopsis">
                
                    {synopsis.slice(0, 140)}...

             </div>
        </div>
        </Link>
    </div>
   
 );
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}


export default Movie;
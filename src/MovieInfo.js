import React from 'react';

function MovieInfo(props) {

    return(
        <div>
            <h3>{props.movie.Title}</h3>
            <img src={props.movie.Poster} alt={props.movie.Title} />
            <h4>{props.movie.Rated}</h4>
            <h4>{props.movie.Year}</h4>
        </div>
    );
};

export default MovieInfo;
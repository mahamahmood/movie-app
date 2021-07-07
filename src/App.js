import './App.css';
import React, { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';
import axios from 'axios';

function App() {
  const [query, updateQuery] = useState({
    url: 'Your own URL with your own API Keys',
    option: '&t=',
    title: '',
    searchURL: ''
  });

  const [movie, updateMovie] = useState({});

  useEffect(()=> {
    query.searchURL.length > 0 && 
    (async () => {
      try {
        /// fetch
        // const response = await fetch(query.searchURL);
        // const data = await response.json();
        // await updateMovie({ ...movie, ...data });
        /// axios
        const response = await axios.get(query.searchURL);
        await updateMovie({ ...movie, ...response.data });
        await updateQuery({ ...query, searchURL: '', title: '' });
      }
      catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  const handleChange = (event) => {
    updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
    // console.log(query);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateQuery({ ...query, searchURL: query.url + query.option + query.title });
  };
  // console.log(query.searchURL);

  return (
    <div className="App">
      <h2>Movie App</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Movie Title: </label>
        <input 
          id="title"
          type="title"
          value={query.title}
          onChange={handleChange}
        />
        <input type="submit" value="Search for a movie" />
      </form>
      {Object.keys(movie).length > 0 && <MovieInfo movie={movie} />}
    </div>
  );
}

export default App;

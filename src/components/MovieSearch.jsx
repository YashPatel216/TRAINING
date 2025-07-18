import React, { useEffect, useState } from 'react';
import Result from './Result.jsx';
import axios from 'axios';

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    axios.get(APIURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const getSearchedMovies = () => {
    axios.get(SEARCHAPI + search)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching searched movies:", error);
      });
  };

  const addToFavorites = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="max-w-[2000px] shadow-xl min-h-[400px] p-4">
      <input
        type="search"
        value={search}
        onChange={changeTheSearch}
        placeholder="Search movies..."
        className="w-full border border-black rounded text-slate-700 p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <h2 className="text-xl font-semibold mt-4 mb-2">Movie Results</h2>
      <Result movies={movies} addToFavorites={addToFavorites} />

      <h2 className="text-xl font-semibold mt-8 mb-2">Favourites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favourite movies added yet.</p>
      ) : (
        <Result movies={favorites} addToFavorites={() => {}} />
      )}
    </div>
  );
}

export default MovieSearch;

import AnimeList from "./dummy-data";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
      const fetchMovieList = () => {
        fetch('https://api.jikan.moe/v3/top/anime')
        .then((response) => response.json())
        .then ((result) => {
          setMovieList(result.top)
          setIsLoading(false)
        })
        .catch((error) => console.log(error))
      }
      
      fetchMovieList()
  }, [])

  return (
    <div className="container my-5">
      <h1 className="text-center">Anime List</h1>
      <div className="container my-5">
        <div id="daftar-anime" className="row">
          <MovieCard AnimeList={movieList}/>
        </div>
      </div>
    </div>
  );
};

export default App;

import AnimeList from "./dummy-data";
import MovieCard from "./MovieCard";

const App = () => {
  console.log(AnimeList)
  return (
    <div className="container my-5">
      <h1 className="text-center">Anime List</h1>
      <div className="container my-5">
        <div id="daftar-anime" className="row">
          <MovieCard AnimeList={AnimeList}/>
        </div>
      </div>
    </div>
  );
};

export default App;

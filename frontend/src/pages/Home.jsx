import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovie, fetchPopularMovies} from "../services/api"

function Home() {

    // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  const movies = fetchPopularMovies();
  console.log(movies)

  const handleSearch = (event) => {
    event.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">

        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        { 
        movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        ) }
      </div>
    </div>
  );
}

export default Home;

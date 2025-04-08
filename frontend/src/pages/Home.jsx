import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {

    // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "john", release_date: "2023" },
    { id: 2, title: "doe", release_date: "2024" },
    { id: 3, title: "jane", release_date: "2025" },
  ];

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
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;

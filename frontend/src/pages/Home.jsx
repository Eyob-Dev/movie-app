import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovie, fetchPopularMovies } from "../services/api";
import { Commet } from "react-loading-indicators";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
  
    try {
      setLoading(true);
      const searchResult = await searchMovie(searchQuery);
      setMovies(searchResult); 
      setError(null);
      setSearchQuery(""); 
    } catch (error) {
      console.log(error);
      setError("Failed to fetch movie..");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="movies-grid">
        {loading ? (
          <div className="loading-animation">
            <Commet color="#e50914" size="medium" text="loading..." />
          </div>
        ) : (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        )}
      </div>
    </div>
  );
}

export default Home;

function MovieCard({ movie }) {
  const onFavoriteClick = () => {
    alert("Clicked on favorite button");
  };
  return (
  <div className="movie-card">
    <div className="movie-poster">
      <img src={movie.url} alt={movie.title} />
      <div className="movie-overlay">
        <button className="favorite-button" onClick={onFavoriteClick}>
          ♡
        </button>
      </div>
    </div>
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  </div>
  );
}

export default MovieCard;

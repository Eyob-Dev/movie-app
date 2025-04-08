import React from 'react';
import '../css/Favorites.css';
function Favorites(){
    return (
        <div className="favorites-empty">
            <h2>No favorite movie yet.</h2>
            <p>Click on the heart icon to add a movie to your favorites.</p>
        </div>
    );
}

export default Favorites;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./modal";

function MovieList() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleWheel = (event) => {
    if (event.deltaMode === event.DOM_DELTA_PIXEL && event.deltaX !== 0) {
      const delta = event.deltaX * 0.2;
      const currentScrollPos = event.target.scrollLeft;
      const newScrollPos = currentScrollPos + delta;
      event.target.scrollLeft = newScrollPos;
      setScrollPosition(newScrollPos);
      event.preventDefault();
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ul class="carusel" onWheel={handleWheel}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="card" onClick={() => handleMovieClick(movie)}>
              {movie.poster && (
                <img src={movie.poster} class="poster" alt="Avatar" />
              )}
              <div className="container">
                <h5>
                  <b>{movie.title}</b>
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal movie={selectedMovie} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default MovieList;

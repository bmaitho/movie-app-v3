import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/api/movies/all');
                const data = await response.json();
                const moviesWithDescriptions = data.map(movie => ({
                    ...movie,
                    showDescription: false
                }));
                setMovies(moviesWithDescriptions);
                setFilteredMovies(moviesWithDescriptions);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const toggleDescription = (movieId) => {
        const updatedMovies = movies.map(movie => 
            movie.id === movieId
                ? { ...movie, showDescription: !movie.showDescription }
                : movie
        );
        setMovies(updatedMovies);
        filterMovies(searchQuery, updatedMovies);
    };

    const chunkMovies = (movies, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < movies.length; i += chunkSize) {
            chunks.push(movies.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        filterMovies(query, movies);
    };

    const filterMovies = (query, movies) => {
        const filtered = query
            ? movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
            : movies;
        setFilteredMovies(filtered);
    };

    const movieColumns = chunkMovies(filteredMovies, 4);

    return (
        <div className="movie-page">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className="movie-grid">
                {movieColumns.map((column, colIndex) => (
                    <div key={colIndex} className="movie-column">
                        {column.map(movie => (
                            <div key={movie.id} className="movie-card">
                                <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                                <h2>{movie.title}</h2>
                                {movie.showDescription && <p>{movie.description}</p>}
                                <button onClick={() => toggleDescription(movie.id)}>
                                    {movie.showDescription ? 'Hide Description' : 'View Description'}
                                </button>
                                <Link to={`/movies/${movie.id}`}>View Poster</Link>
                                <Link to={`/reviews/${movie.id}`}>Review Movie</Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviePage;

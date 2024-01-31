import { useState, useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//79604b8c

const API_URL = 'http://www.omdbapi.com?apikey=79604b8c';

// eslint-disable-next-line no-unused-vars
const movie1 = {
   
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
    
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Spiderman')

    },  []);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value) }
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>

                { movies?.length >0
                    ? (
                        <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>

                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )

                }
             </div>
         
    );
};


export default App;
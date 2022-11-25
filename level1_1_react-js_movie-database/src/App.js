
import './App.css';
import movies from './components/databaseMovies/Data';
import MovieCards from './components/movieCards/MovieCards';

function App() {
  return (
    <div className="App">
      {movies.map((singleMovie, index) => {
        return <MovieCards key={index} title={singleMovie.title} year={singleMovie.year} director={singleMovie.director} duration={singleMovie.duration} genre1={singleMovie.genre[0]} genre2={singleMovie.genre[1]} genre3={singleMovie.genre[2]} genre4={singleMovie.genre[3]} rate={singleMovie.rate} />
      })};
    </div>
  );
}

export default App;

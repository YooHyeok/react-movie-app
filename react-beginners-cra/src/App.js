import ExamCombine from "./component/example/ExamCombine";
import { useEffect, useState } from "react";
function App() {

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMoviesThen = () => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    .then(response=>response.json())
    .then(json=>{
      setMovies(json.data.movies)
      setLoading(false)
    })
  }

  const getMoviesAsync = async() => {
    try {
      const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      const json = await response.json()
      setMovies(json.data.movies)
      setLoading(false)
    } catch (error) {
      console.log(error)      
    }
  }
  useEffect(async() => {
    // getMoviesThen();
    getMoviesAsync();
  }, [])
  return (
    <div>
      {/* <ExamCombine/> */}
      {loading ? 
      <h1>Loading...</h1> : 
      <div>
        {movies.map(movie=>
        <div key={movie.id}>
          <img src={movie.medium_cover_image}/>
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>{movie.genres.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </div>
        )}
      </div>
      }
    </div>
  );
}

export default App;

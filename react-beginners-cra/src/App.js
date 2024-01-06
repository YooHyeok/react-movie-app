import ExamCombine from "./component/example/ExamCombine";
import { useEffect, useState } from "react";
import Movie from "./component/movie/Movie";
function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

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
    // const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    // const json = await response.json()
    /* Short Cut */
      const json = await((await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json())
      setMovies(json.data.movies)
      setLoading(false)
    } catch (error) {
      console.log(error)      
    }
  }
  useEffect(() => {
    // getMoviesThen();
    getMoviesAsync();
  }, [])

  return (
    <div>
      {/* <ExamCombine/> */}
      {loading ? 
      <h1>Loading...</h1> :
      movies.map(movie=> <Movie 
        key={movie.id}
        mediumCoverImage={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
        />
      )
      }
    </div>
  );
}

export default App;

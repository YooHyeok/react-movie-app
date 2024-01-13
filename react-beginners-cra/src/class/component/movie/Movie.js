import {Component} from "react"
import {PropTypes} from "prop-types"
import "./Movie.css";
export default class Movie extends Component{

  /* constructor(props) {
    super(props)
  } */

  render() {
    const {id, year, title, summary, poster, genres} = this.props
    return (
      <div className="movie">
        <img className="movie__poster" src={poster} alt={title} title={title}/>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className='movie__genres'>
            {genres.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
          <p className="movie__summary">{summary}</p>
        </div>

      </div>
    );
  }
}
Movie.defaultProps = {
  genres: []
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
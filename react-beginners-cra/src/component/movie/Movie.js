import PropTypes from 'prop-types';
export default function Movie({mediumCoverImage, title, summary, genres}) {

    return (
      <div>
        <img src={mediumCoverImage} alt={title}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>{genres.map((g, i) => <li key={i}>{g}</li>)}</ul>
      </div>
    );
}

Movie.prototype={
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}


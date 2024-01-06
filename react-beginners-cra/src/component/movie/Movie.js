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



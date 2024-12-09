// movie info to display from OMDB response

function MovieDetail(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: "0 auto" }}
      />
      <div>Genre: {props.genre}</div>
      <div>Released: {props.released}</div>
      <div>Runtime: {props.runtime}</div>
      <div>
        Ratings: Metacritic {props.metascore}, IMDb {imdbRating}
      </div>
      <div>Plot: {props.plot}</div>
    </div>
  );
}

export default MovieDetail;

import Movie from "../Movie";

const Dashboard = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <div className="grid gap-16 grid-cols-fluid">
      {res.results.map((movie) => {
       return <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_data={movie.release_data}
        />;
      })}
    </div>
  );
};

export default Dashboard;

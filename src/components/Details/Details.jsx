import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/states/moviesSlice";

const Details = () => {
  const dispatch = useDispatch();
  const detailMovie = useSelector((state) => state.movies.movies);
  const { id } = useParams();
  const moviesFilter = detailMovie.filter((f) => f.id == id);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="bg-black h-[100%]">
      <Link to="/">
        <button className="text-lightGrey font-medium bg-darkGrey rounded-full px-10 py-2 mt-5 ml-2 hover:bg-pink hover:transition hover:duration-300">Volver a home</button>
      </Link>
      {moviesFilter.map((m, i) => {
        return (
          <div key={i} className="lg:flex h-screen lg:pl-[20%] pb-14 ">
            <img src={m.picture} alt="movie img" className="w-44 h-50 ml-[30%] mr-[30%] mt-5 mb-5 lg:w-96 lg:h-[660px] lg:mt-0 lg:ml-10 lg:mr-10"/>
            <div className="bg-orange rounded-xl lg:w-[520px] shadow-xl shadow-softGrey">
              <h1 className="text-3xl pt-5 lg:text-5xl font-bold text-center text-darkGrey lg:pt-20">
                {m.title}
              </h1>
              <h4 className="font-normal text-base px-10 pt-3 text-end pb-3">{m.genre}</h4>
              <h4 className="font-medium text-lg lg:text-xl text-center px-10 lg:pt-3">{m.description}</h4>
              <h4 className="text-center font-normal text-lg lg:text-xl pb-3 pt-3">Elenco <br/> {(m.cast + ' ')}</h4>
              <h4 className="text-center font-normal text-lg lg:text-xl pb-3">Dirección <br/> {(m.crew + ' ')}</h4>
              <h4 className="text-center font-normal text-lg lg:text-xl pb-3">Fecha de lanzamiento <br/> {m.year}</h4>
              <h4 className="text-center font-normal text-lg lg:text-xl pb-3">⭐{m.rating}/5</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
